from __future__ import annotations

import argparse
import base64
import re
import shutil
import subprocess
from pathlib import Path

import sys

sys.path.append(str(Path(__file__).resolve().parent))
from pipeline_utils import ensure_dir, thesis_root, write_json  # noqa: E402


DATA_IMAGE_RE = re.compile(
    r"^\[(?P<key>[^\]]+)\]:\s*<data:image/(?P<ext>[a-zA-Z0-9.+-]+);base64,(?P<b64>[^>]+)>\s*$"
)


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("--input", default="", help="Markdown input (default: thesis/skripsi.md)")
    p.add_argument("--out-dir", default="", help="Output directory (default: thesis/latex)")
    p.add_argument("--tex-name", default="skripsi.tex")
    p.add_argument("--sanitized-name", default="skripsi.sanitized.md")
    return p.parse_args()


def normalize_math_escapes(md: str) -> str:
    # Heuristic: in many exported Markdown docs, inline math uses `\\alpha` and `\\<`
    # which become invalid LaTeX. Inside math ($...$ / $$...$$) normalize:
    # - `\\` + letter -> `\` + letter
    # - `\<` -> `<`, `\>` -> `>`
    out: list[str] = []
    i = 0
    in_math = False
    delim = ""
    n = len(md)
    while i < n:
        ch = md[i]
        if not in_math:
            if ch == "$":
                if i + 1 < n and md[i + 1] == "$":
                    in_math = True
                    delim = "$$"
                    out.append("$$")
                    i += 2
                    continue
                in_math = True
                delim = "$"
                out.append("$")
                i += 1
                continue
            out.append(ch)
            i += 1
            continue

        # in math
        if delim == "$$" and md[i : i + 2] == "$$":
            in_math = False
            out.append("$$")
            i += 2
            continue
        if delim == "$" and ch == "$":
            in_math = False
            out.append("$")
            i += 1
            continue

        nxt2 = md[i : i + 2]
        if nxt2 == "\\\\" and i + 2 < n:
            nxt = md[i + 2]
            if ("A" <= nxt <= "Z") or ("a" <= nxt <= "z"):
                out.append("\\")
                i += 2
                continue
        if nxt2 == "\\<":
            out.append("<")
            i += 2
            continue
        if nxt2 == "\\>":
            out.append(">")
            i += 2
            continue

        out.append(ch)
        i += 1

    return "".join(out)


UNICODE_MATH_MAP = {
    "≤": r"\leq",
    "≥": r"\geq",
    "≠": r"\neq",
    "±": r"\pm",
    "×": r"\times",
    "→": r"\to",
}


def normalize_unicode_math_symbols(md: str) -> str:
    """Replace common Unicode math symbols to LaTeX-safe forms.

    Goal: make `pdflatex` builds robust (it often errors on U+2264 etc).
    Behavior:
    - inside math ($...$ / $$...$$): replace with LaTeX commands (e.g. \\leq)
    - outside math: wrap into inline math using `$...$` (Pandoc-friendly)
    - inside fenced code blocks: no changes
    """
    out: list[str] = []
    in_code = False
    in_math = False
    delim = ""

    i = 0
    n = len(md)
    while i < n:
        # Fenced code handling (``` toggles)
        if md.startswith("```", i):
            in_code = not in_code
            out.append("```")
            i += 3
            continue

        ch = md[i]
        if in_code:
            out.append(ch)
            i += 1
            continue

        if not in_math:
            if ch == "$":
                if i + 1 < n and md[i + 1] == "$":
                    in_math = True
                    delim = "$$"
                    out.append("$$")
                    i += 2
                    continue
                in_math = True
                delim = "$"
                out.append("$")
                i += 1
                continue

            if ch in UNICODE_MATH_MAP:
                out.append("$" + UNICODE_MATH_MAP[ch] + "$")
                i += 1
                continue

            out.append(ch)
            i += 1
            continue

        # in math
        if delim == "$$" and md.startswith("$$", i):
            in_math = False
            out.append("$$")
            i += 2
            continue
        if delim == "$" and ch == "$":
            in_math = False
            out.append("$")
            i += 1
            continue

        if ch in UNICODE_MATH_MAP:
            out.append(UNICODE_MATH_MAP[ch])
            i += 1
            continue

        out.append(ch)
        i += 1

    return "".join(out)


def rewrite_paths_for_latex_build(md: str) -> str:
    # The sanitized markdown lives in `thesis/latex/`, while the authoring file
    # lives in `thesis/`. Rewrite known relative asset paths so LaTeX can find them
    # when compiling from `thesis/latex/`.
    #
    # Example: `![](output/figures/x.png)` -> `![](../output/figures/x.png)`
    md = re.sub(r"(\]\()output/", r"\1../output/", md)
    md = re.sub(r"(\]:\s*)output/", r"\1../output/", md)
    return md


def strip_frontmatter_for_latex(md: str) -> str:
    # Keep authoring-friendly cover + manual TOC in skripsi.md, but for LaTeX we
    # generate a proper titlepage + toc via template. So we strip everything
    # before the first "BAB I" heading if it exists.
    lines = md.splitlines()
    for i, line in enumerate(lines):
        if re.match(r"^#\s+\*\*BAB\s+I\*\*", line.strip()):
            return "\n".join(lines[i:]) + "\n"
    return md


def sanitize_headings_for_latex(md: str) -> str:
    # Make headings clean so numbering comes from LaTeX, not from typed prefixes.
    #
    # Examples:
    # - "# **BAB I**  **PENDAHULUAN**" -> "# PENDAHULUAN"
    # - "## **1.1 Latar Belakang Masalah**" -> "## Latar Belakang Masalah"
    out_lines: list[str] = []
    in_code = False
    for line in md.splitlines():
        if line.strip().startswith("```"):
            in_code = not in_code
            out_lines.append(line)
            continue
        if in_code:
            out_lines.append(line)
            continue

        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if not m:
            out_lines.append(line)
            continue

        hashes = m.group(1)
        rest = m.group(2).strip()

        # Drop explicit identifiers like "{#...}" because many of the existing
        # ids in the source start with digits (e.g. "{#1.1-...}") which is not
        # a valid Pandoc identifier and ends up being printed in the heading.
        rest = re.sub(r"\s*\{#.*\}\s*$", "", rest).strip()

        # Remove bold markers and extra spaces
        rest = rest.replace("**", "").strip()
        rest = re.sub(r"\s{2,}", " ", rest)

        # Remove "BAB I/II/III/IV/V ..." prefixes if present
        rest = re.sub(r"^BAB\s+[IVXLC]+\s*", "", rest, flags=re.IGNORECASE)
        # Remove leading numeric prefixes: "1.2.3. Title" -> "Title"
        rest = re.sub(r"^\d+(?:\.\d+)*\.?\s+", "", rest)

        # Drop empty headings (common in exported docs as "# " separators).
        # Leaving them in causes Pandoc to emit empty chapters/sections which
        # breaks numbering (e.g. BAB IV becomes BAB VI).
        if rest == "":
            out_lines.append("")
            continue

        out_lines.append(f"{hashes} {rest}".rstrip())

    return "\n".join(out_lines) + "\n"


LIST_ITEM_RE = re.compile(r"^\s*(?:[-*+]|(?:\d+\.|\d+\)))\s+")
FENCE_RE = re.compile(r"^\s*```")


def normalize_hard_line_breaks_for_latex(md: str) -> str:
    """
    Many WYSIWYG/Notion-style Markdown exports encode paragraph breaks as
    "hard line breaks": a single newline plus two trailing spaces.

    Pandoc turns those into LaTeX `\\\\`, which looks odd in prose and lists.
    For LaTeX output we prefer:
    - prose: treat hard breaks as paragraph breaks (blank line)
    - list items: just remove the hard break marker (avoid `\\\\` inside items)
    """

    lines = md.splitlines()
    out: list[str] = []
    in_code = False

    for i, line in enumerate(lines):
        if FENCE_RE.match(line):
            in_code = not in_code
            out.append(line.rstrip())
            continue

        if in_code:
            out.append(line)
            continue

        if line.endswith("  "):
            base = line.rstrip()
            out.append(base)

            next_line = lines[i + 1] if i + 1 < len(lines) else ""
            if not LIST_ITEM_RE.match(base) and next_line.strip() != "":
                out.append("")
            continue

        out.append(line.rstrip())

    return "\n".join(out) + "\n"


def append_python_visual_appendix(md: str) -> str:
    """Move generated Python visuals to the appendix in the LaTeX build.

    The body chapter now keeps only curated summary visuals/tables. Diagnostic
    and exploratory charts from the Python pipeline remain available to examiners
    as appendix evidence.
    """
    if "Lampiran F Output Visualisasi Python" in md:
        return md

    figures = [
        ("F.1", "Badge Ticker Perusahaan Sampel", "../output/figures/firm_badges.png"),
        ("F.2", "Sample Attrition", "../output/figures/sample_attrition.png"),
        ("F.3", "Missingness Field Bloomberg", "../output/figures/missingness_heatmap.png"),
        ("F.4", "Komposisi Industri", "../output/figures/industry_composition.png"),
        ("F.5", "Matriks Korelasi", "../output/figures/correlation_heatmap.png"),
        ("F.6", "Plot Koefisien Model Utama", "../output/figures/coef_plot.png"),
        ("F.7", "Tren Rata-rata Tahunan", "../output/figures/trends.png"),
        ("F.8", "Distribusi Variabel Utama", "../output/figures/distributions.png"),
        ("F.9", "Scatter SROA dan BQS", "../output/figures/scatter_sroa_bqs.png"),
        ("F.10", "Scatter SROA dan HHI", "../output/figures/scatter_sroa_hhi.png"),
        ("F.11", "Boxplot SROA per Tahun", "../output/figures/box_sroa_by_year.png"),
        ("F.12", "Boxplot BQS per Tahun", "../output/figures/box_bqs_by_year.png"),
        ("F.13", "Rata-rata SROA per Desil BQS", "../output/figures/sroa_by_bqs_decile.png"),
        ("F.14", "Rata-rata SROA per Kuintil HHI", "../output/figures/sroa_by_hhi_quintile.png"),
        ("F.15", "Profil Komponen BQS", "../output/figures/bqs_component_profile.png"),
        ("F.16", "Perbandingan Taksonomi HHI", "../output/figures/hhi_taxonomy_comparison.png"),
        ("F.17", "Perbandingan Koefisien Robustness", "../output/figures/coef_comparison.png"),
    ]

    lines = [
        "",
        "## **Lampiran F Output Visualisasi Python** {-}",
        "",
        "Seluruh gambar pada lampiran ini merupakan output langsung dari pipeline Python. Gambar-gambar tersebut tidak ditempatkan di dalam Bab IV agar bagian utama skripsi hanya memuat rangkuman hasil olah data yang telah dikurasi.",
        "",
    ]
    for no, title, path in figures:
        lines.extend(
            [
                r"\begin{figure}[H]",
                r"\centering",
                rf"\includegraphics[width=0.92\textwidth]{{{path}}}",
                rf"\caption{{{title}}}",
                r"\end{figure}",
                "",
            ]
        )
    lines.extend(
        [
            "## **Lampiran G Audit Data dan Pipeline Pengolahan** {-}",
            "",
            "Audit data final tersedia dalam berkas JSON pipeline pada folder data dan output. Berkas audit tersebut mencatat jumlah perusahaan awal, eksklusi Financials dan Utilities, missing values, kebijakan complete-case BQS, serta rentang panel efektif yang digunakan dalam regresi.",
            "",
        ]
    )
    return md.rstrip() + "\n" + "\n".join(lines)


ABSTRACT_BLOCK_RE = re.compile(
    r"(?s)<!--\s*LATEX_ABSTRACT_START\s*-->\s*(?P<body>.*?)\s*<!--\s*LATEX_ABSTRACT_END\s*-->"
)


def extract_abstract_block(md: str) -> tuple[str, str]:
    """Extract the bilingual abstract block from the authoring Markdown.

    The source file keeps the abstract near the front for readability, but the
    LaTeX build inserts it as body content after the automatically generated TOC.
    """
    m = ABSTRACT_BLOCK_RE.search(md)
    if not m:
        return "", md

    abstract_block = m.group("body").strip() + "\n"
    md_wo_abstract = md[: m.start()] + md[m.end() :]
    return abstract_block, md_wo_abstract


def extract_data_images(md_lines: list[str], assets_dir: Path) -> tuple[list[str], list[dict]]:
    ensure_dir(assets_dir)
    out_lines: list[str] = []
    extracted: list[dict] = []
    for line in md_lines:
        m = DATA_IMAGE_RE.match(line)
        if not m:
            out_lines.append(line)
            continue

        key = m.group("key")
        ext = m.group("ext").split("+")[0].lower()
        b64 = m.group("b64")
        if ext not in {"png", "jpg", "jpeg"}:
            ext = "png"

        out_path = assets_dir / f"{key}.{ext}"
        try:
            raw = base64.b64decode(b64, validate=False)
            out_path.write_bytes(raw)
            out_lines.append(f"[{key}]: assets/{out_path.name}")
            extracted.append({"key": key, "path": f"assets/{out_path.name}", "bytes": len(raw)})
        except Exception as e:
            # Keep original if decode fails
            out_lines.append(line)
            extracted.append({"key": key, "error": str(e)})

    return out_lines, extracted


def run_pandoc(input_md: Path, out_tex: Path) -> None:
    root = thesis_root()
    template = root / "latex" / "template.tex"
    meta = root / "latex" / "metadata.yaml"

    pandoc_bin = shutil.which("pandoc")
    if pandoc_bin is None:
        # Fallback: allow using `pypandoc-binary` inside the project venv.
        try:
            import pypandoc  # type: ignore[import-not-found]

            pandoc_bin = pypandoc.get_pandoc_path()
        except Exception as e:
            raise RuntimeError(
                "Pandoc tidak ditemukan. Install `pandoc` atau install Python package `pypandoc-binary` lalu jalankan script ini dengan venv."
            ) from e

    cmd = [
        pandoc_bin,
        "-f",
        "markdown+tex_math_dollars+raw_tex+raw_html",
        "-t",
        "latex",
        "--standalone",
        "--template",
        str(template),
        "--metadata-file",
        str(meta),
        "--number-sections",
        "--top-level-division=section",
        "-o",
        str(out_tex),
        str(input_md),
    ]
    subprocess.run(cmd, check=True)


def split_hl_content_by_math(content: str) -> str:
    i = 0
    n = len(content)
    parts = []
    current_text = []
    
    def flush_text():
        if current_text:
            text = "".join(current_text)
            if text.strip():
                parts.append(f"\\hl{{{text}}}")
            else:
                parts.append(text)
            current_text.clear()
            
    while i < n:
        if content.startswith("\\[", i):
            flush_text()
            j = i + 2
            while j < n and not content.startswith("\\]", j):
                j += 1
            if j < n:
                parts.append(content[i:j+2])
                i = j + 2
            else:
                parts.append(content[i:])
                i = n
            continue
            
        if content.startswith("\\(", i):
            flush_text()
            j = i + 2
            while j < n and not content.startswith("\\)", j):
                j += 1
            if j < n:
                parts.append(content[i:j+2])
                i = j + 2
            else:
                parts.append(content[i:])
                i = n
            continue
            
        matched_env = None
        for env in ["equation", "equation*", "align", "align*", "gather", "gather*"]:
            if content.startswith(f"\\begin{{{env}}}", i):
                matched_env = env
                break
        if matched_env:
            flush_text()
            end_tag = f"\\end{{{matched_env}}}"
            j = i + len(f"\\begin{{{matched_env}}}")
            while j < n and not content.startswith(end_tag, j):
                j += 1
            if j < n:
                parts.append(content[i:j+len(end_tag)])
                i = j + len(end_tag)
            else:
                parts.append(content[i:])
                i = n
            continue
            
        if content.startswith("$$", i):
            flush_text()
            j = i + 2
            while j < n and not content.startswith("$$", j):
                j += 1
            if j < n:
                parts.append(content[i:j+2])
                i = j + 2
            else:
                parts.append(content[i:])
                i = n
            continue
            
        if content[i] == "$" and (i == 0 or content[i-1] != "\\"):
            flush_text()
            j = i + 1
            while j < n and (content[j] != "$" or content[j-1] == "\\"):
                j += 1
            if j < n:
                parts.append(content[i:j+1])
                i = j + 1
            else:
                parts.append(content[i:])
                i = n
            continue
            
        current_text.append(content[i])
        i += 1
        
    flush_text()
    return "".join(parts)


def sanitize_hl_blocks(tex: str) -> str:
    out = []
    i = 0
    n = len(tex)
    while i < n:
        if tex.startswith("\\hl{", i):
            start_content = i + 4
            depth = 1
            j = start_content
            while j < n and depth > 0:
                if tex[j] == "{":
                    depth += 1
                elif tex[j] == "}":
                    depth -= 1
                j += 1
            if depth == 0:
                content = tex[start_content:j-1]
                sanitized_content = split_hl_content_by_math(content)
                out.append(sanitized_content)
                i = j
            else:
                out.append(tex[i])
                i += 1
        else:
            out.append(tex[i])
            i += 1
    return "".join(out)


def postprocess_pandoc_tex(tex: str) -> str:
    """
    Small fixes after Pandoc -> LaTeX:
    - Avoid empty headings shifting chapter numbering (handled in markdown sanitization)
    - Remove Pandoc's LTcaptype=none wrapper, which can trigger
      "No counter 'none' defined" with pdflatex/hyperref on longtables
    - Improve readability of the very wide "Tabel 2.1" longtable by reallocating column widths
    """

    tex = sanitize_hl_blocks(tex)

    tex = tex.replace(
        "{\\def\\LTcaptype{none} % do not increment counter\n\\begin{longtable}",
        "{\\begin{longtable}",
    )

    def full_width_longtable(match: re.Match[str]) -> str:
        cols = match.group(1)
        n = len(cols)
        widths_by_n = {
            2: [0.32, 0.68],
            3: [0.25, 0.35, 0.40],
            4: [0.22, 0.26, 0.26, 0.26],
            5: [0.20, 0.20, 0.20, 0.20, 0.20],
            6: [0.16, 0.17, 0.17, 0.17, 0.17, 0.16],
            8: [0.12, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.12],
            9: [0.12] + [0.11] * 8,
            10: [0.10] * 10,
            11: [0.14] + [0.086] * 10,
        }
        widths = widths_by_n.get(n, [1.0 / max(n, 1)] * n)
        specs = " ".join(
            rf">{{\raggedright\arraybackslash}}p{{\dimexpr {w:.3f}\textwidth - 2\tabcolsep}}"
            for w in widths
        )
        return rf"\begin{{longtable}}[]{{@{{}}{specs}@{{}}}}"

    # Pandoc emits natural-width longtables (e.g. @{}llll@{}) for many
    # markdown pipe tables. The faculty format expects tables to fill the text
    # block, so convert those natural specs to full-width paragraph columns.
    tex = re.sub(r"\\begin\{longtable\}\[\]\{@\{\}([lcr]+)@\{\}\}", full_width_longtable, tex)

    def promote_table_title(match: re.Match[str]) -> str:
        number = match.group(1).strip()
        title = re.sub(r"\s+", " ", match.group(2)).strip()
        begin = match.group(3)
        heading = (
            r"\phantomsection" + "\n"
            + rf"\addcontentsline{{lot}}{{table}}{{\protect\numberline{{{number}}}{{{title}}}}}" + "\n"
            + rf"\noindent\textbf{{Tabel {number} {title}}}" + "\n\n"
        )
        return heading + begin + "\n" + r"\toprule"

    # Authoring markdown keeps table titles readable as bold paragraphs. In the
    # final PDF they should be real LaTeX captions so numbering uses Arabic
    # chapter counters and the entries appear in Daftar Tabel.
    tex = re.sub(
        r"\\textbf\{Tabel\s+(\d+\.\d+)\s+([^{}]+?)\}\s*\n\n(\{?\\begin\{longtable\}\[\]\{.*?@\{\}\})\n\\toprule",
        promote_table_title,
        tex,
        flags=re.DOTALL,
    )

    marker = r"\hypertarget{tabel-2.1-ringkasan-penelitian-terdahulu}"
    idx = tex.find(marker)
    if idx != -1:
        start = tex.find(r"\begin{longtable}", idx)
        if start != -1:
            end = tex.find(r"\toprule", start)
            if end != -1:
                header = tex[start:end]
                if header.count(r"\real{0.50}") >= 2:
                    header = header.replace(r"\real{0.50}", r"\real{0.35}", 1)
                    header = header.replace(r"\real{0.50}", r"\real{0.65}", 1)
                    tex = tex[:start] + header + tex[end:]

    return tex


def main() -> int:
    args = parse_args()
    root = thesis_root()
    input_path = Path(args.input) if args.input else (root / "skripsi.md")
    out_dir = Path(args.out_dir) if args.out_dir else (root / "latex")
    ensure_dir(out_dir)

    assets_dir = out_dir / "assets"
    sanitized_path = out_dir / args.sanitized_name
    out_tex = out_dir / args.tex_name

    md_text = input_path.read_text(encoding="utf-8", errors="replace")
    md_text = normalize_math_escapes(md_text)
    md_text = normalize_unicode_math_symbols(md_text)
    md_text = rewrite_paths_for_latex_build(md_text)
    abstract_block, md_text = extract_abstract_block(md_text)
    md_text = strip_frontmatter_for_latex(md_text)
    md_text = sanitize_headings_for_latex(md_text)
    md_text = normalize_hard_line_breaks_for_latex(md_text)
    md_text = append_python_visual_appendix(md_text)

    md_lines = md_text.splitlines()
    md_lines, extracted = extract_data_images(md_lines, assets_dir)
    sanitized_path.write_text("\n".join(md_lines) + "\n", encoding="utf-8")

    run_pandoc(sanitized_path, out_tex)
    # Help LaTeX Workshop pick a compatible engine for Pandoc output.
    tex = out_tex.read_text(encoding="utf-8", errors="replace")
    tex = postprocess_pandoc_tex(tex)
    magic = "% !TeX program = pdflatex\n% !TeX encoding = UTF-8\n"

    # Normalize/override TeX magic comments so LaTeX Workshop picks the intended engine.
    lines = tex.splitlines()
    if lines and lines[0].startswith("% !TeX program"):
        lines = lines[1:]
        if lines and lines[0].startswith("% !TeX encoding"):
            lines = lines[1:]
        tex = "\n".join(lines).lstrip("\n") + "\n"

    if not tex.startswith("% !TeX program"):
        tex = magic + tex

    out_tex.write_text(tex, encoding="utf-8")

    write_json(
        {
            "input": str(input_path),
            "sanitized": str(sanitized_path),
            "tex": str(out_tex),
            "extracted_images": extracted,
            "notes": [
                "This generates .tex only. To compile PDF, install a LaTeX engine (xelatex/pdflatex) and run latexmk or xelatex.",
                "The original `thesis/skripsi.md` is not modified; we build from a sanitized copy.",
            ],
        },
        out_dir / "build_meta.json",
    )

    print(f"Wrote -> {sanitized_path}")
    print(f"Wrote -> {out_tex}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

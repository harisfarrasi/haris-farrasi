#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

BASE_DIR = Path(__file__).resolve().parents[1]
MD_PATH = BASE_DIR / "skripsi" / "skripsi.md"
OUT_PATH = BASE_DIR / "skripsi" / "index.html"
CHART_DATA_PATH = BASE_DIR / "skripsi" / "chart-data.json"


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"\{#([^}]+)\}$", "", text).strip()
    text = re.sub(r"[^\w\s-]", "", text, flags=re.UNICODE)
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text or "section"


def parse_reference_defs(lines: List[str]) -> Tuple[List[str], Dict[str, str]]:
    refs: Dict[str, str] = {}
    kept: List[str] = []
    ref_re = re.compile(r"^\[([^\]]+)\]:\s*(\S+)")
    for line in lines:
        m = ref_re.match(line.strip())
        if m:
            refs[m.group(1).strip()] = m.group(2).strip()
        else:
            kept.append(line)
    return kept, refs


def render_inline(text: str, refs: Dict[str, str]) -> str:
    t = html.escape(text, quote=False)

    # Images: inline and reference-style
    def img_inline(m: re.Match[str]) -> str:
        alt = m.group(1) or ""
        src = m.group(2) or ""
        return f'<img src="{src}" alt="{alt}" />'

    def img_ref(m: re.Match[str]) -> str:
        alt = m.group(1) or ""
        key = m.group(2) or ""
        src = refs.get(key, "")
        if not src:
            return m.group(0)
        return f'<img src="{html.escape(src, quote=True)}" alt="{alt}" />'

    t = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", img_inline, t)
    t = re.sub(r"!\[([^\]]*)\]\[([^\]]+)\]", img_ref, t)

    # Links: inline and reference-style
    def link_inline(m: re.Match[str]) -> str:
        label = m.group(1)
        href = m.group(2)
        return f'<a href="{href}" target="_blank" rel="noopener">{label}</a>'

    def link_ref(m: re.Match[str]) -> str:
        label = m.group(1)
        key = m.group(2)
        href = refs.get(key, "")
        if not href:
            return m.group(0)
        return f'<a href="{html.escape(href, quote=True)}" target="_blank" rel="noopener">{label}</a>'

    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", link_inline, t)
    t = re.sub(r"\[([^\]]+)\]\[([^\]]+)\]", link_ref, t)

    # Inline code
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)

    # Bold / italic
    t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", t)

    return t


def build_toc(entries: List[Tuple[int, str, str]]) -> str:
    if not entries:
        return ""
    items = []
    for level, anchor, text in entries:
        cls = f"toc-level-{level}"
        items.append(f'<li class="{cls}"><a href="#{anchor}">{text}</a></li>')
    return "<ul class=\"toc-list\">" + "\n".join(items) + "</ul>"


def convert_markdown(md_text: str) -> Tuple[str, str]:
    lines = md_text.splitlines()
    lines, refs = parse_reference_defs(lines)

    body: List[str] = []
    toc_entries: List[Tuple[int, str, str]] = []
    paragraph: List[str] = []
    list_mode: str | None = None  # "ul" or "ol"

    slug_counts: Dict[str, int] = {}

    def flush_paragraph() -> None:
        nonlocal paragraph
        if paragraph:
            text = " ".join(partagraph.strip() for partagraph in paragraph if partagraph.strip())
            if text:
                body.append(f"<p>{render_inline(text, refs)}</p>")
            paragraph = []

    def close_list() -> None:
        nonlocal list_mode
        if list_mode:
            body.append(f"</{list_mode}>")
            list_mode = None

    heading_re = re.compile(r"^(#{1,6})\s+(.*)$")
    ol_re = re.compile(r"^\s*\d+\.\s+(.*)$")
    ul_re = re.compile(r"^\s*[-*]\s+(.*)$")

    for raw_line in lines:
        line = raw_line.rstrip()
        if not line.strip():
            flush_paragraph()
            close_list()
            continue

        h = heading_re.match(line)
        if h:
            flush_paragraph()
            close_list()
            level = len(h.group(1))
            text = h.group(2).strip()

            explicit_id = None
            id_match = re.search(r"\s*\{#([^}]+)\}\s*$", text)
            if id_match:
                explicit_id = id_match.group(1)
                text = re.sub(r"\s*\{#([^}]+)\}\s*$", "", text).strip()

            base_slug = explicit_id or slugify(text)
            count = slug_counts.get(base_slug, 0)
            slug_counts[base_slug] = count + 1
            anchor = base_slug if count == 0 else f"{base_slug}-{count+1}"

            heading_html = f"<h{level} id=\"{anchor}\">{render_inline(text, refs)}</h{level}>"
            body.append(heading_html)

            if level <= 3:
                toc_entries.append((level, anchor, html.escape(text)))
            continue

        ol = ol_re.match(line)
        if ol:
            flush_paragraph()
            if list_mode != "ol":
                close_list()
                list_mode = "ol"
                body.append("<ol>")
            body.append(f"<li>{render_inline(ol.group(1).strip(), refs)}</li>")
            continue

        ul = ul_re.match(line)
        if ul:
            flush_paragraph()
            if list_mode != "ul":
                close_list()
                list_mode = "ul"
                body.append("<ul>")
            body.append(f"<li>{render_inline(ul.group(1).strip(), refs)}</li>")
            continue

        paragraph.append(line)

    flush_paragraph()
    close_list()

    toc_html = build_toc(toc_entries)
    body_html = "\n".join(body)
    return toc_html, body_html


def load_chart_data() -> Dict[str, object]:
    if CHART_DATA_PATH.exists():
        with CHART_DATA_PATH.open("r", encoding="utf-8") as f:
            return json.load(f)
    return {
        "title": "Ringkasan Koefisien (Placeholder)",
        "labels": ["BQS", "HHI", "SIZE", "GROWTH"],
        "values": [0.28, 0.14, 0.06, -0.03],
        "notes": "Angka placeholder. Ganti dengan hasil regresi aktual.",
    }


def build_html(md_text: str) -> str:
    toc_html, body_html = convert_markdown(md_text)
    chart = load_chart_data()

    return f"""<!doctype html>
<html lang=\"id\">
<head>
  <meta charset=\"utf-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
  <title>Skripsi - Determinan Profitabilitas Berkelanjutan</title>
  <style>
    :root {{
      --bg: #f7f4ef;
      --ink: #1f2328;
      --muted: #5f6b76;
      --accent: #b45309;
      --paper: #ffffff;
      --border: #e4ded5;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Merriweather", "Georgia", serif;
      color: var(--ink);
      background: radial-gradient(circle at 10% 10%, #fff7ed 0%, #f7f4ef 45%, #f1ebe1 100%);
      line-height: 1.75;
    }}
    .page {{
      display: grid;
      grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 48px 24px 80px;
    }}
    .toc {{
      position: sticky;
      top: 24px;
      align-self: start;
      background: var(--paper);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px 18px;
      box-shadow: 0 10px 24px rgba(31, 35, 40, 0.08);
    }}
    .toc h2 {{
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 0 0 12px;
      color: var(--muted);
    }}
    .toc-list {{
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 8px;
    }}
    .toc-list a {{
      color: var(--ink);
      text-decoration: none;
      font-size: 0.95rem;
    }}
    .toc-level-2 a {{ padding-left: 10px; font-size: 0.9rem; color: var(--muted); }}
    .toc-level-3 a {{ padding-left: 20px; font-size: 0.85rem; color: var(--muted); }}

    main {{
      background: var(--paper);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 36px 40px;
      box-shadow: 0 16px 36px rgba(31, 35, 40, 0.08);
    }}
    h1, h2, h3, h4 {{ font-family: "Playfair Display", "Georgia", serif; line-height: 1.3; }}
    h1 {{ font-size: 2.1rem; margin-top: 0; }}
    h2 {{ font-size: 1.6rem; margin-top: 2rem; }}
    h3 {{ font-size: 1.25rem; margin-top: 1.6rem; }}
    p {{ margin: 0 0 1rem; }}
    img {{ max-width: 100%; border-radius: 12px; }}
    code {{ background: #f1f5f9; padding: 2px 6px; border-radius: 6px; }}

    .chart-card {{
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px 18px 24px;
      margin: 0 0 24px;
      background: linear-gradient(160deg, #fff7ed, #ffffff 55%);
    }}
    .chart-title {{ font-size: 1.05rem; margin: 0 0 4px; }}
    .chart-note {{ font-size: 0.9rem; color: var(--muted); margin: 0 0 12px; }}

    @media (max-width: 980px) {{
      .page {{ grid-template-columns: 1fr; }}
      .toc {{ position: static; }}
      main {{ padding: 28px 24px; }}
    }}
  </style>
</head>
<body>
  <div class=\"page\">
    <aside class=\"toc\">
      <h2>Daftar Isi</h2>
      {toc_html}
    </aside>
    <main>
      <section class=\"chart-card\" id=\"ringkasan\">
        <h2 class=\"chart-title\">{html.escape(str(chart.get('title', 'Ringkasan Hasil')))}</h2>
        <p class=\"chart-note\">{html.escape(str(chart.get('notes', '')))}</p>
        <canvas id=\"summaryChart\" height=\"120\"></canvas>
      </section>
      <article>
        {body_html}
      </article>
    </main>
  </div>
  <script src=\"https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js\" defer></script>
  <script>
    window.addEventListener('DOMContentLoaded', async () => {{
      try {{
        const res = await fetch('chart-data.json');
        const data = await res.json();
        const ctx = document.getElementById('summaryChart');
        new Chart(ctx, {{
          type: 'bar',
          data: {{
            labels: data.labels,
            datasets: [{{
              label: data.title,
              data: data.values,
              backgroundColor: '#f59e0b'
            }}]
          }},
          options: {{
            responsive: true,
            scales: {{
              y: {{ beginAtZero: true }}
            }}
          }}
        }});
      }} catch (err) {{
        console.warn('Chart data not loaded', err);
      }}
    }});
  </script>
</body>
</html>
"""


def main() -> None:
    if not MD_PATH.exists():
        raise SystemExit(f"Markdown not found: {MD_PATH}")
    md_text = MD_PATH.read_text(encoding="utf-8")
    html_text = build_html(md_text)
    OUT_PATH.write_text(html_text, encoding="utf-8")
    print(f"Generated {OUT_PATH}")


if __name__ == "__main__":
    main()

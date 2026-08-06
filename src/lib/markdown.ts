export type TocEntry = {
  level: number;
  id: string;
  text: string;
};

type ConvertResult = {
  toc: TocEntry[];
  html: string;
};

// --- Frontmatter ---

export type Frontmatter = {
  title: string;
  slug: string;
  type: 'thought' | 'artifact';
  company?: string;
  logo?: string;
  logoDark?: string;
  created: string;
  updated?: string;
  tags: string[];
  featured: boolean;
  order: number;
  excerpt: string;
  published: boolean;
};

const frontmatterRegex = /^---\n([\s\S]*?)\n---\n?/;

export function parseFrontmatter(mdText: string): { frontmatter: Frontmatter | null; content: string } {
  const match = mdText.match(frontmatterRegex);
  if (!match) {
    return { frontmatter: null, content: mdText };
  }

  const raw = match[1];
  const content = mdText.slice(match[0].length);

  const lines = raw.split('\n');
  const fm: Record<string, any> = {};

  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let value: any = line.slice(colonIdx + 1).trim();

    // Parse arrays: ["item1", "item2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/^"|"$/g, ''));
    }
    // Parse booleans
    else if (value === 'true') value = true;
    else if (value === 'false') value = false;
    // Parse numbers
    else if (/^\d+$/.test(value)) value = parseInt(value, 10);
    // Parse strings (strip surrounding quotes)
    else {
      value = value.replace(/^"|"$/g, '');
    }

    fm[key] = value;
  }

  return {
    frontmatter: {
      title: fm.title ?? '',
      slug: fm.slug ?? '',
      type: fm.type ?? 'thought',
      company: fm.company,
      logo: fm.logo,
      logoDark: fm.logoDark,
      created: fm.created ?? '',
      updated: fm.updated,
      tags: fm.tags ?? [],
      featured: fm.featured ?? false,
      order: fm.order ?? 0,
      excerpt: fm.excerpt ?? '',
      published: fm.published ?? true,
    },
    content,
  };
}

// --- Core parsing ---

const headingRegex = /^(#{1,6})\s+(.*)$/;
const orderedListRegex = /^\s*\d+\.\s+(.*)$/;
const unorderedListRegex = /^\s*[-*]\s+(.*)$/;
const referenceRegex = /^\[([^\]]+)\]:\s*(.+)$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugify(text: string): string {
  const cleaned = text
    .trim()
    .toLowerCase()
    .replace(/\{#([^}]+)\}$/g, '')
    .trim();

  const slug = cleaned
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return slug || 'section';
}

function normalizeReferenceUrl(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseReferenceDefs(lines: string[]): { lines: string[]; refs: Record<string, string> } {
  const refs: Record<string, string> = {};
  const kept: string[] = [];

  for (const line of lines) {
    const match = line.trim().match(referenceRegex);
    if (match) {
      refs[match[1].trim()] = normalizeReferenceUrl(match[2]);
    } else {
      kept.push(line);
    }
  }

  return { lines: kept, refs };
}

function renderInline(text: string, refs: Record<string, string>): string {
  let output = escapeHtml(text);

  const renderImageInline = (_: string, alt: string, src: string) =>
    `<img src="${src}" alt="${alt}" loading="lazy" />`;

  const renderImageRef = (_: string, alt: string, key: string) => {
    const src = refs[key] ?? '';
    if (!src) {
      return _;
    }
    return `<img src="${escapeHtml(src)}" alt="${alt}" loading="lazy" />`;
  };

  output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, renderImageInline);
  output = output.replace(/!\[([^\]]*)\]\[([^\]]+)\]/g, renderImageRef);

  const renderLinkInline = (_: string, label: string, href: string) => {
    const cleanLabel = label.replace(/\*\*/g, '').trim();
    if (cleanLabel.includes('Aksa')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link aksa-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/logos/aksa.svg" alt="Aksa" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (cleanLabel.includes('Universitas Diponegoro')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link undip-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/undip-icon.png" alt="Universitas Diponegoro" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('x.com/harisfarrasi') || href.includes('twitter.com/harisfarrasi') || cleanLabel.includes('@harisfarrasi')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link x-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('linkedin.com/in/harisfarrasi') || cleanLabel.toLowerCase() === 'linkedin') {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link linkedin-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.266 2.371 4.266 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.554V9h3.565v11.452z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('instagram.com/haris.farrasi') || cleanLabel.toLowerCase() === 'instagram') {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link instagram-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.startsWith('mailto:') || cleanLabel.toLowerCase() === 'email') {
      return `<a href="${href}" class="entity-link mail-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7.25L4 7.4V17h16V7.4l-8 4.85zm0-2.35L18.8 7H5.2L12 9.9z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    return `<a href="${href}" target="_blank" rel="noopener">${label}</a>`;
  };

  const renderLinkRef = (_: string, label: string, key: string) => {
    const href = refs[key] ?? '';
    if (!href) {
      return _;
    }
    const cleanLabel = label.replace(/\*\*/g, '').trim();
    if (cleanLabel.includes('Aksa')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link aksa-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/logos/aksa.svg" alt="Aksa" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (cleanLabel.includes('Universitas Diponegoro')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link undip-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/undip-icon.png" alt="Universitas Diponegoro" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('x.com/harisfarrasi') || href.includes('twitter.com/harisfarrasi') || cleanLabel.includes('@harisfarrasi')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link x-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('linkedin.com/in/harisfarrasi') || cleanLabel.toLowerCase() === 'linkedin') {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link linkedin-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.266 2.371 4.266 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.554V9h3.565v11.452z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('instagram.com/haris.farrasi') || cleanLabel.toLowerCase() === 'instagram') {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link instagram-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.startsWith('mailto:') || cleanLabel.toLowerCase() === 'email') {
      return `<a href="${href}" class="entity-link mail-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon fill-current"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7.25L4 7.4V17h16V7.4l-8 4.85zm0-2.35L18.8 7H5.2L12 9.9z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${label}</a>`;
  };

  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, renderLinkInline);
  output = output.replace(/\[([^\]]+)\]\[([^\]]+)\]/g, renderLinkRef);

  output = output.replace(/`([^`]+)`/g, '<code>$1</code>');
  output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  output = output.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

  return output;
}

export function convertMarkdown(mdText: string): ConvertResult {
  // Strip frontmatter before parsing markdown
  const { content } = parseFrontmatter(mdText);
  const rawLines = content.split(/\r?\n/);
  const { lines, refs } = parseReferenceDefs(rawLines);

  const body: string[] = [];
  const toc: TocEntry[] = [];
  const paragraph: string[] = [];
  const slugCounts: Record<string, number> = {};
  let listMode: 'ul' | 'ol' | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.map((line) => line.trim()).filter(Boolean).join(' ');
    if (text) {
      body.push(`<p>${renderInline(text, refs)}</p>`);
    }
    paragraph.length = 0;
  };

  const closeList = () => {
    if (!listMode) return;
    body.push(`</${listMode}>`);
    listMode = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/g, '');
    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }

    const headingMatch = line.match(headingRegex);
    if (headingMatch) {
      flushParagraph();
      closeList();

      const level = headingMatch[1].length;
      let text = headingMatch[2].trim();
      let explicitId: string | null = null;

      const idMatch = text.match(/\s*\{#([^}]+)\}\s*$/);
      if (idMatch) {
        explicitId = idMatch[1];
        text = text.replace(/\s*\{#([^}]+)\}\s*$/, '').trim();
      }

      const baseSlug = explicitId ?? slugify(text);
      const count = slugCounts[baseSlug] ?? 0;
      slugCounts[baseSlug] = count + 1;
      const anchor = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;

      body.push(`<h${level} id="${anchor}">${renderInline(text, refs)}</h${level}>`);

      if (level <= 3) {
        toc.push({ level, id: anchor, text: text });
      }
      continue;
    }

    const olMatch = line.match(orderedListRegex);
    if (olMatch) {
      flushParagraph();
      if (listMode !== 'ol') {
        closeList();
        listMode = 'ol';
        body.push('<ol>');
      }
      body.push(`<li>${renderInline(olMatch[1].trim(), refs)}</li>`);
      continue;
    }

    const ulMatch = line.match(unorderedListRegex);
    if (ulMatch) {
      flushParagraph();
      if (listMode !== 'ul') {
        closeList();
        listMode = 'ul';
        body.push('<ul>');
      }
      body.push(`<li>${renderInline(ulMatch[1].trim(), refs)}</li>`);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  closeList();

  return { toc, html: body.join('\n') };
}

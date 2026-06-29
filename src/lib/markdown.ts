export type TocEntry = {
  level: number;
  id: string;
  text: string;
};

type ConvertResult = {
  toc: TocEntry[];
  html: string;
};

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
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link aksa-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/aksa-icon.png" alt="Aksa" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (cleanLabel.includes('Universitas Diponegoro')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link undip-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/undip-icon.png" alt="Universitas Diponegoro" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('x.com/harisfarrasi') || href.includes('twitter.com/harisfarrasi') || cleanLabel.includes('@harisfarrasi')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link x-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon bg-black text-white dark:bg-white dark:text-black p-[2.5px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.startsWith('mailto:') || cleanLabel.toLowerCase() === 'email') {
      return `<a href="${href}" class="entity-link mail-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 20 20" fill="currentColor" class="entity-icon bg-black text-white dark:bg-white dark:text-black p-[2.5px]"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></span><span class="entity-arrow">↗</span></a>`;
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
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link aksa-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/aksa-icon.png" alt="Aksa" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (cleanLabel.includes('Universitas Diponegoro')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link undip-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><img src="/undip-icon.png" alt="Universitas Diponegoro" class="entity-icon" /></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.includes('x.com/harisfarrasi') || href.includes('twitter.com/harisfarrasi') || cleanLabel.includes('@harisfarrasi')) {
      return `<a href="${href}" target="_blank" rel="noopener" class="entity-link x-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 24 24" aria-hidden="true" class="entity-icon bg-black text-white dark:bg-white dark:text-black p-[2.5px] fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></span><span class="entity-arrow">↗</span></a>`;
    }
    if (href.startsWith('mailto:') || cleanLabel.toLowerCase() === 'email') {
      return `<a href="${href}" class="entity-link mail-link"><span class="entity-text">${cleanLabel}</span><span class="entity-icon-wrapper"><svg viewBox="0 0 20 20" fill="currentColor" class="entity-icon bg-black text-white dark:bg-white dark:text-black p-[2.5px]"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></span><span class="entity-arrow">↗</span></a>`;
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
  const rawLines = mdText.split(/\r?\n/);
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

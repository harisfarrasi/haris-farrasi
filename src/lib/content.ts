import fs from 'fs';
import path from 'path';
import { ContentType, ContentItem } from '@/lib/content-types';
import { parseFrontmatter, convertMarkdown } from '@/lib/markdown';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function stripMarkdown(md: string): string {
  return md
    .replace(/^#{1,6}\s+/gm, '')        // headings
    .replace(/\*\*([^*]+)\*\*/g, '$1')   // bold
    .replace(/\*([^*]+)\*/g, '$1')       // italic
    .replace(/`([^`]+)`/g, '$1')         // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1') // images
    .replace(/^\s*\d+\.\s+/gm, '')      // ordered lists
    .replace(/^\s*[-*]\s+/gm, '')       // unordered lists
    .trim();
}

function extractPreview(content: string): string {
  const paragraphs = content
    .split(/\n\n+/)
    .map((p) => stripMarkdown(p))
    .filter((p) => p.trim().length > 0);

  return paragraphs[0] ?? '';
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function slugifyFilename(filename: string): string {
  return filename.replace(/\.md$/, '').trim();
}

function readItem(type: ContentType, slug: string): ContentItem | null {
  // Try exact slug match first, then slugified filename
  const possibleNames = [slug, `${slug}.md`, `${slugifyFilename(slug)}.md`];
  const dir = path.join(CONTENT_DIR, type);

  let filePath: string | null = null;
  for (const name of possibleNames) {
    const candidate = name.endsWith('.md') ? path.join(dir, name) : path.join(dir, `${name}.md`);
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, content } = parseFrontmatter(raw);

  // If there's no frontmatter, treat the file as legacy — extract title from first heading
  if (!frontmatter) {
    const firstLine = content.split('\n')[0];
    const headingMatch = firstLine?.match(/^#\s+(.+)$/);
    const title = headingMatch ? headingMatch[1] : slugifyFilename(path.basename(filePath, '.md'));

    return {
      slug,
      title,
      type,
      company: undefined,
      logo: undefined,
      logoDark: undefined,
      created: '',
      tags: [],
      featured: false,
      order: 0,
      excerpt: '',
      preview: extractPreview(content),
      published: true,
      content,
    };
  }

  return {
    ...frontmatter,
    preview: extractPreview(content),
    type,
    content,
  };
}

export function getItem(type: ContentType, slug: string): ContentItem | null {
  return readItem(type, slug);
}

export function getAllItems(type: ContentType): ContentItem[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const items: ContentItem[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const item = readItem(type, slug);
    if (item && item.published) {
      items.push(item);
    }
  }

  // Sort by order (ascending), then by created date (descending) as fallback
  items.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  return items;
}

export function getFeaturedItems(type: ContentType): ContentItem[] {
  return getAllItems(type).filter((item) => item.featured);
}

export function renderItemContent(item: ContentItem): { html: string; toc: any[] } {
  return convertMarkdown(item.content);
}

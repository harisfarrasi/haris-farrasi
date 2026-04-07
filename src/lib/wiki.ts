import fs from 'fs';
import path from 'path';
import { convertMarkdown } from '@/lib/markdown';

export function getWikiContent(slug: string) {
  const mdPath = path.join(process.cwd(), 'content', 'wiki', `${slug}.md`);
  const markdown = fs.readFileSync(mdPath, 'utf-8');
  return convertMarkdown(markdown);
}

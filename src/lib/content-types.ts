export type ContentType = 'thought' | 'artifact';

export type ContentItem = {
  slug: string;
  title: string;
  type: ContentType;
  company?: string;
  logo?: string;
  logoDark?: string;
  created: string;
  updated?: string;
  tags: string[];
  featured: boolean;
  order: number;
  excerpt: string;
  preview: string;
  published: boolean;
  content: string;
};

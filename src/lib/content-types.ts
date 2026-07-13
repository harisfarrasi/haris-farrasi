export type ContentType = 'thought' | 'artifact';

export type ContentItem = {
  slug: string;
  title: string;
  type: ContentType;
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

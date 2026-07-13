import { notFound } from 'next/navigation';
import { getItem, getAllItems, renderItemContent } from '@/lib/content';
import SectionShell from '@/components/section-shell';

export async function generateStaticParams() {
  const items = getAllItems('artifact');
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem('artifact', slug);
  if (!item) return { title: 'Not Found' };

  return {
    title: `${item.title} — Haris Farrasi`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: 'article',
      publishedTime: item.created,
    },
  };
}

export default async function ArtifactDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem('artifact', slug);
  if (!item) notFound();

  const { html } = renderItemContent(item);

  return (
    <SectionShell title={item.title} description={item.excerpt} backHref="/" backLabel="Home">
      <article className="wiki-content" dangerouslySetInnerHTML={{ __html: html }} />
    </SectionShell>
  );
}

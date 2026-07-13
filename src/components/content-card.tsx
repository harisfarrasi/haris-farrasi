import { ContentItem } from '@/lib/content-types';

export default function ContentCard({
  item,
  href,
}: {
  item: ContentItem;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block rounded-lg border border-border/40 px-4 py-3 transition-colors hover:border-border hover:bg-muted/30"
    >
      <h3 className="text-sm font-semibold text-foreground">
        {item.title}
      </h3>
      {item.preview && (
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {item.preview}
        </p>
      )}
    </a>
  );
}

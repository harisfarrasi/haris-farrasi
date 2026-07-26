import { ContentItem } from '@/lib/content-types';

export default function ContentCard({
  item,
  href,
}: {
  item: ContentItem;
  href: string;
}) {
  if (item.type === 'artifact') {
    const logoSrc = item.logoDark ?? item.logo;
    const cardCopy = item.excerpt || item.preview;

    return (
      <a
        href={href}
        className="group block rounded-lg border border-border/40 px-4 py-3 transition-colors hover:border-border hover:bg-muted/30"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border/40 bg-background">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={item.company ?? item.title}
                className="h-4 w-4 object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-xs font-semibold text-foreground">
                {(item.company ?? item.title).slice(0, 1)}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            {cardCopy && (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {cardCopy}
              </p>
            )}
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="group block rounded-lg border border-border/40 px-4 py-3 transition-colors hover:border-border hover:bg-muted/30"
    >
      <h3 className="truncate text-sm font-semibold text-foreground">
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

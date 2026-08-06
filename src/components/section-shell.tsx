type SectionShellProps = {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
};

export default function SectionShell({
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground/90">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-10 py-12 sm:px-12 sm:py-24">
        <header>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
            {description ? <p className="text-base text-muted-foreground">{description}</p> : null}
          </div>
        </header>
        <section>{children}</section>
      </main>
    </div>
  );
}

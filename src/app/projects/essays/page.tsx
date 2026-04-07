import TabbedShell from '@/components/tabbed-shell';

export const metadata = {
  title: 'Essays — Haris Farrasi',
  description: 'Kumpulan essay dan refleksi yang sedang disiapkan.',
};

export default function EssaysPage() {
  return (
    <TabbedShell active="projects">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">Essays</h1>
          <p className="text-base text-muted-foreground">
            Kumpulan essay dan refleksi yang sedang disiapkan.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-white/80 p-6 text-base text-muted-foreground">
          Belum ada essay yang dipublikasi. Nanti setiap essay akan punya slug sendiri di bawah /projects.
        </div>
      </div>
    </TabbedShell>
  );
}

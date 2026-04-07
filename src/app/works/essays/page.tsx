import SectionShell from '@/components/section-shell';

export const metadata = {
  title: 'Essays — Haris Farrasi',
  description: 'Kumpulan essay dan refleksi yang sedang disiapkan.',
};

export default function EssaysPage() {
  return (
    <SectionShell
      title="Essays"
      description="Kumpulan essay dan refleksi yang sedang disiapkan."
      backHref="/works"
      backLabel="Kembali ke Works"
    >
      <div className="rounded-2xl border border-border/60 bg-white/80 p-6 text-base text-muted-foreground">
        Belum ada essay yang dipublikasi. Nanti setiap essay akan punya slug sendiri di bawah /works.
      </div>
    </SectionShell>
  );
}

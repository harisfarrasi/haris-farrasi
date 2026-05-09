import TabbedShell from '@/components/tabbed-shell';

export const metadata = {
  title: 'Thesis — Haris Farrasi',
};

export default function ThesisPage() {
  return (
    <TabbedShell active="home">
      <div className="flex flex-col gap-6 h-[calc(100vh-200px)]">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Undergraduate Thesis</h1>
          <a 
            href="/skripsi.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Open in new tab
          </a>
        </div>
        
        <div className="flex-1 w-full border border-border rounded-lg overflow-hidden bg-muted/20">
          <iframe 
            src="/skripsi.pdf#toolbar=0" 
            className="w-full h-full border-none"
            title="Thesis PDF Preview"
          />
        </div>
      </div>
    </TabbedShell>
  );
}

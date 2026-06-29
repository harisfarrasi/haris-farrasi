'use client';

type TabbedShellProps = {
  children: React.ReactNode;
};

export default function TabbedShell({ children }: TabbedShellProps) {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-2xl px-6 py-12 sm:py-24">
        {children}
      </main>
    </div>
  );
}

import Link from 'next/link';

const BELIEFS = [
    { id: 'belief-1', text: 'Efisiensi adalah eliminasi.' },
    { id: 'belief-2', text: 'Gunakan daya ungkit untuk hasil eksponensial.' },
    { id: 'belief-3', text: 'Iterasi tanpa henti menuju kesempurnaan.' },
    { id: 'belief-4', text: 'Segala sesuatu adalah penjualan. Kuasai itu.' },
    { id: 'belief-5', text: 'Bekerja keras dengan fokus total.' },
    { id: 'belief-6', text: 'Jadilah mesin pembelajar, bukan hanya pintar.' },
    { id: 'belief-7', text: 'Ukur segalanya, tingkatkan segalanya.' },
];

export default function Beliefs() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-3xl font-bold">Beliefs</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        A curated collection of principles and values that guide my work, decisions, and approach to life.
      </p>
      
      <ul className="mt-8 list-disc list-outside pl-5 space-y-2 text-base">
        {BELIEFS.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      
      <p className="mt-8 text-lg text-muted-foreground">
        Have a recommendation? <Link href="mailto:harisfarrasi@gmail.com" className="text-primary hover:underline">Let me know</Link>.
      </p>

      <footer className="mt-12">
          <Link href="/" className="text-primary hover:underline">Back to Home</Link>
      </footer>
    </main>
  );
}

import Link from 'next/link';

const BELIEFS = [
    { id: 'belief-1', text: 'Efficiency is achieved by focusing on elimination.' },
    { id: 'belief-2', text: 'Use leverage to create compounding returns.' },
    { id: 'belief-3', text: 'Iteration is the path to excellence.' },
    { id: 'belief-4', text: 'Everything is sales, so get good at it.' },
    { id: 'belief-5', text: 'Work with intense and sustained focus.' },
    { id: 'belief-6', text: 'Being a learning machine is more important than being smart.' },
    { id: 'belief-7', text: 'Benchmark everything to measure progress.' },
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

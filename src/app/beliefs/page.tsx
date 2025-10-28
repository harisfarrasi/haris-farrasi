import Link from 'next/link';

const BELIEFS = [
    { id: 'belief-1', text: 'Efficiency is elimination.' },
    { id: 'belief-2', text: 'Use leverage for exponential results.' },
    { id: 'belief-3', text: 'Iterate relentlessly towards perfection.' },
    { id: 'belief-4', text: 'Everything is sales. Master it.' },
    { id: 'belief-5', text: 'Work hard with total focus.' },
    { id: 'belief-6', text: 'Be a learning machine, not just smart.' },
    { id: 'belief-7', text: 'Measure everything, improve everything.' },
    { id: 'belief-8', text: 'Find the right question first.' },
    { id: 'belief-9', text: 'Embrace incredible levels of discomfort.' },
    { id: 'belief-10', text: 'The desire to be liked is a weakness.' },
    { id: 'belief-11', text: 'Value comes from solving problems.' },
    { id: 'belief-12', text: 'Success requires obsession.' },
    { id: 'belief-13', text: 'The status quo is the bottleneck.' },
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

import Link from 'next/link';

const BELIEFS = [
    { id: 'belief-1', text: 'Value comes only from solving real problems.' },
    { id: 'belief-2', text: 'Iteration beats everything. Keep cycling until reality bends.' },
    { id: 'belief-3', text: 'Benchmark the best. Compete with the top or die average.' },
    { id: 'belief-4', text: 'Leverage compounds. Always chase code, content, connection, capital, company, etc.' },
    { id: 'belief-5', text: 'Being a machine learner beats being smart. Curiosity compounds.' },
    { id: 'belief-6', text: 'Always ask your question. Find the right question to ask is key.' },
    { id: 'belief-7', text: 'Extreme people achieve extreme results. Work so hard it feels unnatural.' },
    { id: 'belief-8', text: 'Extreme discomfort means you’re exactly where you should be.' },
    { id: 'belief-9', text: 'It’s hard to be wildly successful at anything you aren’t obsessed with.' },
    { id: 'belief-10', text: 'Status quo bias is the enemy. >70% live in permanent slight suffering because they never take a big swing.' },
    { id: 'belief-11', text: 'Delete until nothing is left. In fact, if you don’t end up adding back at least 10%, you didn’t delete enough.' },
    { id: 'belief-12', text: 'Wanting to be liked is weakness. Fulfillment must come from within.' },
    { id: 'belief-13', text: 'Everything is sales. The teacher sells, the leader sells, the orator sells.' },
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

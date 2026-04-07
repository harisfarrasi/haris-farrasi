'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export type ChartData = {
  title: string;
  labels: string[];
  values: number[];
  notes?: string;
};

type ChartProps = {
  data: ChartData;
};

export default function SkripsiChart({ data }: ChartProps) {
  const chartItems = data.labels.map((label, index) => ({
    label,
    value: data.values[index] ?? 0,
  }));

  return (
    <section className="rounded-3xl border border-border/60 bg-white/90 p-6 shadow-[0_22px_60px_-32px_rgba(15,23,42,0.45)]">
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Ringkasan Hasil
        </p>
        <h2 className="text-xl font-semibold text-foreground">{data.title}</h2>
        {data.notes ? (
          <p className="text-sm text-muted-foreground">{data.notes}</p>
        ) : null}
      </div>
      <div className="mt-6 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartItems} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(148,163,184,0.35)" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickMargin={8}
            />
            <Tooltip
              cursor={{ fill: 'rgba(148,163,184,0.15)' }}
              contentStyle={{
                borderRadius: '12px',
                borderColor: 'rgba(148,163,184,0.35)',
                boxShadow: '0 20px 40px -24px rgba(15,23,42,0.55)',
              }}
            />
            <Bar dataKey="value" fill="#0f172a" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

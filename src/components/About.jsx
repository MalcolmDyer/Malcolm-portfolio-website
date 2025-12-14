export function About() {
  const highlights = [
    {
      label: 'Focus areas',
      value: 'Secure frontends, responsive systems, UX-driven workflows'
    },
    {
      label: 'Recent internship',
      value: 'Mimic Ransomware Defense — React + TypeScript, Playwright, Ant Design'
    },
    {
      label: 'Leadership',
      value: 'Cross-functional collaboration, mentoring, and operations management'
    }
  ];
 
  return (
    <section id="summary" className="relative mx-auto mt-24 max-w-5xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Summary</p>
        <h2 className="mt-4 text-3xl font-semibold">bruh moment</h2>
        <p className="mt-6 text-lg text-white/70">
          I&apos;m a San José State University software engineering student with many applied projects under my belt.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.label}</p>
              <p className="mt-3 text-sm text-white/80">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

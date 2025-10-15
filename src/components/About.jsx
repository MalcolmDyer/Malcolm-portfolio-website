export function About() {
  return (
    <section id="about" className="relative mx-auto mt-24 max-w-5xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">About</p>
        <h2 className="mt-4 text-3xl font-semibold">Crafting purposeful products with empathy and precision</h2>
        <p className="mt-6 text-lg text-white/70">
          I have nearly a decade of experience shaping digital products across fintech, travel, and creative tools. My
          process blends research-led discovery, iterative prototyping, and thoughtful front-end engineering. The
          result? Interfaces that are as intuitive as they are expressive.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              label: 'Core strengths',
              value: 'Design systems, interaction design, front-end architecture'
            },
            { label: 'Toolbox', value: 'Figma, React, TypeScript, GraphQL, WebGL' },
            { label: 'Currently exploring', value: 'AI-powered prototyping & creative coding' }
          ].map((item) => (
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

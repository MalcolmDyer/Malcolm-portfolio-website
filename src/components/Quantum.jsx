const quantumHighlights = [
  {
    title: 'Curiosity in quantum algorithms',
    detail: 'Exploring Grover’s and Shor’s algorithms to understand how quantum speedups reshape search and factorization.'
  },
  {
    title: 'Hands-on simulations',
    detail: 'Building small experiments with Qiskit simulators to visualize qubit states, Bloch spheres, and decoherence.'
  },
  {
    title: 'Bridging classical + quantum',
    detail: 'Designing flows that pair classical pre-processing with quantum circuits for optimization and cryptography research.'
  }
];

export function Quantum() {
  return (
    <section id="quantum" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0a0f1f] p-10 shadow-[0_30px_80px_rgba(5,8,15,0.45)] backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3 md:max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Quantum interests</p>
            <h2 className="text-3xl font-semibold">Where physics meets computing</h2>
            <p className="text-base text-white/70">
              I&apos;m fascinated by how qubits, superposition, and entanglement can unlock new frontiers in security and
              optimization. I pair self-study with hands-on demos to turn abstract theory into usable intuition.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Quantum computing
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Physics curiosity
              </span>
            </div>
          </div>
          <div className="relative mt-8 w-full md:mt-0 md:max-w-sm">
            <div className="pointer-events-none absolute -left-10 -top-8 h-28 w-28 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-sky-400/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="border-b border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.25em] text-white/60">
                Current explorations
              </div>
              <div className="divide-y divide-white/5">
                {quantumHighlights.map((item) => (
                  <div key={item.title} className="p-5 transition hover:bg-white/5">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

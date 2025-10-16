const skills = [
  {
    title: 'Languages',
    items: ['C/C++', 'Java', 'Go', 'JavaScript/TypeScript', 'Python', 'HTML/CSS', 'x86 Assembly', 'RISC-V', 'SQL']
  },
  {
    title: 'Frameworks & Tools',
    items: ['React', 'Git & GitHub', 'GitHub Actions', 'Docker', 'Linear', 'Playwright', 'Cypress', 'MongoDB', 'Figma', 'Node.js', 'PyTest']
  },
  {
    title: 'Practices',
    items: ['Agile collaboration', 'CI/CD automation', 'Secure SDLC principles', 'Accessibility-first design', 'Cross-functional teamwork']
  }
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold">Technical range grounded in secure, scalable delivery</h2>
        </div>
        <p className="text-sm text-white/60 md:max-w-sm">
          Blending classroom rigor with industry experience to ship resilient interfaces, automation pipelines, and collaborative
          workflows.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

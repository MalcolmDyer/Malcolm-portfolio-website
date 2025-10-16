const skills = [
  {
    label: 'Languages',
    items: ['C/C++', 'Java', 'Go', 'JavaScript/TypeScript', 'Python', 'HTML/CSS', 'x86 Assembly', 'RISC-V', 'SQL', 'Bash', 'JSON', 'YAML', 'Zsh']
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'Git', 'GitHub Actions', 'Docker', 'Linear', 'Playwright', 'Cypress', 'MongoDB', 'Figma', 'Node.js', 'PyTest']
  }
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold">Tooling that supports shipping reliable, secure experiences</h2>
            <p className="mt-4 text-sm text-white/70 md:max-w-md">
              From typed frontends and automated testing to infrastructure and design tooling, I adapt quickly to the
              stack a team needs while upholding best practices.
            </p>
          </div>
          <div className="grid w-full gap-6 md:w-auto md:grid-cols-2">
            {skills.map((category) => (
              <div key={category.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">{category.label}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-sm text-white/80">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

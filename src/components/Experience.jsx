const experiences = [
  {
    company: 'Mimic Ransomware Defense',
    role: 'Software Engineering Intern',
    location: 'Palo Alto, CA',
    timeframe: 'Summer 2025',
    bullets: [
      'Engineered a responsive React + TypeScript interface emphasizing UX and cybersecurity for enterprise-grade defense.',
      'Migrated CI/CD pipeline from Cypress to Playwright, cutting flaky test rates by 40% and accelerating build verification.',
      'Refactored Ant Design components for responsive layouts, accessibility compliance, and cross-browser rendering stability.',
      'Implemented SSDLC practices to ensure encryption integrity, secure authentication flows, and threat-resilient frontend.'
    ]
  },
  {
    company: 'La Casa Mia Restaurant',
    role: 'Server, Host, and Floor Manager',
    location: 'San José, CA',
    timeframe: '2022 – 2025',
    bullets: [
      'Supervised front-of-house operations, coordinating staff rotations and table turns to maximize efficiency during peak hours.',
      'Trained and mentored new employees to maintain service quality and team communication under high-volume conditions.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold">Delivering resilient, human-centered products</h2>
        </div>
        <p className="text-sm text-white/60 md:max-w-md">
          From cybersecurity startups to hospitality leadership, I bring systems thinking, collaboration, and disciplined execution
          to every team I join.
        </p>
      </div>
      <div className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 backdrop-blur"
          >
            <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                <p className="text-sm text-white/70">{experience.location}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{experience.timeframe}</p>
            </header>
            <p className="mt-4 text-sm font-medium text-accent">{experience.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

const roles = [
  {
    company: 'Mimic Ransomware Defense',
    location: 'Palo Alto, CA',
    title: 'Software Engineering Intern',
    timeframe: 'Summer 2025',
    bullets: [
      'Engineered a responsive React + TypeScript interface emphasizing UX and cybersecurity for enterprise defense.',
      'Migrated the CI/CD pipeline from Cypress to Playwright, cutting flaky test rates by 40% and accelerating verification.',
      'Refactored Ant Design components to deliver responsive layouts, accessibility compliance, and cross-browser stability.',
      'Implemented SSDLC practices safeguarding encryption integrity, authentication flows, and threat resilience.'
    ]
  },
  {
    company: 'La Casa Mia Restaurant',
    location: 'San José, CA',
    title: 'Server, Host, and Floor Manager',
    timeframe: '2022 – 2025',
    bullets: [
      'Supervised front-of-house operations, coordinating staffing and table turns to maximize peak-hour efficiency.',
      'Trained and mentored new employees to maintain service quality and team communication in high-volume settings.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold">Hands-on impact across security-driven software and operations</h2>
        </div>
        <p className="text-sm text-white/60 md:max-w-sm">
          I pair technical execution with coordinated teamwork—leveraging internships and leadership roles to keep
          complex initiatives moving smoothly from kickoff to delivery.
        </p>
      </div>
      <div className="mt-12 space-y-8">
        {roles.map((role) => (
          <article
            key={role.company}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <p className="text-sm text-white/60">{role.company} · {role.location}</p>
              </div>
              <p className="text-sm text-white/60">{role.timeframe}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

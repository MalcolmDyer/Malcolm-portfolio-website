const educationHistory = [
  {
    school: 'San José State University',
    location: 'San José, CA',
    degree: 'B.S. Software Engineering — Expected May 2027',
    timeframe: 'Enrolled Fall 2025',
    highlights: ['Relevant Coursework: Data Structures and Algorithms, OO Programming, Computer Organization and Architecture']
  },
  {
    school: 'De Anza College',
    location: 'Cupertino, CA',
    degree: 'A.S. Computer Science — GPA 3.77',
    timeframe: '2022 – 2025',
    highlights: [
      'Completed rigorous coursework to finish an associates degree while leading multiple applied software projects.'
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Education</p>
          <h2 className="mt-3 text-3xl font-semibold">Shaping a strong engineering foundation</h2>
        </div>
        <p className="text-sm text-white/60 md:max-w-sm">
          Coursework and collaborative projects that reinforce computer science fundamentals while exploring secure, user-first
          product development.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {educationHistory.map((item) => (
          <article key={item.school} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <header>
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.timeframe}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.school}</h3>
              <p className="mt-1 text-sm text-white/70">{item.location}</p>
              <p className="mt-3 text-sm font-medium text-white">{item.degree}</p>
            </header>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

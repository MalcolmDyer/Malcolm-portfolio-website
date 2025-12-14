const schools = [
  {
    name: 'San José State University',
    location: 'San José, CA',
    degree: 'B.S. Software Engineering — Expected May 2027',
    timeframe: 'Enrolled Fall 2025',
    details: ['Relevant Coursework: Data Structures and Algorithms, OO Programming, Computer Organization and Architecture']
  },
  {
    name: 'De Anza College',
    location: 'Cupertino, CA',
    degree: 'A.S. Computer Science — GPA 3.77',
    timeframe: '2022 – 2025',
    details: ['Completed rigorous coursework to finish an associates degree while leading multiple applied software projects.']
  }
];

export function Education() {
  return (
    <section id="education" className="mx-auto mt-24 max-w-5xl px-6 text-white">
      <div className="mb-6 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Education</p>
        <h2 className="mt-3 text-3xl font-semibold">My academic journey</h2>
      </div>
      <div className="space-y-6">
        {schools.map((school) => (
          <article
            key={school.name}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{school.name}</h3>
                <p className="text-sm text-white/60">{school.location}</p>
              </div>
              <p className="text-sm text-white/60">{school.timeframe}</p>
            </div>
            <p className="mt-4 text-sm font-medium text-white/80">{school.degree}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {school.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

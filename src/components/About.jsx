export function About() {
  return (
    <section id="about" className="relative mx-auto mt-24 max-w-5xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">About</p>
        <h2 className="mt-4 text-3xl font-semibold">Software engineering student focused on secure, high-impact UX</h2>
        <p className="mt-6 text-lg text-white/70">
          I’m Malcolm Ryu Dyer, a San José State University software engineering student blending applied research, product
          intuition, and cybersecurity awareness. I love translating complex requirements into resilient interfaces and
          automated systems that keep teams moving quickly and safely.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              label: 'Location',
              value: 'San José, CA'
            },
            {
              label: 'Email',
              value: 'malcolm.ryu.dyer@gmail.com'
            },
            {
              label: 'Involved in',
              value: 'Secure web apps, UX engineering, CI/CD automation'
            }
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

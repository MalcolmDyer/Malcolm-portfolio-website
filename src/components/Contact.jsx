const contactMethods = [
  {
    label: 'Email',
    value: 'malcolm.ryu.dyer@gmail.com',
    href: 'mailto:malcolm.ryu.dyer@gmail.com'
  },
  {
    label: 'Phone',
    value: '(408) 340-8601',
    href: 'tel:+14083408601'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/malcolm-dyer',
    href: 'https://linkedin.com/in/malcolm-dyer'
  }
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto mt-24 max-w-5xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold">Let&apos;s talk</h2>
            <p className="mt-6 text-sm text-white/70">
              I&apos;m actively seeking internships and collaborative projects for 2026. Reach out and let&apos;s explore how we can
              ship something resilient together. 
            </p>
          </div>
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
                {...(method.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="text-xs uppercase tracking-[0.25em] text-white/60">{method.label}</span>
                <span className="font-medium">{method.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

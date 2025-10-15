export function Contact() {
  return (
    <section id="contact" className="mx-auto mt-28 max-w-5xl px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 backdrop-blur">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Let&apos;s collaborate</p>
            <h2 className="mt-4 text-3xl font-semibold">Have a project in mind?</h2>
            <p className="mt-6 text-sm text-white/70">
              I’m currently booking new engagements for Q3. Share a few details about your goals, and I’ll be in touch
              within two business days.
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.25em] text-white/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Malcolm Reynolds"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.25em] text-white/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.25em] text-white/60">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your idea, timeline, and what success looks like."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

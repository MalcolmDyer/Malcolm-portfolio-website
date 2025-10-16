import { ArrowDownIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-radial" aria-hidden="true" />
      <div className="absolute -left-40 -top-32 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-tr from-accent to-purple-500 opacity-30 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-4xl text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Software Engineering Student & UX Engineer</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Building secure, human-centered experiences for the next generation of web products
        </h1>
        <p className="mt-6 text-lg text-white/70">
          I’m Malcolm Ryu Dyer — currently leveling up at San José State University while shipping production-ready front-end
          systems. I thrive at the intersection of cybersecurity, design systems, and developer tooling.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <MapPinIcon className="h-4 w-4" /> San José, CA
          </span>
          <a
            href="mailto:malcolm.ryu.dyer@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/80 backdrop-blur transition-colors hover:bg-accent hover:text-surface"
          >
            <EnvelopeIcon className="h-4 w-4" /> malcolm.ryu.dyer@gmail.com
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-surface shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Explore experience
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <span>See projects</span>
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

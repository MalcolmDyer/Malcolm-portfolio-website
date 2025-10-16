export function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="text-xs uppercase tracking-[0.35em] text-accent">{project.timeline}</span>
      </div>
      <p className="mt-4 text-sm text-white/70">{project.description}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/70">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

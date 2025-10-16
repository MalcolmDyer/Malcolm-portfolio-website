export function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 transition-transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent opacity-80" aria-hidden />
      </div>
      <div className="flex flex-col gap-4 p-6 text-white">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm text-white/70">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <div>
          <a
            href={project.link}
            className="text-sm font-semibold text-accent transition-colors hover:text-white"
          >
            View case study →
          </a>
        </div>
      </div>
    </article>
  );
}

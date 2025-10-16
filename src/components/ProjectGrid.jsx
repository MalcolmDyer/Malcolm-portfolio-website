import { projects } from '../data/projects.js';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl px-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold">Applying secure design patterns across full-stack builds</h2>
        </div>
        <p className="text-sm text-white/60 md:max-w-sm">
          Each project pushed my understanding of security, accessibility, and maintainability—balancing robust
          infrastructure with polished user experiences.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

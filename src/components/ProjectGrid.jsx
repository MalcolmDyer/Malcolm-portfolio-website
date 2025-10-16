import { projects } from '../data/projects.js';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto mt-28 max-w-6xl px-6 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold">Applying secure engineering to real-world builds</h2>
        </div>
        <p className="text-sm text-white/60 md:max-w-sm">
          Hands-on projects spanning authentication, social platforms, and interactive experiences—each reinforcing clean
          architecture, accessibility, and maintainable code.
        </p>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

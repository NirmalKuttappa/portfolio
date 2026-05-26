import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h2 className="text-sm uppercase tracking-widest text-muted mb-10">Projects</h2>
      <ul className="divide-y divide-border/70">
        {projects.map((p) => (
          <li key={p.title} className="group py-6 first:pt-0 last:pb-0">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg font-medium tracking-tight group-hover:underline underline-offset-4 decoration-1">
                    {p.title}
                  </h3>
                  <span className="text-foreground/40 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
                <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted/80">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {p.year && (
                <span className="text-xs text-muted/70 tabular-nums sm:pl-6 sm:pt-1">
                  {p.year}
                </span>
              )}
            </a>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-muted hover:text-foreground underline underline-offset-4 decoration-1"
              >
                Live demo ↗
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

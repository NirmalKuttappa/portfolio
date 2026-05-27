import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BrandIcon } from "@/components/BrandIcon";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Nirmal Nayada`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 animate-fade-up">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">←</span> Back to projects
          </Link>

          <header className="mt-8">
            <div className="flex items-baseline justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">{project.title}</h1>
              {project.year && (
                <span className="text-sm text-muted tabular-nums">{project.year}</span>
              )}
            </div>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted/80">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </header>

          {project.sections && project.sections.length > 0 && (
            <div className="mt-14 space-y-12">
              {project.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-sm uppercase tracking-widest text-muted mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="text-base sm:text-[1.0625rem] leading-relaxed text-foreground/85 [&:not(:first-child)]:mt-4"
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3 border-l border-border/70 pl-5">
                      {section.bullets.map((b) => (
                        <li key={b.title} className="text-base leading-relaxed">
                          <span className="font-medium text-foreground">{b.title}</span>
                          <span className="text-muted"> — {b.body}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          )}

          {project.links.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-sm uppercase tracking-widest text-muted mb-6">Links</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full items-start gap-4 rounded-xl border border-border/70 bg-background px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.04] group-hover:bg-foreground/[0.08] transition-colors">
                        <BrandIcon name={link.icon} className="h-6 w-6" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium">{link.label}</span>
                          <span className="text-foreground/40 transition-transform group-hover:translate-x-0.5">
                            ↗
                          </span>
                        </span>
                        {link.description && (
                          <span className="mt-1 block text-xs text-muted leading-relaxed">
                            {link.description}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <p className="mt-14 text-sm text-muted">More details coming soon.</p>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

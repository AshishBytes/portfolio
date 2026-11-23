import { projects } from "../content/projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { PageHeader } from "../components/sections/PageHeader";
import { Container } from "../components/ui/Container";

export function ProjectsPage() {
  // Extract year from period for sorting
  const extractYear = (period: string): number => {
    const match = period.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Separate projects into categories
  const pinnedProjects = projects
    .filter((p) => p.pinned)
    .sort((a, b) => extractYear(b.period) - extractYear(a.period));

  const currentlyWorkingProjects = projects
    .filter((p) => p.experiment && !p.pinned)
    .sort((a, b) => extractYear(b.period) - extractYear(a.period));

  const completedProjects = projects
    .filter((p) => !p.experiment && !p.pinned)
    .sort((a, b) => extractYear(b.period) - extractYear(a.period));

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work and technical explorations."
        description="From active experiments to production-ready platforms, spanning Discord bots, ML systems, and distributed data."
      />
      <Container className="pb-12">
        {pinnedProjects.length > 0 && (
          <section
            aria-labelledby="pinned-projects-title"
            className="mb-10"
          >
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted" id="pinned-projects-title">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Pinned Projects
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {pinnedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {currentlyWorkingProjects.length > 0 && (
          <section
            aria-labelledby="currently-working-title"
            className="mb-10"
          >
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted" id="currently-working-title">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
              Currently Working
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {currentlyWorkingProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {completedProjects.length > 0 && (
          <section
            aria-labelledby="completed-projects-title"
          >
            <h2 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted" id="completed-projects-title">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Completed Projects
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {completedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </>
  );
}

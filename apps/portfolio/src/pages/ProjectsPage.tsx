import { projects } from "../content/projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { PageHeader } from "../components/sections/PageHeader";
import { Container } from "../components/ui/Container";

export function ProjectsPage() {
  // Sort projects: pinned first, then by featured, then by year
  const sortedProjects = [...projects].sort((a, b) => {
    // Pinned projects come first
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;

    // Then featured projects
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Extract year from period
    const extractYear = (period: string): number => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0], 10) : 0;
    };

    const yearA = extractYear(a.period);
    const yearB = extractYear(b.period);

    // Sort by year descending (newest first)
    return yearB - yearA;
  });

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work and technical explorations."
        description="Two projects spanning applied language tools and offline-first data."
      />
      <Container className="pb-12">
        <section
          aria-labelledby="project-directory-title"
          className="grid gap-5 md:grid-cols-2"
        >
          <h2 className="sr-only" id="project-directory-title">
            Complete project directory
          </h2>
          {sortedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </Container>
    </>
  );
}

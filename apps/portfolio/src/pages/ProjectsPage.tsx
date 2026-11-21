import { projects } from "../content/projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { PageHeader } from "../components/sections/PageHeader";
import { Container } from "../components/ui/Container";

export function ProjectsPage() {
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
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </Container>
    </>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../../content/projects";
import { ProjectCard } from "../../../components/cards/ProjectCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";

const selectedProjects = projects.filter((project) => project.featured);

export function SelectedWorks() {
  return (
    <section aria-labelledby="selected-works-title" className="py-12 sm:py-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with a systems core"
          description="Backend systems, automation, API integrations, and distributed services."
        />
        <Link
          className="inline-flex min-h-11 w-fit items-center gap-2 pb-1 text-sm font-semibold text-ink hover:text-accent"
          to="/projects"
        >
          Project directory <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

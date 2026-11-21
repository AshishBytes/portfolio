import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../../content/projects";
import { ProjectCard } from "../../../components/cards/ProjectCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";

export function SelectedWorks() {
  return (
    <section aria-labelledby="selected-works-title" className="py-12 sm:py-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with a systems core"
          description="A couple of projects spanning applied NLP and offline-first data."
        />
        <Link
          className="inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-ink hover:text-accent"
          to="/projects"
        >
          Project directory <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs text-subtle">
        <BriefcaseBusiness aria-hidden="true" size={14} />
        <span>Explore project scope, notes, and technologies.</span>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectBySlug } from "../../../content/projects";
import type { Project } from "../../../types/content";
import { Badge } from "../../../components/ui/Badge";
import { Card } from "../../../components/ui/Card";
import { SectionHeading } from "../../../components/ui/SectionHeading";

const selectedOrder = ["reef-platform", "hackiitk-blockchain", "docqa-tutor"];
const selectedProjects = selectedOrder
  .map((slug) => projectBySlug.get(slug))
  .filter((project): project is Project => project !== undefined);

function ProjectMetrics({ project }: { project: Project }) {
  if (!project.metrics?.length) return null;

  return (
    <ul
      aria-label={`${project.title} metrics`}
      className="grid grid-cols-3 gap-2 border-b border-line bg-accent-soft px-5 py-5 sm:gap-4 sm:px-6"
    >
      {project.metrics.map((metric) => (
        <li className="min-w-0" key={metric.label}>
          <p className="display-heading m-0 text-[1.8rem] font-medium leading-none tracking-tight text-accent-dark sm:text-4xl">
            {metric.value}
          </p>
          <p className="m-0 mt-2 font-mono text-xs font-medium uppercase leading-4 tracking-[0.06em] text-muted">
            {metric.label}
          </p>
        </li>
      ))}
    </ul>
  );
}

function SelectedProject({
  project,
  lead,
}: {
  project: Project;
  lead: boolean;
}) {
  const hasCaseStudy = projectBySlug.has(project.slug);

  return (
    <Card
      className={`group overflow-hidden p-0 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${lead ? "md:col-span-2" : ""}`}
    >
      <ProjectMetrics project={project} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">{project.category}</Badge>
          <span className="text-sm font-medium text-muted">{project.period}</span>
        </div>
        <h3 className="display-heading mt-4 text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">{project.subtitle}</p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
        {hasCaseStudy && (
          <div className="mt-5 border-t border-line pt-4">
            <Link
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
              to={`/projects/${project.slug}`}
            >
              Open case study <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        )}
      </div>
    </Card>
  );
}

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
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {selectedProjects.map((project, index) => (
          <SelectedProject
            key={project.slug}
            lead={index === 0}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

import { ArrowUpRight, CodeXml } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/content";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { ProjectArtwork } from "../sections/ProjectArtwork";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden p-0 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <ProjectArtwork project={project} />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.pinned && (
            <Badge tone="accent" className="bg-accent text-on-accent">
              Pinned
            </Badge>
          )}
          {project.experiment && (
            <Badge className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
              Experiment
            </Badge>
          )}
          <Badge tone="accent">{project.category}</Badge>
          <span className="text-xs text-subtle">{project.period}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">
          {project.subtitle}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          {project.description}
        </p>
        {!compact && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            to={`/projects/${project.slug}`}
          >
            View case study <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
          {project.githubUrl && (
            <a
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
              href={project.githubUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              <CodeXml aria-hidden="true" size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
              href={project.liveUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              <ArrowUpRight aria-hidden="true" size={14} /> Live
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectBySlug } from "../content/projects";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { PageHeader } from "../components/sections/PageHeader";
import { ProjectArtwork } from "../components/sections/ProjectArtwork";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? projectBySlug.get(slug) : undefined;
  if (!project) {
    return (
      <>
        <PageHeader
          eyebrow="Project"
          title="Project not found."
          description="This project is not in the current portfolio directory."
        />
        <Container className="pb-12">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"
            to="/projects"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to projects
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.description}
      />
      <Container className="grid grid-cols-1 gap-5 pb-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.75fr)]">
        <div>
          <Card className="overflow-hidden p-0">
            <ProjectArtwork project={project} context="detail" />
          </Card>
          <Card className="mt-5">
            <h2 className="text-xl font-semibold tracking-tight">
              Project notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              {project.achievements.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span
                    aria-hidden="true"
                    className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <aside className="space-y-5">
          <Card>
            <p className="eyebrow">Project period</p>
            <p className="mt-3 text-base font-medium">{project.period}</p>
            <h2 className="mt-7 text-sm font-semibold">Technologies</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <Badge>{technology}</Badge>
                </li>
              ))}
            </ul>
          </Card>
          {project.liveUrl || project.githubUrl ? (
            <Card>
              <h2 className="text-sm font-semibold">Project links</h2>
              <div className="mt-3 flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
                    href={project.liveUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Live project <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
                    href={project.githubUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Source repository{" "}
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                )}
              </div>
            </Card>
          ) : null}
          <Link
            className="inline-flex items-center gap-2 px-1 text-sm font-semibold text-muted hover:text-accent"
            to="/projects"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            All projects
          </Link>
        </aside>
      </Container>
    </>
  );
}

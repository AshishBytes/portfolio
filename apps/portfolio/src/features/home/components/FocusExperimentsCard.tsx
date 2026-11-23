import { useState } from "react";
import { ArrowUpRight, FlaskConical, FolderKanban, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { favorite } from "../../../content/favorites";
import { experiments } from "../../../content/experiments";
import { getExperimentProjects, projects } from "../../../content/projects";
import { Badge } from "../../../components/ui/Badge";
import { Card } from "../../../components/ui/Card";

type FocusTab = "focus" | "experiments";

export function FocusExperimentsCard() {
  const [activeTab, setActiveTab] = useState<FocusTab>("focus");
  const experimentProjects = getExperimentProjects(3);
  const sideProjects = experiments
    .map((experiment) => ({
      experiment,
      project: projects.find((project) => project.title === experiment.title),
    }))
    .filter(
      (entry): entry is typeof entry & { project: (typeof projects)[number] } =>
        Boolean(entry.project),
    );

  return (
    <Card className="flex h-full flex-col">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">Focus &amp; experiments</p>
        <div
          aria-label="Focus and experiments"
          className="inline-flex rounded-full border border-line bg-surface-soft p-1"
          role="tablist"
        >
          <button
            aria-controls="focus-panel"
            aria-selected={activeTab === "focus"}
            className={`min-h-9 rounded-full px-3 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${activeTab === "focus" ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink"}`}
            id="focus-tab"
            onClick={() => setActiveTab("focus")}
            role="tab"
            type="button"
          >
            Current focus
          </button>
          <button
            aria-controls="focus-panel"
            aria-selected={activeTab === "experiments"}
            className={`min-h-9 rounded-full px-3 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${activeTab === "experiments" ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink"}`}
            id="experiments-tab"
            onClick={() => setActiveTab("experiments")}
            role="tab"
            type="button"
          >
            Experiments
          </button>
        </div>
      </div>

      <div
        aria-labelledby={activeTab === "focus" ? "focus-tab" : "experiments-tab"}
        className="mt-5 min-h-40 flex-1"
        id="focus-panel"
        role="tabpanel"
        tabIndex={0}
      >
        {activeTab === "focus" ? (
          <ul aria-label="Current focus" className="space-y-1.5">
            <li>
              <div className="group flex items-start gap-2 rounded-lg bg-surface-soft px-2.5 py-2">
                <div className="relative shrink-0 mt-0.5">
                  <Network
                    aria-hidden="true"
                    className="shrink-0 text-accent-dark"
                    size={14}
                  />
                </div>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold text-ink leading-snug">
                    {favorite.title}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                    {favorite.detail}
                  </span>
                </span>
              </div>
            </li>
          </ul>
        ) : (
          <ul aria-label="Active experiments" className="space-y-1.5">
            {experimentProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group flex items-start gap-2 rounded-lg bg-surface-soft px-2.5 py-2 transition-colors hover:bg-surface"
                >
                  <div className="relative shrink-0 mt-0.5">
                    <FlaskConical
                      aria-hidden="true"
                      className="shrink-0 text-accent-dark"
                      size={14}
                    />
                    <span
                      className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-amber-500"
                      title="Work in progress"
                      aria-label="Work in progress"
                    />
                  </div>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                      {project.title}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-snug text-muted line-clamp-1">
                      {project.subtitle}
                    </span>
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5 mt-0.5">
                    {project.pinned && (
                      <span
                        className="inline-flex h-1.5 w-1.5 rounded-full bg-accent"
                        title="Pinned"
                        aria-label="Pinned project"
                      />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 border-t border-line pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">Side projects</p>
          <FolderKanban aria-hidden="true" className="text-muted" size={16} />
        </div>
        <ul aria-label="Side projects" className="mt-3 space-y-2">
          {sideProjects.map(({ experiment, project }) => (
            <li key={experiment.title}>
              <Link
                className="group flex min-h-14 items-center gap-3 rounded-xl bg-surface-soft px-3 py-2.5 transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                to={`/projects/${project.slug}`}
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-muted">
                  <FolderKanban aria-hidden="true" size={15} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink group-hover:text-accent">
                    {experiment.title}
                  </span>
                  <span className="mt-0.5 block truncate text-xs leading-5 text-muted">
                    {experiment.detail}
                  </span>
                </span>
                <Badge className="shrink-0 px-2 py-0.5 text-[10px]">
                  {experiment.category}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        className="mt-4 inline-flex min-h-11 w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
        to="/projects"
      >
        All projects <ArrowUpRight aria-hidden="true" size={15} />
      </Link>
    </Card>
  );
}

import { useState } from "react";
import { ArrowUpRight, FlaskConical, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { favorite } from "../../../content/favorites";
import { getExperimentProjects } from "../../../content/projects";
import { Badge } from "../../../components/ui/Badge";
import { Card } from "../../../components/ui/Card";

type FocusTab = "focus" | "experiments";

export function FocusExperimentsCard() {
  const [activeTab, setActiveTab] = useState<FocusTab>("focus");
  const experimentProjects = getExperimentProjects(3);

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
          <div className="flex h-full items-start gap-3 rounded-2xl bg-surface-soft p-4 sm:p-5">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
              <Network aria-hidden="true" size={18} />
            </span>
            <div>
              <p className="eyebrow">{favorite.label}</p>
              <p className="display-heading mt-2 text-2xl leading-tight text-ink">
                {favorite.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{favorite.detail}</p>
            </div>
          </div>
        ) : (
          <ul className="space-y-2">
            {experimentProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group flex items-center gap-3 rounded-xl bg-surface-soft px-3 py-3 transition-colors hover:bg-surface"
                >
                  <div className="relative shrink-0">
                    <FlaskConical
                      aria-hidden="true"
                      className="shrink-0 text-accent-dark"
                      size={17}
                    />
                    {project.experiment && (
                      <span
                        className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-500"
                        title="Work in progress"
                        aria-label="Work in progress"
                      />
                    )}
                  </div>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {project.subtitle}
                    </span>
                  </span>
                  <div className="flex shrink-0 items-center gap-2">
                    {project.pinned && (
                      <Badge className="shrink-0 bg-accent-soft px-2 py-1 text-xs text-accent-dark">
                        Pinned
                      </Badge>
                    )}
                    <Badge className="shrink-0 px-2 py-1 text-xs text-muted">
                      {project.category}
                    </Badge>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
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

import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Experience } from "../../types/content";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="relative">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="eyebrow">{experience.period}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">
            {experience.role}
          </h2>
          <p className="mt-1 text-sm font-medium text-accent-dark">
            {experience.organization}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
          <MapPin aria-hidden="true" size={14} />
          {experience.location}
        </span>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
        {experience.achievements.map((achievement) => (
          <li className="flex gap-3" key={achievement}>
            <span
              aria-hidden="true"
              className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
      {experience.projectSlug && (
        <div className="mt-5 border-t border-line pt-4">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            to={`/projects/${experience.projectSlug}`}
          >
            View project case study <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      )}
    </Card>
  );
}

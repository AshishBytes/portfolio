import { ArrowUpRight, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { experiments } from "../../../content/experiments";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";

export function ExperimentsCard() {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-2">
        <FlaskConical aria-hidden="true" className="text-accent" size={16} />
        <p className="eyebrow">Experiments</p>
      </div>
      <ul className="mt-4 space-y-3">
        {experiments.map((experiment) => (
          <li
            className="flex items-start justify-between gap-3 rounded-xl bg-surface-soft px-3 py-3"
            key={experiment.title}
          >
            <div>
              <p className="m-0 text-sm font-semibold">{experiment.title}</p>
              <p className="m-0 mt-1 text-xs leading-5 text-muted">
                {experiment.detail}
              </p>
            </div>
            <Badge className="shrink-0 px-2 py-0.5 text-[10px]">
              {experiment.category}
            </Badge>
          </li>
        ))}
      </ul>
      <Link
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-accent"
        to="/projects"
      >
        See projects <ArrowUpRight aria-hidden="true" size={14} />
      </Link>
    </Card>
  );
}

import { ArrowUpRight, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { favorite } from "../../../content/current-focus";
import { Card } from "../../../components/ui/Card";

export function RecentFavorite() {
  return (
    <Card className="flex h-full min-h-36 flex-col justify-between">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow">{favorite.label}</p>
          <p className="mt-3 text-lg font-semibold tracking-tight">
            {favorite.title}
          </p>
          <p className="mt-1 text-sm text-muted">{favorite.detail}</p>
        </div>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
          <Network aria-hidden="true" size={18} strokeWidth={1.7} />
        </span>
      </div>
      <Link
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-accent"
        to="/skills"
      >
        Explore skills <ArrowUpRight aria-hidden="true" size={14} />
      </Link>
    </Card>
  );
}

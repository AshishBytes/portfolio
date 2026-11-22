import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@repo/config";
import { about } from "../../../content/about";
import { profile } from "../../../content/profile";
import { Card } from "../../../components/ui/Card";
import { SocialLinks } from "../../../components/navigation/SocialLinks";

const stats = [
  { value: site.metrics.yearsBuilding, label: "Years building" },
  { value: site.metrics.users, label: "Users served" },
  { value: site.metrics.uptime, label: "Uptime" },
];

export function BioCard() {
  return (
    <Card className="flex h-full flex-col" id="intro">
      <div>
        <p className="eyebrow">A little about me</p>
        <p className="prose-copy mt-4 text-[0.95rem] leading-7 text-muted">
          {about.introduction}
        </p>
      </div>

      <ul aria-label="Career highlights" className="mt-6 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <li
            className="min-w-0 rounded-xl border border-line bg-surface-soft px-2.5 py-3 sm:px-3"
            key={stat.label}
          >
            <p className="m-0 font-mono text-lg font-semibold leading-none tracking-tight text-ink sm:text-xl">
              {stat.value}
            </p>
            <p className="m-0 mt-2 text-xs font-medium leading-4 text-muted">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-line pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin aria-hidden="true" size={15} /> {profile.location}
          </span>
          <Link
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
            to="/about"
          >
            More about me <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <SocialLinks compact />
          <a
            className="text-sm font-medium text-muted underline decoration-line underline-offset-4 hover:text-accent"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
      </div>
    </Card>
  );
}

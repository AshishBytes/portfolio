import { ArrowUpRight, MapPin } from "lucide-react";
import { about } from "../../../content/about";
import { profile } from "../../../content/profile";
import { Card } from "../../../components/ui/Card";
import { SocialLinks } from "../../../components/navigation/SocialLinks";
import { Link } from "react-router-dom";

export function BioCard() {
  return (
    <Card className="flex h-full flex-col justify-between" id="intro">
      <div>
        <p className="eyebrow">A little about me</p>
        <p className="prose-copy mt-4 text-[0.95rem] leading-7 text-muted">
          {about.introduction}
        </p>
      </div>
      <div className="mt-7 border-t border-line pt-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
            <MapPin aria-hidden="true" size={14} /> {profile.location}
          </span>
          <Link
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent"
            to="/about"
          >
            More about me <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <SocialLinks compact />
          <a
            className="text-xs font-medium text-muted underline decoration-line underline-offset-4 hover:text-accent"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
      </div>
    </Card>
  );
}

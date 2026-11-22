import { ArrowUpRight, BadgeCheck, Download } from "lucide-react";
import { site } from "@repo/config";
import { profile } from "../../../content/profile";
import { ButtonLink } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { Container } from "../../../components/ui/Container";

export function HeroHeader() {
  return (
    <section
      aria-labelledby="hero-title"
      className="pb-7 pt-9 sm:pb-9 sm:pt-12 lg:pt-16"
    >
      <Container>
        <div className="max-w-4xl">
          {site.discordBotVerified && (
            <p className="mb-5 inline-flex min-h-8 items-center gap-2 rounded-full border border-accent/35 bg-surface px-3 py-1 text-xs font-semibold text-accent-dark">
              <BadgeCheck aria-hidden="true" size={15} />
              <span>
                Verified Discord bot - {site.metrics.users} users - {site.metrics.servers} servers
              </span>
            </p>
          )}
            <p className="eyebrow">{profile.title}</p>
            <h1
              id="hero-title"
              className="display-heading mt-3 text-[3.35rem] leading-[0.98] sm:text-7xl lg:text-[5.6rem]"
            >
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Backend and distributed systems for {site.metrics.users} Discord users.
            </p>
          <ul aria-label="Areas of practice" className="mt-5 flex flex-wrap gap-2">
            {["Backend", "AI/ML", "Distributed Systems", "Open Source"].map(
              (label) => (
                <li key={label}>
                  <Badge className="border-line bg-surface-soft px-3 py-1.5 text-xs text-muted">
                    {label}
                  </Badge>
                </li>
              ),
            )}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink to="/projects">
              View work <ArrowUpRight aria-hidden="true" size={16} />
            </ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary">
              Resume <Download aria-hidden="true" size={15} />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../../../content/profile";
import { ButtonLink } from "../../../components/ui/Button";
import { Container } from "../../../components/ui/Container";

export function HeroHeader() {
  return (
    <section
      aria-labelledby="hero-title"
      className="pb-7 pt-9 sm:pb-9 sm:pt-12 lg:pt-16"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
          <div>
            <p className="eyebrow">{profile.title}</p>
            <h1
              id="hero-title"
              className="display-heading mt-3 text-[3.35rem] leading-[0.98] sm:text-7xl lg:text-[5.6rem]"
            >
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink to="/projects" size="small">
              Selected work <ArrowUpRight aria-hidden="true" size={15} />
            </ButtonLink>
            <ButtonLink href={profile.resume} size="small" variant="secondary">
              Resume <Download aria-hidden="true" size={15} />
            </ButtonLink>
          </div>
        </div>
        <a
          className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-subtle transition-colors hover:text-accent"
          href="#intro"
        >
          Explore the portfolio <ArrowDown aria-hidden="true" size={14} />
        </a>
      </Container>
    </section>
  );
}

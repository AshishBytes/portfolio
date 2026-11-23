import { ArrowUpRight, BookOpenText } from "lucide-react";
import { publications } from "../../../content/publications";
import type { Publication } from "../../../types/content";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { SectionHeading } from "../../../components/ui/SectionHeading";

const featuredPublications = publications.filter(
  (publication) => publication.featured,
);

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Card className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div>
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
            <BookOpenText aria-hidden="true" size={20} />
          </span>
          <div className="min-w-0">
            <p className="eyebrow text-sm leading-5">
              {publication.venue} · {publication.date}
            </p>
            <h3 className="display-heading mt-2 text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
              {publication.title}
            </h3>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
          {publication.summary}
        </p>
        <ul aria-label="Reported result" className="mt-4 flex flex-wrap gap-2">
          {publication.metrics.map((metric) => (
            <li key={metric}>
              <Badge className="border-line bg-surface-soft text-sm text-muted">
                {metric}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
      {publication.url && (
        <ButtonLink
          href={publication.url}
          size="medium"
          variant="secondary"
        >
          Read paper <ArrowUpRight aria-hidden="true" size={16} />
        </ButtonLink>
      )}
    </Card>
  );
}

export function FeaturedPublication() {
  if (featuredPublications.length === 0) return null;

  return (
    <section aria-labelledby="featured-publication-title" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow="Publications"
        title="Research & academic work"
        description="Published papers on mobile security and machine learning applications."
      />
      <div className="mt-7 grid gap-5">
        {featuredPublications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
}

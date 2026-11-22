import { ArrowUpRight, BookOpenText } from "lucide-react";
import { publications } from "../../../content/publications";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { SectionHeading } from "../../../components/ui/SectionHeading";

const featuredPaper = publications.find(
  (publication) => publication.id === "mobile-security-threats",
);

export function FeaturedPublication() {
  if (!featuredPaper) return null;

  return (
    <section aria-labelledby="featured-publication-title" className="py-12 sm:py-16">
      <SectionHeading
        eyebrow="Publication"
        title="Mobile security research"
        description="A 2024 IJETAE paper on reducing Android attack surface."
      />
      <Card className="mt-7 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
              <BookOpenText aria-hidden="true" size={20} />
            </span>
            <div className="min-w-0">
              <p className="eyebrow text-sm leading-5">
                IJETAE · {featuredPaper.year}
              </p>
              <h2
                className="display-heading mt-2 text-2xl leading-tight tracking-tight text-ink sm:text-3xl"
                id="featured-publication-title"
              >
                {featuredPaper.title}
              </h2>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
            {featuredPaper.summary}
          </p>
          <ul aria-label="Reported result" className="mt-4 flex flex-wrap gap-2">
            {featuredPaper.metrics.map((metric) => (
              <li key={metric}>
                <Badge className="border-line bg-surface-soft text-sm text-muted">
                  {metric}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        {featuredPaper.url && (
          <ButtonLink
            href={featuredPaper.url}
            size="medium"
            variant="secondary"
          >
            Read paper <ArrowUpRight aria-hidden="true" size={16} />
          </ButtonLink>
        )}
      </Card>
    </section>
  );
}

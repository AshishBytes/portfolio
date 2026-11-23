import { ArrowUpRight, BookOpenText } from "lucide-react";
import { publications } from "../content/publications";
import { PageHeader } from "../components/sections/PageHeader";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

export function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Research and applied work."
        description="Research summaries across mobile security and applied machine learning."
      />
      <Container className="grid gap-5 pb-12 md:grid-cols-2">
        {publications.map((publication) => (
          <Card className="flex flex-col" key={publication.id}>
            <BookOpenText
              aria-hidden="true"
              className="text-accent"
              size={20}
            />
            <p className="eyebrow mt-4">
              {publication.venue} · {publication.year}
            </p>
            <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight">
              {publication.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              {publication.summary}
            </p>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Reported results"
            >
              {publication.metrics.map((metric) => (
                <li
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark"
                  key={metric}
                >
                  {metric}
                </li>
              ))}
            </ul>
            {publication.url && (
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"
                href={publication.url}
                rel="noreferrer noopener"
                target="_blank"
              >
                Publication link <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            )}
          </Card>
        ))}
      </Container>
    </>
  );
}

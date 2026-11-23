import { experience } from "../content/experience";
import { ExperienceCard } from "../components/cards/ExperienceCard";
import { PageHeader } from "../components/sections/PageHeader";
import { Container } from "../components/ui/Container";

export function ExperiencePage() {
  // Extract year from period for sorting
  const extractYear = (period: string): number => {
    const match = period.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Sort all experience by year (newest first)
  const sortedExperience = [...experience].sort(
    (a, b) => extractYear(b.period) - extractYear(a.period)
  );

  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Selected professional experience."
        description="Work across backend engineering, distributed systems, and low-latency software."
      />
      <Container className="pb-12">
        <section
          aria-labelledby="experience-history-title"
          className="grid gap-5 lg:grid-cols-2"
        >
          <h2 className="sr-only" id="experience-history-title">
            Experience history
          </h2>
          {sortedExperience.map((item) => (
            <ExperienceCard experience={item} key={item.id} />
          ))}
        </section>
      </Container>
    </>
  );
}

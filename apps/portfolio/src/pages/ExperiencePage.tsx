import { getAllExperience } from "../content/experience";
import { ExperienceCard } from "../components/cards/ExperienceCard";
import { PageHeader } from "../components/sections/PageHeader";
import { Container } from "../components/ui/Container";

export function ExperiencePage() {
  // Get all experience sorted by year (newest first)
  const sortedExperience = getAllExperience();

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
          className="grid grid-cols-1 gap-5 lg:grid-cols-2"
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

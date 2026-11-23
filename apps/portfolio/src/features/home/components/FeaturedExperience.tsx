import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedExperience } from "../../../content/experience";
import { ExperienceCard } from "../../../components/cards/ExperienceCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";

// Show featured experience on home page
const featuredExperience = getFeaturedExperience();

export function FeaturedExperience() {
  if (featuredExperience.length === 0) return null;

  return (
    <section aria-labelledby="featured-experience-title" className="py-12 sm:py-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Experience"
          title="Professional background"
          description="Building distributed systems and backend infrastructure."
        />
        <Link
          className="inline-flex min-h-11 w-fit items-center gap-2 pb-1 text-sm font-semibold text-ink hover:text-accent"
          to="/experience"
        >
          Experience directory <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
      <div className="mt-7 grid gap-5">
        {featuredExperience.map((item) => (
          <ExperienceCard experience={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

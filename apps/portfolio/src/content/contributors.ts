import { z } from "zod";
import type { Contributor } from "../types/content";
import { experience } from "./experience";
import { projects } from "./projects";

const contributorSchema = z.object({
  name: z.string().min(1),
  subtitle: z.string().min(1),
});

export const contributorHeading = "Contributed to the success of";

/**
 * Dynamically generate contributors from featured experience entries.
 * This ensures contributors always match actual project/experience data.
 */
function generateContributors(): Contributor[] {
  const featuredExperience = experience.filter((exp) => exp.featured === true);

  return featuredExperience.map((exp) => {
    // Find the associated project if it exists
    const project = exp.projectSlug
      ? projects.find((p) => p.slug === exp.projectSlug)
      : null;

    // Use project title if available, otherwise use organization name (first part)
    let name = exp.organization.split(" - ")[0];
    if (project) {
      name = project.title;
    }

    // Determine subtitle from project category or year for hackathons
    let subtitle = "Platform";
    if (project) {
      const category = project.category.toLowerCase();
      if (category.includes("discord")) {
        subtitle = "Discord";
      } else if (category.includes("web3") || category.includes("blockchain")) {
        subtitle = "Web3";
      } else if (category.includes("hackathon")) {
        // Extract year from period for hackathons
        const yearMatch = exp.period.match(/\d{4}/);
        subtitle = yearMatch ? yearMatch[0] : "Hackathon";
      } else {
        // Use first word of category
        subtitle = project.category.split(" ")[0];
      }
    }

    return { name, subtitle };
  });
}

export const contributors: Contributor[] = contributorSchema
  .array()
  .parse(generateContributors());

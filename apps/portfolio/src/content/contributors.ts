import { z } from "zod";
import type { Contributor } from "../types/content";

const contributorSchema = z.object({
  name: z.string().min(1),
  subtitle: z.string().min(1),
});

export const contributorHeading = "Contributed to the success of";

export const contributors: Contributor[] = contributorSchema.array().parse([
  { name: "Reef", subtitle: "Platform" },
  { name: "Happy Bot", subtitle: "Discord" },
  { name: "HackIITK", subtitle: "2025" },
  { name: "Blockchain Voting", subtitle: "Web3" },
]);

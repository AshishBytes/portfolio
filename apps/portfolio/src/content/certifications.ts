import { z } from "zod";
import type { Achievement } from "../types/content";

const achievementSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  organization: z.string().min(1),
  date: z.string().min(1),
  kind: z.enum(["certification", "award"]),
});

export const achievements: Achievement[] = achievementSchema.array().parse([
  {
    id: "azure-fundamentals",
    title: "Azure Fundamentals (AZ-900)",
    organization: "Microsoft Learn",
    date: "September 2025",
    kind: "certification",
  },
  {
    id: "google-cloud-digital-leader",
    title: "Cloud Digital Leader",
    organization: "Google Cloud",
    date: "March 2025",
    kind: "certification",
  },
  {
    id: "kick-start-round-b",
    title: "Round B — Global rank 432 (top 0.8%)",
    organization: "Google Kick Start",
    date: "2024",
    kind: "award",
  },
  {
    id: "hackiitk-blockchain-runner-up",
    title: "Blockchain track runner-up",
    organization: "HackIITK 2025",
    date: "2025",
    kind: "award",
  },
  {
    id: "blue-prism-foundation-developer",
    title: "Foundation Developer",
    organization: "Blue Prism",
    date: "October 2023",
    kind: "certification",
  },
]);

import { z } from "zod";
import type { Project } from "../types/content";

const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  period: z.string().min(1),
  category: z.string().min(1),
  technologies: z.array(z.string().min(1)).min(1),
  achievements: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
  liveUrl: z.url().optional(),
  githubUrl: z.url().optional(),
  image: z.string().startsWith("/").optional(),
});

export const projects: Project[] = projectSchema.array().parse([
  {
    slug: "docqa-tutor",
    title: "DocQA Tutor",
    subtitle: "Summarisation & question-answering API",
    description:
      "A document question-answering system built around a fine-tuned T5 model and semantic search.",
    period: "February – April 2025",
    category: "Machine learning / NLP",
    technologies: ["Python", "T5", "PyTorch", "SBERT", "FastAPI", "React"],
    achievements: [
      "Fine-tuned T5 on 2 million samples; reported ROUGE-L 43.2 and BLEU 27.5.",
      "Deployed on AKS GPU pools with horizontal pod autoscaling.",
      "Reduced latency by 47%, measured with Application Insights.",
    ],
    featured: true,
  },
  {
    slug: "tripledger",
    title: "TripLedger",
    subtitle: "Offline-first expense tracker",
    description:
      "An offline-first travel expense tracker using a CRDT ledger to reconcile changes across devices.",
    period: "August – December 2024",
    category: "Backend / mobile",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
    ],
    achievements: [
      "Implemented CRDT ledger sync for 10,000 daily transactions with eventual consistency while offline.",
      "Used a mock Azure AD B2C integration to block unauthorized writes.",
    ],
    featured: true,
  },
]);

export const projectBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);

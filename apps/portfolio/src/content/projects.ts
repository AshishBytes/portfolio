import { z } from "zod";
import type { Project } from "../types/content";

const projectMetricSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  period: z.string().min(1),
  category: z.string().min(1),
  technologies: z.array(z.string().min(1)).min(1),
  achievements: z.array(z.string().min(1)).min(1),
  metrics: z.array(projectMetricSchema).min(1).optional(),
  featured: z.boolean(),
  liveUrl: z.url().optional(),
  githubUrl: z.url().optional(),
  image: z.string().startsWith("/").optional(),
});

export const projects: Project[] = projectSchema.array().parse([
  {
    slug: "reef-platform",
    title: "Reef Bot",
    subtitle: "Microservices · Kubernetes",
    description:
      "Co-developed a Discord-verified bot platform from 0 to global scale. Engineered the sharding system, rate-limit handling, and real-time event pipeline.",
    period: "November 2021 – April 2023",
    category: "Discord Platform",
    technologies: ["Node.js", "Discord.js", "Redis", "PostgreSQL", "Kubernetes"],
    achievements: [
      "Co-developed the Discord-verified bot platform.",
      "Engineered its sharding system, rate-limit handling, and real-time event pipeline.",
    ],
    metrics: [
      { value: "585K+", label: "Users" },
      { value: "850+", label: "Servers" },
      { value: "99.97%", label: "Uptime" },
    ],
    featured: true,
  },
  {
    slug: "hackiitk-blockchain",
    title: "HackIITK Blockchain",
    subtitle: "Gas-less Relayer · Solidity",
    description:
      "Built a gas-less meta-transaction relayer for a Solidity voting system. Ranked #2 of 54 teams, with zero critical issues under 5,000+ concurrent transactions.",
    period: "February 2025",
    category: "Web3 / Hackathon",
    technologies: ["Solidity", "Ethers.js", "Node.js", "Hardhat"],
    achievements: [
      "Built a gas-less Solidity relayer handling 5,000+ transactions with under 150 ms p95 latency.",
      "Integrated Slither and MythX into DevSecOps; shipped with zero critical issues.",
      "Ranked 2nd among 54 teams for reliability and innovation.",
    ],
    metrics: [
      { value: "#2/54", label: "Rank" },
      { value: "5K+", label: "Transactions" },
      { value: "<150ms", label: "p95 latency" },
    ],
    featured: true,
  },
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
    metrics: [
      { value: "43.2", label: "ROUGE-L" },
      { value: "27.5", label: "BLEU" },
      { value: "−47%", label: "Latency" },
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

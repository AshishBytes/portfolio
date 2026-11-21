import { z } from "zod";
import type { Experience } from "../types/content";

const experienceSchema = z.object({
  id: z.string().min(1),
  organization: z.string().min(1),
  role: z.string().min(1),
  period: z.string().min(1),
  location: z.string().min(1),
  achievements: z.array(z.string().min(1)).min(1),
  technologies: z.array(z.string().min(1)),
});

export const experience: Experience[] = experienceSchema.array().parse([
  {
    id: "hackiitk-blockchain-hackathon",
    organization: "HackIITK Blockchain Hackathon",
    role: "Team Lead & Backend Engineer",
    period: "February 2025",
    location: "Kanpur, India",
    achievements: [
      "Built a gas-less Solidity relayer handling 5,000+ transactions with under 150 ms p95 latency; autoscaled the proof of concept on Azure Container Apps.",
      "Integrated Slither and MythX into DevSecOps; shipped with zero critical issues.",
      "Ranked 2nd among 54 teams for reliability and innovation.",
    ],
    technologies: ["Solidity", "Azure Container Apps", "Slither", "MythX"],
  },
  {
    id: "reef-distributed-discord-platform",
    organization: "Reef — Distributed Discord Platform",
    role: "Lead Software Engineer",
    period: "November 2021 – April 2023",
    location: "Remote",
    achievements: [
      "Designed sharded Go and Python services on Kubernetes, serving 1 million monthly users at 99.9% uptime.",
      "Refactored a TCP stack with epoll and zero-copy techniques, reducing median latency by 34 ms.",
      "Added SBERT semantic search, increasing intent accuracy from 72% to 93%.",
      "Promoted to lead in four months, mentored three engineers, and rolled out CI/CD with GitHub Actions and Helm.",
    ],
    technologies: [
      "Go",
      "Python",
      "Kubernetes",
      "SBERT",
      "GitHub Actions",
      "Helm",
    ],
  },
  {
    id: "happy-low-latency-music-bot",
    organization: "Happy — Low-Latency Music Bot",
    role: "Software Engineer",
    period: "February 2020 – July 2021",
    location: "Remote",
    achievements: [
      "Engineered a Python and FFmpeg audio engine processing 500,000 commands per day; reduced jitter by 35%.",
      "Adaptive Opus encoding reduced bandwidth by 42% (USD 220 per month).",
      "Authored 180 PyTest cases at 88% coverage, halving regression defects and speeding releases by 50%.",
    ],
    technologies: ["Python", "FFmpeg", "Opus", "PyTest"],
  },
]);

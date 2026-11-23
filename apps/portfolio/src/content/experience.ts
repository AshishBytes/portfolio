import { z } from "zod";
import { site } from "@repo/config";
import type { Experience } from "../types/content";

const experienceSchema = z.object({
  id: z.string().min(1),
  organization: z.string().min(1),
  role: z.string().min(1),
  period: z.string().min(1),
  location: z.string().min(1),
  achievements: z.array(z.string().min(1)).min(1),
  technologies: z.array(z.string().min(1)),
  pinned: z.boolean().optional(),
  projectSlug: z.string().optional(),
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
    pinned: false,
    projectSlug: "hackiitk-blockchain",
  },
  {
    id: "reef-distributed-discord-platform",
    organization: "Reef — Discord Platform",
    role: "Lead Software Engineer",
    period: "November 2021 – April 2023",
    location: "Remote",
    achievements: [
      `Co-led the development of a Discord-verified bot featuring automated moderation, spam prevention, voice controls, and interactive slash commands serving ${site.metrics.users} users across ${site.metrics.servers} servers at ${site.metrics.uptime} uptime.`,
      "Structured modular command, slash-command, and event handlers in Node.js and Discord.js to support real-time moderation, spam filtering, and audio streaming.",
      "Built a MongoDB persistence layer paired with query optimization and caching to keep lookup latency low during peak server traffic.",
      "Completed Discord's official bot verification process with rate-limit handling and privacy compliance, and coordinated the leadership handover.",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Discord.js",
      "Express.js",
      "MongoDB",
      "WebSockets",
    ],
    pinned: true,
    projectSlug: "reef-platform",
  },
  {
    id: "happy-low-latency-music-bot",
    organization: "HAPPY — Discord Music Bot",
    role: "Software Engineer",
    period: "November 2021 – April 2023",
    location: "Remote",
    achievements: [
      "Built a full-featured Discord music and radio bot from scratch using modular command, event, and voice-streaming handlers in Node.js and Discord.js.",
      "Earned Discord's official Verified Bot badge by meeting platform security, rate-limit, and verification standards.",
      "Iterated across 963 commits with MongoDB persistence and cloud/VPS deployment before archiving the project in February 2023.",
    ],
    technologies: ["JavaScript", "Node.js", "Discord.js", "MongoDB", "Heroku"],
    pinned: true,
    projectSlug: "happy-bot",
  },
]);

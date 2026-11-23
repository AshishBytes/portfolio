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
  featured: z.boolean().optional(),
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
      "Selected among 54 Grand Finale teams (from 7,000+ registrations) in the HACK IITK 2025 Solution Track (Web3 Security).",
      "Engineered a GaslessForwarder smart contract and off-chain relayer enabling gas-free ERC-20 and ERC-721 transfers via EIP-712 typed data signatures.",
      "Hardened contract security with incrementing nonce replay protection, OpenZeppelin ReentrancyGuard, and Solidity Shield static audits.",
    ],
    technologies: ["Solidity", "Hardhat", "Ethers.js", "OpenZeppelin", "Node.js", "EIP-712"],
    featured: true,
    projectSlug: "hackiitk-blockchain",
  },
  {
    id: "reef-distributed-discord-platform",
    organization: "Reef - Discord Platform",
    role: "Lead Software Engineer",
    period: "November 2021 - April 2023",
    location: "Remote",
    achievements: [
      `Co-led the development of a Discord-verified bot featuring automated moderation, spam prevention, voice controls, and interactive slash commands serving ${site.metrics.users} users across ${site.metrics.servers} servers.`,
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
    featured: true,
    projectSlug: "reef-platform",
  },
  {
    id: "happy-low-latency-music-bot",
    organization: "HAPPY - Discord Music Bot",
    role: "Software Engineer",
    period: "November 2021 - April 2023",
    location: "Remote",
    achievements: [
      "Built a full-featured Discord music and radio bot from scratch using modular command, event, and voice-streaming handlers in Node.js and Discord.js.",
      "Earned Discord's official Verified Bot badge by meeting platform security, rate-limit, and verification standards.",
      "Iterated across 963 commits with MongoDB persistence and cloud/VPS deployment before archiving the project in February 2023.",
    ],
    technologies: ["JavaScript", "Node.js", "Discord.js", "MongoDB", "Heroku"],
    featured: false,
    projectSlug: "happy-bot",
  },
]);

export function getFeaturedExperience(limit?: number): Experience[] {
  const featuredExperience = experience.filter((exp) => exp.featured === true);

  // Sort by year (extract from period)
  const sorted = featuredExperience.sort((a, b) => {
    // Extract year from period (handles formats like "2026", "February 2025", "November 2021 - April 2023")
    const extractYear = (period: string): number => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0], 10) : 0;
    };

    const yearA = extractYear(a.period);
    const yearB = extractYear(b.period);

    // Sort by year descending (newest first)
    return yearB - yearA;
  });

  return limit ? sorted.slice(0, limit) : sorted;
}

export function getAllExperience(limit?: number): Experience[] {
  // Sort all experience by year descending (newest first)
  const sorted = [...experience].sort((a, b) => {
    const extractYear = (period: string): number => {
      const match = period.match(/\d{4}/);
      return match ? parseInt(match[0], 10) : 0;
    };

    const yearA = extractYear(a.period);
    const yearB = extractYear(b.period);

    return yearB - yearA;
  });

  return limit ? sorted.slice(0, limit) : sorted;
}


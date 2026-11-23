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
  experiment: z.boolean().optional(),
  pinned: z.boolean().optional(),
  liveUrl: z.url().optional(),
  githubUrl: z.url().optional(),
  image: z.string().startsWith("/").optional(),
});

export const projects: Project[] = projectSchema.array().parse([
  {
    slug: "reef-platform",
    title: "Reef Bot",
    subtitle: "Node.js · Event-Driven Architecture",
    description: "Co-led the development of a Discord-verified bot featuring automated moderation, spam prevention, voice controls, and interactive slash commands. Built the backend API, MongoDB data layer, and query caching.",
    period: "November 2021 – April 2023",
    category: "Discord Platform",
    technologies: [
      "JavaScript",
      "Node.js",
      "Discord.js",
      "Express.js",
      "MongoDB",
      "WebSockets"
    ],
    achievements: [
      "Structured modular command, slash-command, and event handlers in Node.js and Discord.js to support real-time moderation, spam filtering, and audio streaming.",
      "Built a MongoDB persistence layer paired with query optimization and caching to keep lookup latency low during peak server traffic.",
      "Completed Discord's official bot verification process with rate-limit handling and privacy compliance, and coordinated the leadership handover at 585K+ users."
    ],
    metrics: [
      { value: "585K+", label: "Users" },
      { value: "850+", label: "Servers" },
      { value: "Verified", label: "Discord Bot" }
    ],
    liveUrl: "https://discord.com/oauth2/authorize?client_id=970954920964534304&permissions=8&scope=bot",
    githubUrl: "https://github.com/AshishBytes/Reef-Bot",
    image: "/images/projects/reef-bot.svg",
    featured: true,
    experiment: false,
    pinned: true,
  },
  {
    "slug": "ai-video-studio",
    "title": "AI Video Studio",
    "subtitle": "Python CLI + React/FastAPI Short-Form Video Workspace",
    "description": "A CLI-first Python workspace and local React/FastAPI browser studio for producing vertical short-form videos—managing versioned scripts, VoiceStudio narration, scene plans, PyCaps captions, timeline cuts/fades, and FFmpeg + Remotion rendering under a deterministic project manifest.",
    "period": "2026",
    "category": "Video Production Tools",
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "Node.js",
      "FFmpeg",
      "Remotion"
    ],
    "achievements": [
      "Engineered a deterministic Python CLI and manifest system that validates and tracks scripts, scene plans, audio, clips, subtitles, and MP4 quality reports.",
      "Built a local React/FastAPI studio integrating VoiceStudio TTS, manual Google Flow prompt workflows, PyCaps captions, and timeline cuts/fades.",
      "Implemented a dual FFmpeg/FFprobe and Remotion rendering pipeline with automated media inspection and validation checks."
    ],
    "metrics": [
      { "value": "CLI + Web", "label": "Dual Interface" },
      { "value": "FFmpeg + Remotion", "label": "Render Pipeline" },
      { "value": "Python 3.11+", "label": "Core Engine" }
    ],
    "image": "/images/projects/ai-video-studio.svg",
    "featured": false,
    "experiment": true,
    "pinned": false,
    "githubUrl": "https://github.com/AshishBytes/ai-video-studio"
  },
  {
    "slug": "streamsync-recorder",
    "title": "StreamSync Recorder",
    "subtitle": "Playwright + FastAPI · Crash-Safe Stream Recording",
    "description": "A Codespaces- and Windows-ready Python service for authorized browser playback recording. Uses Playwright, Chromium captureStream(), and MediaRecorder to capture WebM streams with 5-second chunked persistence, SHA-256 checksum journaling, SQLite metadata tracking, and automated stream-state recovery.",
    "period": "2026",
    "category": "Media & Automation Systems",
    "technologies": [
      "Python",
      "FastAPI",
      "Playwright",
      "Chromium",
      "SQLite",
      "MediaRecorder API"
    ],
    "achievements": [
      "Built a crash-resilient chunk pipeline that fsyncs 5-second WebM media chunks alongside SHA-256 checksum JSONL journals and SQLite segment records before acknowledgment.",
      "Implemented startup manifest scanning and idempotent crash recovery that surfaces torn journal lines or checksum mismatches as RECOVERED, PARTIAL, or NEEDS_REPAIR.",
      "Engineered a thread-safe Manager lifecycle with stream-state monitoring, grace periods, auto-resume segmentation, and cooldown-locked 480p-to-960p quality recovery."
    ],
    "metrics": [
      { "value": "5s Chunks", "label": "SHA-256 Journaled" },
      { "value": "fsync", "label": "Crash Recovery" },
      { "value": "Playwright", "label": "FastAPI + SQLite" }
    ],
    "image": "/images/projects/streamsync-recorder.svg",
    "featured": false,
    "experiment": true,
    "pinned": false,
    liveUrl: undefined,
    "githubUrl": "https://github.com/AshishBytes"
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
    image: "/images/projects/hackiitk-blockchain.svg",
    featured: true,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes",
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
    image: undefined,
    featured: false,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes",
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
    metrics: undefined,
    image: undefined,
    featured: true,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes",
  },
  {
    slug: "travelquest",
    title: "TravelQuest",
    subtitle: "Personalized itineraries · travel APIs",
    description:
      "A smart travel planner offering personalized itineraries based on user preferences. It integrates Google Maps, OpenWeather, and Eventbrite data, with an AI chatbot for travel assistance.",
    period: "2025",
    category: "Travel planning",
    technologies: ["HTML", "Google Maps API", "OpenWeather API", "Eventbrite API"],
    achievements: [
      "Offers personalized travel itineraries based on user preferences.",
      "Integrates Google Maps, OpenWeather, and Eventbrite APIs and includes an AI chatbot.",
    ],
    metrics: undefined,
    image: undefined,
    featured: true,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes",
  },
]);

export const projectBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);

export function getExperimentProjects(limit?: number): Project[] {
  const experimentProjects = projects.filter((project) => project.experiment === true);

  // Sort by: pinned first, then by year (extract from period)
  const sorted = experimentProjects.sort((a, b) => {
    // Pinned projects come first
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;

    // Extract year from period (handles formats like "2026", "February 2025", "November 2021 – April 2023")
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

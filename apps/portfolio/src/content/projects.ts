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
    slug: "ai-video-studio",
    title: "AI Video Studio",
    subtitle: "CLI + local browser workspace for short-form video production",
    description:
      "A Python CLI workspace for organizing short-form video projects and deterministic file operations, plus a local React/FastAPI browser workspace for script versioning, narration, scene plans, captions, timeline cuts and fades, and Remotion rendering and export.",
    period: "2026",
    category: "Video production tools",
    technologies: ["Python", "React", "FastAPI", "Node.js", "FFmpeg", "Remotion"],
    achievements: [
      "Organizes project files, research, versioned narration, scene plans, clips, audio, renders, subtitles, and quality reports under a project manifest.",
      "The CLI validates and orchestrates deterministic file operations.",
      "The local browser workspace supports captioning, timeline cuts and fades, and Remotion rendering and export.",
    ],
    metrics: [
      { value: "CLI + Web", label: "Interfaces" },
      { value: "FFmpeg + Remotion", label: "Rendering" },
      { value: "FastAPI + React", label: "Workspace" },
    ],
    image: "/images/projects/ai-video-studio.svg",
    featured: false,
    experiment: true,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes/ai-video-studio",
  },
  {
    slug: "streamsync-capture-studio",
    title: "StreamSync Capture Studio",
    subtitle: "Browser capture · local recording",
    description:
      "Browser capture project for accessible HTML5 video sources across Chrome/Brave and Firefox Android targets. It supports capture of individual sources or an entire tab, local preview and recording, and optional publishing through configured WebRTC signaling. Use only on pages the user is authorized to record.",
    period: "2026",
    category: "Browser capture",
    technologies: ["JavaScript", "Manifest V3", "MediaRecorder", "WebRTC", "WebCodecs"],
    achievements: [
      "Supports separate Chrome/Brave Manifest V3 and Firefox Android release targets.",
      "Uses captureStream or chrome.tabCapture with an offscreen document and MediaRecorder.",
      "MP4 output depends on H.264/AAC WebCodecs support; otherwise, the project labels a WebM fallback.",
    ],
    metrics: [
      { value: "Chrome / Brave", label: "Manifest V3 targets" },
      { value: "Firefox Android", label: "Direct recorder target" },
      { value: "MP4 / WebM", label: "Recording formats" },
    ],
    image: "/images/projects/streamsync-capture-studio.svg",
    featured: false,
    experiment: true,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes",
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

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
    subtitle: "Python CLI + React/FastAPI Short-Form Video Workspace",
    description: "A CLI-first Python workspace and local React/FastAPI browser studio for producing vertical short-form videos—managing versioned scripts, VoiceStudio narration, scene plans, PyCaps captions, timeline cuts/fades, and FFmpeg + Remotion rendering under a deterministic project manifest.",
    period: "2026",
    category: "Video Production Tools",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Node.js",
      "FFmpeg",
      "Remotion"
    ],
    achievements: [
      "Engineered a deterministic Python CLI and manifest system that validates and tracks scripts, scene plans, audio, clips, subtitles, and MP4 quality reports.",
      "Built a local React/FastAPI studio integrating VoiceStudio TTS, manual Google Flow prompt workflows, PyCaps captions, and timeline cuts/fades.",
      "Implemented a dual FFmpeg/FFprobe and Remotion rendering pipeline with automated media inspection and validation checks."
    ],
    metrics: [
      { value: "CLI + Web", "label": "Dual Interface" },
      { value: "FFmpeg + Remotion", "label": "Render Pipeline" },
      { value: "Python 3.11+", "label": "Core Engine" }
    ],
    image: "/images/projects/ai-video-studio.svg",
    featured: false,
    experiment: true,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes/ai-video-studio"
  },
  {
    slug: "streamsync-capture-studio",
    title: "StreamSync Capture Studio",
    subtitle: "Playwright + FastAPI · Crash-Safe Stream Recording",
    description: "A Codespaces- and Windows-ready Python service for authorized browser playback recording. Uses Playwright, Chromium captureStream(), and MediaRecorder to capture WebM streams with 5-second chunked persistence, SHA-256 checksum journaling, SQLite metadata tracking, and automated stream-state recovery.",
    period: "2026",
    category: "Media & Automation Systems",
    technologies: [
      "Python",
      "FastAPI",
      "Playwright",
      "Chromium",
      "SQLite",
      "MediaRecorder API"
    ],
    achievements: [
      "Built a crash-resilient chunk pipeline that fsyncs 5-second WebM media chunks alongside SHA-256 checksum JSONL journals and SQLite segment records before acknowledgment.",
      "Implemented startup manifest scanning and idempotent crash recovery that surfaces torn journal lines or checksum mismatches as RECOVERED, PARTIAL, or NEEDS_REPAIR.",
      "Engineered a thread-safe Manager lifecycle with stream-state monitoring, grace periods, auto-resume segmentation, and cooldown-locked 480p-to-960p quality recovery."
    ],
    metrics: [
      { value: "5s Chunks", "label": "SHA-256 Journaled" },
      { value: "fsync", "label": "Crash Recovery" },
      { value: "Playwright", "label": "FastAPI + SQLite" }
    ],
    image: "/images/projects/streamsync-recorder.svg",
    featured: false,
    experiment: true,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes/streamsync-recorder"
  },
  {
    slug: "hackiitk-blockchain",
    title: "HackIITK Blockchain",
    subtitle: "Web3 Security Track · EIP-712 Meta-Transaction Relayer",
    description: "Built a gas-less meta-transaction forwarder and relayer for ERC-20 and ERC-721 transfers in the Web3 Security Solution Track at HACK IITK 2025—selected among 54 Grand Finale teams from 7,000+ registrations.",
    period: "February 2025",
    category: "Web3 Security / Hackathon",
    technologies: [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "OpenZeppelin",
      "Node.js",
      "EIP-712"
    ],
    achievements: [
      "Selected among 54 Grand Finale teams (from 7,000+ registrations) in the HACK IITK 2025 Solution Track (Web3 Security).",
      "Engineered a GaslessForwarder smart contract and off-chain relayer enabling gas-free ERC-20 and ERC-721 transfers via EIP-712 typed data signatures.",
      "Hardened contract security with incrementing nonce replay protection, OpenZeppelin ReentrancyGuard, and Solidity Shield static audits."
    ],
    metrics: [
      { value: "Top 54", "label": "From 7K+ Signups" },
      { value: "Web3 Track", "label": "HACK IITK '25" },
      { value: "EIP-712", "label": "ERC-20 & 721" }
    ],
    image: "/images/projects/hackiitk-blockchain.svg",
    featured: true,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes/Gasless-Forwarder"
  },
  {
    slug: "docqa-tutor",
    title: "DocQA Tutor",
    subtitle: "Offline Custom-Trained Transformer · Streamlit",
    description: "An offline academic tutor and document QA system trained from scratch on consumer GPU hardware (RTX 3050). Supports concept explanations, PDF chunk summarization, and MCQ quiz generation inside a local Streamlit interface.",
    period: "February – April 2025",
    category: "Machine Learning / NLP",
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "T5 / GPT-2",
      "HuggingFace Datasets",
      "Streamlit"
    ],
    achievements: [
      "Built an end-to-end custom training pipeline from scratch (tokenization, dataset normalization, FP16 mixed precision, and gradient checkpointing) optimized for 4–6 GB VRAM.",
      "Normalized four academic and summarization datasets (CNN/DailyMail, SciTLDR, SciQ, and SQuAD) into unified prompt-response formats for QA, TL;DRs, and MCQ generation.",
      "Integrated local PyTorch inference and PDF text-chunk extraction into a fully offline Streamlit tutor UI with session-state chat memory."
    ],
    metrics: [
      { value: "Offline", "label": "Local GPU Inference" },
      { value: "4 Datasets", "label": "QA, Quiz & TL;DR" },
      { value: "FP16", "label": "RTX 3050 Trained" }
    ],
    image: "/images/projects/docqa-tutor.svg",
    featured: false,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes/AI_Tutor"
  },
  {
    slug: "tripledger",
    title: "TripLedger",
    subtitle: "Group Trip Expense Tracker & Debt Simplifier",
    description: "A full-stack group travel expense tracker built with React, TypeScript, and Appwrite. Enables travelers to create trip groups, log shared expenses with flexible splits, track activity feeds, and simplify multi-member debt settlements.",
    period: "August – December 2024",
    category: "Full-Stack Web",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Appwrite",
      "React Query"
    ],
    achievements: [
      "Built a group expense management and debt-simplification engine that calculates net balances and minimizes transactions needed to settle up.",
      "Implemented user authentication, trip group permissions, and persistent expense storage using Appwrite's backend-as-a-service.",
      "Integrated TanStack React Query for client-side caching and synchronized group/global activity feeds across a responsive Tailwind CSS UI."
    ],
    metrics: [
      { value: "Debt Split", "label": "Balance Simplifier" },
      { value: "Appwrite", "label": "Auth & Database" },
      { value: "React Query", "label": "Cached Sync" }
    ],
    image: "/images/projects/tripledger.svg",
    featured: true,
    experiment: false,
    pinned: false,
    liveUrl: undefined,
    githubUrl: "https://github.com/AshishBytes/trip-expense-tracker"
  },
  {
    slug: "travelquest",
    title: "TravelQuest",
    subtitle: "Full-Stack Travel Planner · Multi-API & AI Chatbot",
    description: "A full-stack travel planning web application that generates personalized itineraries by budget, trip duration, and destination preferences—combining real-time Google Maps routing, OpenWeather forecasts, Eventbrite local events, and an AI travel assistant.",
    period: "2025",
    category: "Full-Stack Web",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "Google Maps API",
      "OpenWeather API",
      "Eventbrite API"
    ],
    achievements: [
      "Co-developed a multi-page travel planning platform with an Express backend and interactive destination, itinerary, and booking flows.",
      "Integrated Google Maps, OpenWeather, and Eventbrite APIs to surface real-time route options, weather forecasts, and local events.",
      "Built an AI-powered travel assistant to recommend routes, accommodations, and sightseeing plans tailored to user budgets and trip lengths."
    ],
    metrics: [
      { value: "3 Live APIs", "label": "Maps, Weather, Events" },
      { value: "AI Chatbot", "label": "Route & Trip Assistant" },
      { value: "Full-Stack", "label": "Node.js + Express" }
    ],
    image: "/images/projects/travelquest.svg",
    featured: true,
    experiment: false,
    pinned: false,
    liveUrl: "https://ashishbytes.github.io/TravelQuest/",
    githubUrl: "https://github.com/AshishBytes/TravelQuest"
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

import { projects } from "./projects";
import { experience } from "./experience";

/**
 * Extracts unique technologies from all projects and experience entries.
 * This ensures the about page skills are always in sync with actual work.
 */
export function extractTechnologies(): string[] {
  const allTechnologies = new Set<string>();

  // Extract from projects
  for (const project of projects) {
    for (const tech of project.technologies) {
      allTechnologies.add(tech);
    }
  }

  // Extract from experience
  for (const exp of experience) {
    for (const tech of exp.technologies) {
      allTechnologies.add(tech);
    }
  }

  return Array.from(allTechnologies).sort();
}

/**
 * Categorizes technologies by domain based on actual project usage.
 */
export function categorizeTechnologies() {
  const allTechs = extractTechnologies();

  // Backend & Server-side
  const backend = allTechs.filter((tech) =>
    [
      "Node.js",
      "Python",
      "FastAPI",
      "Express",
      "Express.js",
      "JavaScript",
    ].includes(tech),
  );

  // Databases & Persistence
  const databases = allTechs.filter((tech) =>
    ["MongoDB", "SQLite", "Appwrite"].includes(tech),
  );

  // Real-time & Messaging
  const realtime = allTechs.filter((tech) =>
    ["WebSockets", "Discord.js", "Discord API"].includes(tech),
  );

  // Frontend & UI
  const frontend = allTechs.filter((tech) =>
    [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Streamlit",
      "Remotion",
    ].includes(tech),
  );

  // ML & AI
  const ml = allTechs.filter((tech) =>
    [
      "PyTorch",
      "Transformers",
      "T5 / GPT-2",
      "HuggingFace Datasets",
    ].includes(tech),
  );

  // Web3 & Blockchain
  const web3 = allTechs.filter((tech) =>
    [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "OpenZeppelin",
      "EIP-712",
    ].includes(tech),
  );

  // Browser & Media APIs
  const browser = allTechs.filter((tech) =>
    [
      "Playwright",
      "Chromium",
      "MediaRecorder API",
      "FFmpeg",
      "Google Maps API",
      "OpenWeather API",
      "Eventbrite API",
    ].includes(tech),
  );

  // Cloud & Deployment (if any exist)
  const cloud = allTechs.filter((tech) =>
    ["Heroku / VPS", "Heroku"].includes(tech),
  );

  return {
    backend,
    databases,
    realtime,
    frontend,
    ml,
    web3,
    browser,
    cloud,
    all: allTechs,
  };
}

/**
 * Generates about highlights dynamically from actual project work.
 */
export function generateAboutHighlights() {
  const techs = categorizeTechnologies();

  const highlights = [];

  // Backend engineering (if we have backend techs)
  if (techs.backend.length > 0 || techs.databases.length > 0) {
    highlights.push({
      title: "Backend engineering",
      description:
        "Backend services, APIs, and data persistence across Node.js and Python.",
      skills: [...techs.backend, ...techs.databases].slice(0, 6),
    });
  }

  // Distributed systems (if we have real-time techs)
  if (techs.realtime.length > 0) {
    highlights.push({
      title: "Distributed systems",
      description:
        "Event-driven platforms, real-time messaging, and scalable bot architectures.",
      skills: [...techs.realtime, "Event handlers", "Query caching"],
    });
  }

  // ML & NLP (if we have ML techs)
  if (techs.ml.length > 0) {
    highlights.push({
      title: "Applied ML & NLP",
      description:
        "Document question answering, custom model training, and local GPU inference.",
      skills: techs.ml.slice(0, 6),
    });
  }

  // Web3 (if we have blockchain techs)
  if (techs.web3.length > 0) {
    highlights.push({
      title: "Web3 & Smart Contracts",
      description:
        "Gas-less meta-transactions, EIP-712 signatures, and Solidity contract development.",
      skills: techs.web3.slice(0, 6),
    });
  }

  // Frontend (if we have frontend techs and it's significant)
  if (techs.frontend.length >= 3) {
    highlights.push({
      title: "Frontend development",
      description:
        "Full-stack web applications with modern React, TypeScript, and responsive UI.",
      skills: techs.frontend.slice(0, 6),
    });
  }

  // Browser automation & media (if we have these techs)
  if (techs.browser.length >= 2) {
    highlights.push({
      title: "Automation & media tools",
      description:
        "Browser automation, media processing, and API integrations for specialized workflows.",
      skills: techs.browser.slice(0, 6),
    });
  }

  return highlights;
}

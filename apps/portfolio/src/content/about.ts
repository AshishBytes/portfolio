import type { AboutHighlight } from "../types/content";

export const about = {
  introduction:
    "My work has centered on backend systems, distributed services, and software tools. I have contributed to Discord-verified platforms serving 585K+ users, automation pipelines, and machine learning projects.",
  education: {
    institution: "Amity University Madhya Pradesh",
    program: "B.Tech. Computer Science & Engineering",
    period: "2022–2026",
    location: "Gwalior, India",
  },
};

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Backend engineering",
    description:
      "Backend services, APIs, and data persistence across Node.js and Python.",
    skills: ["Node.js", "Python", "FastAPI", "Express", "MongoDB", "SQLite"],
  },
  {
    title: "Distributed systems",
    description:
      "Event-driven platforms, real-time messaging, and scalable bot architectures.",
    skills: ["Discord.js", "WebSockets", "Event handlers", "Query caching"],
  },
  {
    title: "Applied ML & NLP",
    description:
      "Document question answering, custom model training, and local GPU inference.",
    skills: ["PyTorch", "Transformers", "T5 / GPT-2", "HuggingFace"],
  },
  {
    title: "Web3 & Smart Contracts",
    description:
      "Gas-less meta-transactions, EIP-712 signatures, and Solidity contract development.",
    skills: ["Solidity", "Hardhat", "Ethers.js", "OpenZeppelin", "EIP-712"],
  },
];

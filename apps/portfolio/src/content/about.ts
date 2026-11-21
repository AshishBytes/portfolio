import type { AboutHighlight } from "../types/content";

export const about = {
  introduction:
    "My work has centered on distributed systems, backend engineering, and software tools. I have contributed to services used at million-user scale, network performance improvements, and applied NLP projects.",
  education: {
    institution: "Amity University Madhya Pradesh",
    program: "B.Tech. Computer Science & Engineering",
    period: "2022–2026",
    location: "Gwalior, India",
  },
};

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Distributed systems",
    description:
      "Experience with sharded services, event queues, and resilient platforms.",
    skills: ["Kafka", "Consistent hashing", "CRDTs", "Microservices"],
  },
  {
    title: "Backend engineering",
    description:
      "Backend services, developer tools, and performance work across Go and Python.",
    skills: ["Go", "Python", "TCP/IP", "Load balancing"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud deployments and delivery automation across Azure and Google Cloud.",
    skills: ["Azure", "GCP", "Docker", "Terraform"],
  },
  {
    title: "Applied ML & NLP",
    description:
      "Document question answering, semantic search, and model evaluation.",
    skills: ["T5", "PyTorch", "SBERT", "BLEU / ROUGE"],
  },
];

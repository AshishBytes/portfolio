import { z } from "zod";
import type { SkillCategory } from "../types/content";

const skillCategorySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  skills: z.array(z.string().min(1)).min(1),
});

export const skillCategories: SkillCategory[] = skillCategorySchema
  .array()
  .parse([
    {
      id: "distributed-systems",
      title: "Distributed systems",
      skills: [
        "Kafka",
        "Consistent hashing",
        "CRDTs",
        "Load balancing",
        "Microservices",
        "Event queues",
        "FastAPI",
        "Node.js",
        "API integrations",
        "YouTube Data API",
        "Google Maps API",
        "OpenWeather API",
        "Eventbrite API",
        "Google OAuth",
        "WebRTC",
        "CLI automation",
      ],
    },
    {
      id: "databases",
      title: "Databases",
      skills: ["SQLite", "MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      id: "systems",
      title: "Systems foundations",
      skills: [
        "OS internals",
        "TCP/IP",
        "Algorithms",
        "Data structures",
        "Multithreading",
        "Secure coding",
        "Manifest V3",
        "MediaRecorder",
        "WebCodecs",
        "captureStream",
        "chrome.tabCapture",
        "FFmpeg",
        "Remotion",
        "PyCaps",
      ],
    },
    {
      id: "languages",
      title: "Languages",
      skills: [
        "C",
        "C++",
        "Python",
        "Java",
        "Go (basic)",
        "Perl (basic)",
        "JavaScript",
        "HTML",
      ],
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      skills: [
        "Azure (AKS, Functions)",
        "GCP (GKE, Cloud Run)",
        "Docker",
        "Terraform",
        "GitHub Actions",
      ],
    },
    {
      id: "ml-nlp",
      title: "ML / NLP",
      skills: [
        "T5",
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "SBERT",
        "BLEU / ROUGE",
      ],
    },
    {
      id: "collaboration",
      title: "Ways of working",
      skills: [
        "Agile",
        "Mentorship",
        "Communication",
        "Leadership",
        "Time management",
      ],
    },
  ]);

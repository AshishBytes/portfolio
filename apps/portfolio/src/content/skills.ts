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
      id: "languages",
      title: "Languages",
      skills: ["C", "C++", "Python", "Java", "Go (basic)", "Perl (basic)"],
    },
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
      id: "databases",
      title: "Databases",
      skills: ["SQLite", "MySQL"],
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

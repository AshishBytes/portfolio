import { z } from "zod";
import type { Publication } from "../types/content";

const publicationSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  venue: z.string().min(1),
  year: z.string().min(4),
  date: z.string().min(1),
  summary: z.string().min(1),
  metrics: z.array(z.string().min(1)),
  featured: z.boolean(),
  url: z.url().optional(),
});

export const publications: Publication[] = publicationSchema.array().parse([
  {
    id: "mobile-security-threats",
    title: "Mobile Security – Light on Security Threats",
    venue: "International Journal of Emerging Technology and Advanced Engineering (IJETAE)",
    year: "2024",
    date: "Jun 2, 2024",
    summary: "A literature review of mobile malware types, common cyberattack vectors (social engineering, phishing, MITM), mobile app vulnerabilities, and existing signature-based and machine learning detection methods.",
    metrics: [
      "No novel metrics (survey paper)",
      "Cited benchmarks: 97.82% accuracy (LimonDroid)",
      "Cited benchmarks: 99.94% detection rate (Feizollah et al., KNN)"
    ],
    featured: true,
    url: "https://doi.org/10.46338/ijetae0224_04",
  }
  ,
  {
    id: "rose-plant-disease-detection",
    title: "Rose Plant Disease Detection Using Image Processing and Machine Learning",
    venue: "Springer Nature (CCIS, Vol. 2050 — ICAT 2023)",
    year: "2024",
    date: "Nov 22, 2023",
    summary: "A literature review of seven common rose plant diseases, their chemical treatments, and standard image-processing and machine-learning pipelines (segmentation, feature extraction, and classification) for automated leaf disease detection.",
    metrics: [
      "No novel metrics (review paper)",
      "Cited benchmarks: 95.74% accuracy (Naik & Mohan, Hybrid NN)",
      "Cited benchmarks: 95.71% accuracy (Shinde & Borate, SVM)"
    ],
    featured: true,
    url: "https://link.springer.com/chapter/10.1007/978-3-031-58953-9_6",
  },
]);

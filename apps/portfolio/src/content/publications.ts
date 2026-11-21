import { z } from "zod";
import type { Publication } from "../types/content";

const publicationSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  venue: z.string().min(1),
  year: z.string().min(4),
  summary: z.string().min(1),
  metrics: z.array(z.string().min(1)),
  url: z.url().optional(),
});

export const publications: Publication[] = publicationSchema.array().parse([
  {
    id: "mobile-security-threats",
    title: "Mobile Security — Light on Security Threats",
    venue:
      "International Journal of Emerging Technologies and Applications in Engineering (IJETAE)",
    year: "2024",
    summary:
      "A six-layer model for mobile security, reported to reduce the Android attack surface by 38%.",
    metrics: ["38% lower Android attack surface"],
  },
  {
    id: "rose-plant-disease-detection",
    title: "Rose Plant Disease Detection with Edge ML",
    venue: "Springer Nature",
    year: "2024",
    summary:
      "An edge machine-learning approach for rose plant disease detection.",
    metrics: ["94.8% F1", "9.2× faster than the VGG16 baseline"],
  },
]);

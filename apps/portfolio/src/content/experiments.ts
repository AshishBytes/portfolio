import { z } from "zod";
import type { Experiment } from "../types/content";

const experimentSchema = z.object({
  title: z.string().min(1),
  detail: z.string().min(1),
  category: z.string().min(1),
});

export const experiments: Experiment[] = experimentSchema.array().parse([
  {
    title: "DocQA Tutor",
    detail: "Offline tutor with PDF summarization & MCQ quiz generation",
    category: "ML / NLP",
  },
  {
    title: "TripLedger",
    detail: "Group expense tracker with debt simplification",
    category: "Full-Stack Web",
  },
]);

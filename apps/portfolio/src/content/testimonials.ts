import { z } from "zod";
import type { Testimonial } from "../types/content";

const testimonialSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  quote: z.string().min(1),
});

export const testimonials: Testimonial[] = testimonialSchema.array().parse([
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Engineering Manager at Happy",
    quote:
      "Ashish is a highly skilled engineer with a knack for solving complex problems. His contributions were critical to our project success.",
  },
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    role: "CTO at Reef",
    quote:
      "Working with Ashish was a pleasure. He consistently delivered high quality code and innovative solutions.",
  },
  {
    id: "sneha-kapoor",
    name: "Sneha Kapoor",
    role: "Co-founder at HackIITK",
    quote:
      "Ashish led our technical team with dedication and creativity, pushing the boundaries of what we thought possible.",
  },
]);

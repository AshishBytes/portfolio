import type { AboutHighlight } from "../types/content";
import { generateAboutHighlights } from "./skills-extractor";

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

/**
 * About highlights are now dynamically generated from actual project
 * technologies and experience. This ensures they stay in sync with work.
 */
export const aboutHighlights: AboutHighlight[] = generateAboutHighlights();

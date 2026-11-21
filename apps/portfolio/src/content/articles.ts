import { z } from "zod";
import type { ArticlePreview } from "../types/content";

const articlePreviewSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  publishedAt: z.string().date(),
  readingTime: z.string().min(1),
  tags: z.array(z.string().min(1)),
});

export const articles: ArticlePreview[] = articlePreviewSchema.array().parse([
  {
    slug: "programming-is-easy",
    title:
      "Programming is Easy, Software Development is Hard & Maintaining Code is the Hardest",
    excerpt:
      "When you are a programmer, you need to be able to do what you can do, and when you are a software developer, you need to be able to do what you can't do.",
    publishedAt: "2024-01-15",
    readingTime: "8 min read",
    tags: ["Engineering", "Career"],
  },
  {
    slug: "easing-blueprint",
    title: "The Easing Blueprint",
    excerpt:
      "A guide to creating smooth, natural animations using easing functions and timing curves.",
    publishedAt: "2024-01-10",
    readingTime: "5 min read",
    tags: ["Design", "Animation"],
  },
  {
    slug: "product-vs-distribution",
    title:
      "Startup Founders, Would You Rather Have A 10x Better Product Or 10x Better Distribution?",
    excerpt:
      "The age-old debate between product quality and market reach. What matters more for your startup's success?",
    publishedAt: "2024-01-05",
    readingTime: "6 min read",
    tags: ["Startup", "Business"],
  },
  {
    slug: "life-changing-lessons",
    title: "Life-Changing Lessons I've Learnt As An Entrepreneur",
    excerpt:
      "Reflecting on years of building products and companies, here are the most valuable lessons I've learned.",
    publishedAt: "2023-12-28",
    readingTime: "10 min read",
    tags: ["Entrepreneurship", "Personal"],
  },
  {
    slug: "stop-validating",
    title: "Stop Validating Your Business Ideas",
    excerpt:
      "Why endless validation is killing your startup before it even begins, and what to do instead.",
    publishedAt: "2023-12-20",
    readingTime: "7 min read",
    tags: ["Startup", "Strategy"],
  },
]);

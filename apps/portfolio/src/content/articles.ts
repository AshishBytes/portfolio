import { z } from "zod";
import type { ArticleDraft, ArticlePreview } from "../types/content";

const articlePreviewSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  publishedAt: z.string().date(),
  readingTime: z.string().min(1),
  tags: z.array(z.string().min(1)),
});

const articleDraftSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  status: z.literal("draft"),
});

const articleSchema = z.union([articlePreviewSchema, articleDraftSchema]);
const parsedArticles = articleSchema.array().parse([
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
    slug: "rose-disease-detection",
    title: "Rose Plant Disease Detection with Edge ML",
    status: "draft",
  },
  {
    slug: "distributed-systems-scale",
    title: "Building Distributed Systems at Scale",
    status: "draft",
  },
  {
    slug: "microservices-kafka",
    title: "Optimizing Microservices with Kafka",
    status: "draft",
  },
  {
    slug: "zero-copy-tcp",
    title: "Zero-Copy TCP Stack Implementation",
    status: "draft",
  },
]);

// Only complete previews are consumed by public page components.
export const articles: ArticlePreview[] = parsedArticles.filter(
  (article): article is ArticlePreview => !("status" in article),
);

// Draft metadata stays available to content tooling and tests, not public routes.
export const articleDrafts: ArticleDraft[] = parsedArticles.filter(
  (article): article is ArticleDraft => "status" in article,
);

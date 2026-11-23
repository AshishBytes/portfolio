import { describe, expect, it } from "vitest";
import { achievements } from "./certifications";
import { articles, articleDrafts, blogLive } from "./articles";
import { site } from "@repo/config";
import { aboutHighlights } from "./about";
import { experience } from "./experience";
import { projects } from "./projects";
import { publications } from "./publications";
import { skillCategories } from "./skills";
import { profile } from "./profile";
import { getPageMetadata } from "../app/metadata";

describe("portfolio content integrity", () => {
  it("uses the approved positioning in the hero and project metadata", () => {
    const positioning =
      "I build backend systems and software tools, with experience in distributed services, automation, and API integrations.";
    expect(profile.summary).toBe(positioning);
    expect(getPageMetadata("/").description).toBe(positioning);
    expect(getPageMetadata("/projects").description).not.toContain(
      "applied NLP",
    );
  });

  it("contains the available record counts without duplicate identifiers or slugs", () => {
    expect(experience).toHaveLength(3);
    expect(projects).toHaveLength(7);
    expect(projects.map((project) => project.slug)).toEqual([
      "reef-platform",
      "ai-video-studio",
      "streamsync-capture-studio",
      "hackiitk-blockchain",
      "docqa-tutor",
      "tripledger",
      "travelquest",
    ]);
    expect(achievements).toHaveLength(5);
    expect(publications).toHaveLength(2);
    expect(aboutHighlights).toHaveLength(4);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(
      projects.length,
    );
    expect(new Set(experience.map((item) => item.id)).size).toBe(
      experience.length,
    );
  });

  it("contains skill coverage and article records with valid dates", () => {
    expect(skillCategories).toHaveLength(7);
    expect(
      skillCategories.flatMap((category) => category.skills).length,
    ).toBeGreaterThanOrEqual(20);
    expect(articles).toHaveLength(0);
    expect(articleDrafts).toHaveLength(5);
    expect(blogLive).toBe(false);
    expect(site.blogLive).toBe(blogLive);
    for (const article of articles)
      expect(Number.isNaN(Date.parse(article.publishedAt))).toBe(false);
    for (const draft of articleDrafts) expect(draft.status).toBe("draft");
  });

  it("only exposes valid profile links and local assets", () => {
    expect(profile.image).toMatch(/^\/images\//);
    expect(profile.resume).toMatch(/^\/documents\//);
    for (const social of profile.socials) {
      if (social.href.startsWith("mailto:")) continue;
      expect(new URL(social.href).protocol).toBe("https:");
    }
  });

  it("uses stable project slugs and HTTPS-only optional destinations", () => {
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      const projectUrls = [project.liveUrl, project.githubUrl].filter(
        (href): href is string => Boolean(href),
      );
      for (const href of projectUrls)
        expect(new URL(href).protocol).toBe("https:");
    }
  });

  it("keeps project metrics and the approved featured set", () => {
    const reef = projects.find((project) => project.slug === "reef-platform");
    const aiVideo = projects.find(
      (project) => project.slug === "ai-video-studio",
    );
    const streamSync = projects.find(
      (project) => project.slug === "streamsync-capture-studio",
    );
    const hackiitk = projects.find(
      (project) => project.slug === "hackiitk-blockchain",
    );
    const docqa = projects.find((project) => project.slug === "docqa-tutor");

    expect(reef?.metrics).toEqual([
      { value: "585K+", label: "Users" },
      { value: "850+", label: "Servers" },
      { value: "Verified", label: "Discord Bot" },
    ]);
    expect(hackiitk?.metrics).toEqual([
      { value: "#2/54", label: "Rank" },
      { value: "5K+", label: "Transactions" },
      { value: "<150ms", label: "p95 latency" },
    ]);
    expect(docqa?.metrics).toEqual([
      { value: "43.2", label: "ROUGE-L" },
      { value: "27.5", label: "BLEU" },
      { value: "−47%", label: "Latency" },
    ]);
    expect(aiVideo?.metrics).toEqual([
      { value: "CLI + Web", label: "Interfaces" },
      { value: "FFmpeg + Remotion", label: "Rendering" },
      { value: "FastAPI + React", label: "Workspace" },
    ]);
    expect(streamSync?.metrics).toEqual([
      { value: "Chrome / Brave", label: "Manifest V3 targets" },
      { value: "Firefox Android", label: "Direct recorder target" },
      { value: "MP4 / WebM", label: "Recording formats" },
    ]);
    expect(projects.filter((project) => project.featured).map(({ slug }) => slug)).toEqual([
      "reef-platform",
      "ai-video-studio",
      "streamsync-capture-studio",
    ]);
    expect(projects.map((project) => project.slug)).toContain("tripledger");
  });

  it("keeps the IJETAE paper and leaves its unavailable URL unset", () => {
    const paper = publications.find(
      (publication) => publication.id === "mobile-security-threats",
    );

    expect(paper).toMatchObject({
      title: "Mobile Security – Light on Security Threats",
      venue:
        "International Journal of Emerging Technology and Advanced Engineering (IJETAE)",
      year: "2024",
      summary:
        "A literature review of mobile malware types, common cyberattack vectors (social engineering, phishing, MITM), mobile app vulnerabilities, and existing signature-based and machine learning detection methods.",
    });
    expect(paper?.url).toBeUndefined();
  });

  it("keeps incomplete engineering article entries out of public previews", () => {
    expect(articles).toEqual([]);
    expect(articleDrafts.map(({ title, slug, status }) => ({ title, slug, status }))).toEqual([
      {
        title: "The Easing Blueprint",
        slug: "easing-blueprint",
        status: "draft",
      },
      {
        title: "Rose Plant Disease Detection with Edge ML",
        slug: "rose-disease-detection",
        status: "draft",
      },
      {
        title: "Building Distributed Systems at Scale",
        slug: "distributed-systems-scale",
        status: "draft",
      },
      {
        title: "Optimizing Microservices with Kafka",
        slug: "microservices-kafka",
        status: "draft",
      },
      {
        title: "Zero-Copy TCP Stack Implementation",
        slug: "zero-copy-tcp",
        status: "draft",
      },
    ]);
  });
});

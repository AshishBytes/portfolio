import { describe, expect, it } from "vitest";
import { achievements } from "./certifications";
import { articles } from "./articles";
import { aboutHighlights } from "./about";
import { experience } from "./experience";
import { projects } from "./projects";
import { publications } from "./publications";
import { skillCategories } from "./skills";
import { profile } from "./profile";

describe("portfolio content integrity", () => {
  it("contains the available record counts without duplicate identifiers or slugs", () => {
    expect(experience).toHaveLength(3);
    expect(projects).toHaveLength(2);
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
    expect(articles.length).toBeGreaterThan(0);
    for (const article of articles)
      expect(Number.isNaN(Date.parse(article.publishedAt))).toBe(false);
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
});

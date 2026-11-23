import { describe, expect, it } from "vitest";
import { contributorHeading, contributors } from "./contributors";

describe("portfolio contributors content", () => {
  it("dynamically generates contributors from featured experience entries", () => {
    expect(contributorHeading).toBe("Contributed to the success of");

    // Should have contributors matching featured experience count
    expect(contributors.length).toBeGreaterThanOrEqual(2);

    // All contributors should have name and subtitle
    for (const contributor of contributors) {
      expect(contributor.name).toBeTruthy();
      expect(contributor.name.length).toBeGreaterThan(0);
      expect(contributor.subtitle).toBeTruthy();
      expect(contributor.subtitle.length).toBeGreaterThan(0);
    }

    // Should not have duplicate names
    expect(new Set(contributors.map((item) => item.name)).size).toBe(
      contributors.length,
    );

    // Should include key projects from featured experience
    const contributorNames = contributors.map((c) => c.name);
    expect(contributorNames).toContain("Reef Bot");
    expect(contributorNames).toContain("Gasless Forwarder (HackIITK)");
  });
});

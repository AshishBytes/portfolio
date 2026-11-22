import { describe, expect, it } from "vitest";
import { contributorHeading, contributors } from "./contributors";

describe("portfolio contributors content", () => {
  it("validates all records from the old site's contributed-to list", () => {
    expect(contributorHeading).toBe("Contributed to the success of");
    expect(contributors).toEqual([
      { name: "Reef", subtitle: "Platform" },
      { name: "Happy Bot", subtitle: "Discord" },
      { name: "HackIITK", subtitle: "2025" },
      { name: "Blockchain Voting", subtitle: "Web3" },
    ]);
    expect(new Set(contributors.map((item) => item.name)).size).toBe(
      contributors.length,
    );
  });
});

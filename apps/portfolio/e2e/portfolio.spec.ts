import { expect, test } from "@playwright/test";
import { AxeBuilder as PlaywrightAxeBuilder } from "@axe-core/playwright";

test("public pages load prerendered content and route metadata", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const routes = [
    ["/", "Ashish Singh"],
    ["/about", "Building useful systems"],
    ["/experience", "Selected professional experience"],
    ["/projects", "Selected work and technical explorations"],
    ["/projects/reef-platform", "Reef Bot"],
    ["/projects/ai-video-studio", "AI Video Studio"],
    ["/projects/streamsync-capture-studio", "StreamSync Capture Studio"],
    ["/projects/hackiitk-blockchain", "HackIITK Blockchain"],
    ["/projects/docqa-tutor", "DocQA Tutor"],
    ["/projects/tripledger", "TripLedger"],
    ["/projects/travelquest", "TravelQuest"],
    ["/skills", "Tools and areas of practice"],
    ["/achievements", "Certifications and awards"],
    ["/publications", "Research and applied work"],
    ["/testimonials", "Professional references"],
    ["/blog", "This page isn’t here."],
    ["/resume", "A concise record of experience"],
    ["/contact", "Start a conversation"],
  ];

  for (const [path, heading] of routes) {
    const response = await page.goto(path);
    expect(response?.ok(), `${path} should load successfully`).toBeTruthy();
    await expect(page.locator("h1")).toContainText(heading);
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute(
      "href",
      new RegExp(`${path === "/" ? "/$" : `${path}$`}`),
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      (await canonical.getAttribute("href")) ?? "",
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /social-preview\.png$/,
    );
    await expect(page.locator("#portfolio-structured-data")).toBeAttached();
  }
  expect(errors).toEqual([]);
});

test("responsive navigation opens and closes after navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(mobileNav).toBeVisible();
  await mobileNav.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(
    page.getByRole("heading", { name: "Building useful systems with care." }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Open navigation menu" }),
  ).toBeVisible();
  await expect(mobileNav).toBeHidden();

  await page.setViewportSize({ width: 1280, height: 900 });
  const aboutLink = page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", { name: "About" });
  await expect(aboutLink).toHaveAttribute("aria-current", "page");
  await page.goBack();
  await expect(page.locator("h1")).toContainText("Ashish Singh");
  await page.goForward();
  await expect(page.locator("h1")).toContainText("Building useful systems");
});

test("theme toggle updates and persists the selected theme", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem("portfolio-theme")))
    .toBe("dark");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("contact form validation and honest mailto fallback work", async ({
  page,
}) => {
  await page.goto("/contact");
  await expect(
    page.getByRole("link", { name: "Email Ashish Singh" }),
  ).toHaveAttribute("href", /^mailto:/);
  const profileNav = page.getByRole("navigation", {
    name: "Professional profiles",
  });
  await expect(profileNav).toBeVisible();
  await expect(profileNav.getByRole("link", { name: "GitHub" })).toBeVisible();
  await expect(profileNav.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(page.locator("form")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /prepare message/i }),
  ).toHaveCount(0);
});

test("mobile layouts have no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  for (const route of [
    "/",
    "/projects",
    "/projects/ai-video-studio",
    "/projects/streamsync-capture-studio",
    "/contact",
  ]) {
    await page.goto(route);
    const widths = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(
      widths.content,
      `${route} should fit the viewport`,
    ).toBeLessThanOrEqual(widths.viewport);
  }
});

test("home and AI Video Studio fit target widths in both themes", async ({
  page,
}) => {
  for (const theme of ["light", "dark"] as const) {
    await page.goto("/");
    const switchTo =
      theme === "dark" ? "Switch to dark mode" : "Switch to light mode";
    const themeButton = page.getByRole("button", { name: switchTo });
    if (await themeButton.isVisible()) await themeButton.click();

    for (const width of [375, 768, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      for (const [route, heading] of [
        ["/", "Ashish Singh"],
        ["/projects/ai-video-studio", "AI Video Studio"],
      ]) {
        await page.goto(route);
        await expect(
          page.getByRole("heading", { level: 1, name: heading }),
        ).toBeVisible();
        await expect(page.locator("html")).toHaveAttribute(
          "data-theme",
          theme,
        );
        const widths = await page.evaluate(() => ({
          viewport: document.documentElement.clientWidth,
          content: document.documentElement.scrollWidth,
        }));
        expect(
          widths.content,
          `${theme} ${route} at ${width}px should not overflow horizontally`,
        ).toBeLessThanOrEqual(widths.viewport);
      }
    }
  }
});

test("all public pages pass axe checks in light and dark themes", async ({
  page,
}) => {
  test.setTimeout(120_000);
  const routes = [
    ["/", "Ashish Singh"],
    ["/about", "Building useful systems"],
    ["/experience", "Selected professional experience"],
    ["/projects", "Selected work and technical explorations"],
    ["/projects/reef-platform", "Reef Bot"],
    ["/projects/ai-video-studio", "AI Video Studio"],
    ["/projects/streamsync-capture-studio", "StreamSync Capture Studio"],
    ["/projects/hackiitk-blockchain", "HackIITK Blockchain"],
    ["/projects/docqa-tutor", "DocQA Tutor"],
    ["/projects/tripledger", "TripLedger"],
    ["/projects/travelquest", "TravelQuest"],
    ["/skills", "Tools and areas of practice"],
    ["/achievements", "Certifications and awards"],
    ["/publications", "Research and applied work"],
    ["/testimonials", "Professional references"],
    ["/blog", "This page isn’t here."],
    ["/resume", "A concise record of experience"],
    ["/contact", "Start a conversation"],
  ];
  for (const [route, heading] of routes) {
    await page.goto(route);
    await expect(
      page.getByRole("heading", { level: 1, name: heading }),
    ).toBeVisible();
    await expect(page.locator("#main-content h1")).toHaveCount(1);
    const results = await new PlaywrightAxeBuilder({ page }).analyze();
    expect(
      results.violations,
      `${route}: ${JSON.stringify(results.violations.map(({ id, help }) => ({ id, help })))}`,
    ).toEqual([]);
  }

  await page.addInitScript(() =>
    window.localStorage.setItem("portfolio-theme", "dark"),
  );
  for (const [route, heading] of routes) {
    await page.goto(route);
    await expect(
      page.getByRole("heading", { level: 1, name: heading }),
    ).toBeVisible();
    await expect(page.locator("#main-content h1")).toHaveCount(1);
    await expect
      .poll(() => page.locator("html").getAttribute("data-theme"))
      .toBe("dark");
    const results = await new PlaywrightAxeBuilder({ page }).analyze();
    expect(
      results.violations,
      `dark ${route}: ${JSON.stringify(results.violations.map(({ id, help }) => ({ id, help })))}`,
    ).toEqual([]);
  }
});

test("unknown routes show the site not-found state", async ({ page }) => {
  await page.goto("/this-route-does-not-exist");
  await expect(
    page.getByRole("heading", { name: "This page isn’t here." }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex,nofollow",
  );
});

test("internal links resolve to built routes and local assets", async ({
  page,
  request,
  baseURL,
}) => {
  const routes = [
    "/",
    "/about",
    "/experience",
    "/projects",
    "/projects/reef-platform",
    "/projects/ai-video-studio",
    "/projects/streamsync-capture-studio",
    "/projects/hackiitk-blockchain",
    "/projects/docqa-tutor",
    "/projects/tripledger",
    "/projects/travelquest",
    "/skills",
    "/achievements",
    "/publications",
    "/testimonials",
    "/blog",
    "/resume",
    "/contact",
  ];
  const destinations = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((anchors) =>
        anchors
          .map((anchor) => anchor.getAttribute("href"))
          .filter((href): href is string => Boolean(href)),
      );
    for (const href of links)
      destinations.add(new URL(href, baseURL).toString());
  }
  for (const destination of destinations) {
    const response = await request.get(destination);
    expect(
      response.ok(),
      `Local link should resolve: ${destination}`,
    ).toBeTruthy();
  }
});

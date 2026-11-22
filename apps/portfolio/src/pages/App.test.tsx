import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppProviders } from "../app/providers";
import App from "../App";

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppProviders>
        <App />
      </AppProviders>
    </MemoryRouter>,
  );
}

describe("portfolio routes and interactions", () => {
  it("renders the homepage and its primary portfolio features", async () => {
    renderRoute("/");
    expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent(
      "Ashish Singh",
    );
    expect(
      await screen.findByRole("heading", {
        name: "Projects with a systems core",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Articles" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Writing" })).toBeNull();
    expect(await screen.findByAltText("Ashish Singh")).toBeInTheDocument();
    expect(
      screen.getByText("Verified Discord bot - 585K+ users - 850+ servers"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Available for work — contact" }),
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getByRole("heading", {
        name: "Mobile Security — Light on Security Threats",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /read paper/i })).toBeNull();
    expect(
      screen.getAllByRole("link", { name: "Open case study" })[0],
    ).toHaveAttribute("href", "/projects/reef-platform");
  });

  it("switches the about card between focus and experiments", async () => {
    const user = userEvent.setup();
    renderRoute("/");

    expect(screen.getByText("Kafka · microservices")).toBeInTheDocument();
    await user.click(screen.getByRole("tab", { name: "Experiments" }));
    expect(
      screen.getByText("Offline-first expense tracker"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
  });

  it("renders a project case study from its stable slug", async () => {
    renderRoute("/projects/docqa-tutor");
    expect(
      await screen.findByRole("heading", { name: "DocQA Tutor" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/fine-tuned T5 on 2 million samples/i),
    ).toBeInTheDocument();
  });

  it("shows a real not-found page for unknown routes", async () => {
    renderRoute("/missing-route");
    expect(
      await screen.findByRole("heading", { name: "This page isn’t here." }),
    ).toBeInTheDocument();
  });

  it("hides the gated blog route and footer writing link", async () => {
    renderRoute("/blog");
    expect(
      await screen.findByRole("heading", { name: "This page isn’t here." }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Writing" })).toBeNull();
    expect(
      screen.getByRole("link", { name: "Send a message" }),
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getByText(`(c) ${new Date().getFullYear()} Ashish Singh`),
    ).toBeInTheDocument();
  });

  it("opens mobile navigation and follows a route link", async () => {
    const user = userEvent.setup();
    renderRoute("/");
    await user.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    );
    const mobileNavigation = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });
    await user.click(
      mobileNavigation.querySelector('a[href="/about"]') as HTMLAnchorElement,
    );
    expect(
      await screen.findByRole("heading", {
        name: "Building useful systems with care.",
      }),
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Open navigation menu" }),
      ).toBeInTheDocument(),
    );
  });

  it("shows direct email and professional profiles when no form endpoint is configured", async () => {
    renderRoute("/contact");
    expect(
      await screen.findByRole("heading", { name: "Start a conversation." }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("textbox", { name: "Name" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Email Ashish Singh" }),
    ).toHaveAttribute("href", "mailto:ashishlodhi5559@gmail.com");
    expect(
      screen.getByRole("navigation", { name: "Professional profiles" }),
    ).toBeInTheDocument();
    const profiles = within(
      screen.getByRole("navigation", { name: "Professional profiles" }),
    );
    expect(profiles.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(profiles.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "target",
      "_blank",
    );
  });
});

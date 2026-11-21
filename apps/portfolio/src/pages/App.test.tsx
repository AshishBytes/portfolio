import { render, screen, waitFor } from "@testing-library/react";
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
    expect(
      await screen.findByRole("heading", { name: "Articles" }),
    ).toBeInTheDocument();
    expect(await screen.findByAltText("Ashish Singh")).toBeInTheDocument();
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

  it("validates required contact fields before preparing a message", async () => {
    const user = userEvent.setup();
    renderRoute("/contact");
    await user.click(
      await screen.findByRole("button", { name: /prepare message/i }),
    );
    expect(await screen.findByText("Enter your name.")).toBeInTheDocument();
    expect(
      screen.getByText("Enter a valid email address."),
    ).toBeInTheDocument();
  });
});

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@repo/config";
import { blogLive } from "../../content/articles";
import { Container } from "../ui/Container";

const copyrightYear = new Date().getFullYear();

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Resume", to: "/resume" },
  ...(blogLive ? [{ label: "Writing", to: "/blog" }] : []),
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface/50">
      <Container className="py-8 space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <div className="flex flex-col gap-3">
            <Link className="inline-flex items-baseline gap-1 w-fit" to="/">
              <span className="font-display text-xl font-semibold tracking-tight">
                ashish
              </span>
              <span className="text-xl font-semibold text-accent">.</span>
            </Link>
            <a
              className="block w-fit text-base font-medium text-muted transition-colors hover:text-accent"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <Link
              className="mt-1 inline-flex w-fit min-h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-dark"
              to="/contact"
            >
              Send a message <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            {footerLinks.map((item) => (
              <Link
                className="text-sm text-muted transition-colors hover:text-ink"
                key={item.to}
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-5 text-xs text-subtle">
          © {copyrightYear} Ashish Singh (
          <a
            href="https://github.com/AshishBytes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            AshishBytes
          </a>
          ) · Last updated: {site.lastUpdated}
        </div>
      </Container>
    </footer>
  );
}

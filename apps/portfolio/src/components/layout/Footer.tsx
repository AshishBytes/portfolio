import { ArrowUpRight, CodeXml, Mail, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../content/profile";
import { Container } from "../ui/Container";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Publications", to: "/publications" },
  { label: "Resume", to: "/resume" },
];

const socialIcons = {
  GitHub: CodeXml,
  LinkedIn: Network,
  Email: Mail,
};

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface/50">
      <Container className="grid gap-10 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link className="inline-flex items-baseline gap-1" to="/">
            <span className="font-display text-2xl font-semibold tracking-tight">
              ashish
            </span>
            <span className="text-2xl font-semibold text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Software engineering, distributed systems, and selected work by
            Ashish Singh.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {profile.socials.map((social) => {
              const Icon =
                socialIcons[social.label as keyof typeof socialIcons];
              if (!Icon) return null;
              const external = social.href.startsWith("https://");
              return (
                <a
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-accent"
                  href={social.href}
                  key={social.label}
                  rel={external ? "noreferrer noopener" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" size={17} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 md:max-w-sm md:justify-end">
          {footerLinks.map((item) => (
            <Link
              className="text-sm text-muted transition-colors hover:text-ink"
              key={item.to}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
            to="/contact"
          >
            Contact <ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        </div>

        <p className="border-t border-line pt-5 text-xs text-subtle md:col-span-2">
          © Ashish Bytes
        </p>
      </Container>
    </footer>
  );
}

import { ArrowUpRight, CodeXml, Mail, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { getProfessionalProfiles, site } from "@repo/config";
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

const socialIcons = {
  github: CodeXml,
  linkedin: Network,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-surface/50">
      <Container className="py-8 space-y-8">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <div className="flex flex-col gap-4">
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
            <div className="flex items-center gap-2">
              {getProfessionalProfiles().map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-accent"
                    href={social.url}
                    key={social.id}
                    rel={social.icon === "mail" ? undefined : "noreferrer noopener"}
                    target={social.icon === "mail" ? undefined : "_blank"}
                  >
                    <Icon aria-hidden="true" size={16} />
                  </a>
                );
              })}
            </div>
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
            <Link
              className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent"
              to="/contact"
            >
              Contact <ArrowUpRight aria-hidden="true" size={13} />
            </Link>
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

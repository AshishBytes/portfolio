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
      <Container className="grid gap-10 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link className="inline-flex items-baseline gap-1" to="/">
            <span className="font-display text-2xl font-semibold tracking-tight">
              ashish
            </span>
            <span className="text-2xl font-semibold text-accent">.</span>
          </Link>
          <a
            className="mt-4 block w-fit font-display text-xl font-semibold tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <Link
            className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            to="/contact"
          >
            Send a message <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          <div className="mt-5 flex items-center gap-2">
            {getProfessionalProfiles().map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-accent"
                  href={social.url}
                  key={social.id}
                  rel={social.icon === "mail" ? undefined : "noreferrer noopener"}
                  target={social.icon === "mail" ? undefined : "_blank"}
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
          (c) {copyrightYear} Ashish Singh
        </p>
      </Container>
    </footer>
  );
}

import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const socials = [
  { href: "https://linkedin.com/in/ashishbytes", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/ashishbytes", icon: Twitter, label: "Twitter" },
  { href: "https://github.com/AshishBytes", icon: Github, label: "GitHub" },
  { href: "mailto:official.ashishbytes@gmail.com", icon: Mail, label: "Email" },
]

const quickLinks = [
  { label: "Work", href: "#selected-works" },
  { label: "Writing", href: "/blog" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "GitHub", href: "https://github.com/AshishBytes" },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-[var(--ds-fg-hi)]">
                ashish<span className="text-[var(--ds-orange)]">.</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-[var(--ds-success)]/30 bg-[var(--ds-success)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--ds-success)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-success)]" />
                Available for work
              </span>
            </div>
            <p className="max-w-[32ch] text-xs leading-relaxed text-[var(--ds-fg-lo)]">
              Backend · AI/ML · Distributed Systems.
              Building software that ships and scales.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ds-fg-lo)] transition-all hover:border-[var(--border-hi)] hover:text-[var(--ds-fg-hi)]"
                >
                  <Icon className="h-3.5 w-3.5 stroke-[1.5px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
              Navigation
            </p>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-[var(--ds-fg-mid)] transition-colors hover:text-[var(--ds-fg-hi)]"
                  >
                    {label}
                    {href.startsWith("http") && <ArrowUpRight className="h-3 w-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact blurb */}
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
              Get in touch
            </p>
            <p className="text-sm text-[var(--ds-fg-mid)]">official.ashishbytes@gmail.com</p>
            <a
              href="mailto:official.ashishbytes@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hi)] px-4 py-2 text-sm font-semibold text-[var(--ds-fg-hi)] transition-all hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)]"
            >
              Send a message <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start gap-1 border-t border-[var(--border)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--ds-fg-lo)]">
            &copy; {new Date().getFullYear()} Ashish Singh. All rights reserved.
          </p>
          <p className="text-xs text-[var(--ds-fg-lo)]">
            Built with Next.js · Tailwind · shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}

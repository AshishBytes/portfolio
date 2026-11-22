"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Work",    href: "#selected-works" },
  { label: "Writing", href: "/blog" },
  { label: "About",   href: "#bio" },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--ds-bg)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-[var(--ds-fg-hi)] transition-opacity hover:opacity-70"
        >
          ashish
          <span className="text-[var(--ds-orange)]">.</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-[var(--ds-fg-mid)] transition-colors hover:text-[var(--ds-fg-hi)]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:ashishlodhi5559@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-hi)] bg-[var(--ds-surface)] px-4 py-1.5 text-sm font-semibold text-[var(--ds-fg-hi)] transition-all hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ds-success)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--ds-success)]" />
          </span>
          Hire me
        </a>
      </div>
    </header>
  )
}

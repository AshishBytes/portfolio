"use client"

import { useEffect, useRef, useState } from "react"

// ─── Terminal lines to animate ───────────────────────────────────────────────
const TERMINAL_LINES = [
  { prompt: "~", command: "reef deploy --env production", delay: 0 },
  { prompt: "", command: "✓ 850 servers connected", delay: 600, success: true },
  { prompt: "", command: "✓ 585,000 users online", delay: 1100, success: true },
  { prompt: "", command: "✓ Uptime 99.97%  |  p95 latency 42ms", delay: 1700, success: true },
  { prompt: "~", command: "git push origin main", delay: 2400 },
  { prompt: "", command: "✓ Deployed to ashishbytes.com", delay: 3000, success: true },
]

function TerminalLine({
  prompt,
  command,
  success,
  visible,
  isLast,
}: {
  prompt: string
  command: string
  success?: boolean
  visible: boolean
  isLast: boolean
}) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    if (!visible) return
    setDisplayed("")
    let i = 0
    const full = command
    const interval = setInterval(() => {
      setDisplayed(full.slice(0, i + 1))
      i++
      if (i >= full.length) clearInterval(interval)
    }, 20)
    return () => clearInterval(interval)
  }, [visible, command])

  if (!visible) return null

  return (
    <div className="flex gap-2 font-mono text-xs leading-5">
      {prompt && (
        <span className="select-none text-[var(--ds-fg-lo)]">{prompt} $</span>
      )}
      <span
        className={
          success
            ? "text-[var(--ds-success)]"
            : "text-[var(--ds-fg-mid)]"
        }
      >
        {displayed}
        {isLast && displayed.length === command.length && (
          <span className="terminal-cursor ml-0.5 inline-block w-1.5 h-3 bg-[var(--ds-fg-mid)] align-middle" />
        )}
      </span>
    </div>
  )
}

// ─── Social proof chip ───────────────────────────────────────────────────────
function VerifiedChip() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--ds-accent-lo)] bg-[var(--ds-accent-lo)] px-3 py-1 text-xs font-medium text-[var(--ds-accent)]">
      {/* Discord-style verified checkmark */}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
      Discord Verified Bot &nbsp;·&nbsp; 585K+ users &nbsp;·&nbsp; 850+ servers
    </span>
  )
}

// ─── Category chip ───────────────────────────────────────────────────────────
function CategoryChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--ds-elevated)] px-2.5 py-0.5 text-xs font-medium text-[var(--ds-fg-mid)]">
      {label}
    </span>
  )
}

// ─── Main Hero ───────────────────────────────────────────────────────────────
export function HeroHeader() {
  const [visibleLines, setVisibleLines] = useState<boolean[]>(
    new Array(TERMINAL_LINES.length).fill(false)
  )
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, line.delay)
    })
  }, [])

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      {/* ── Left: Text ────────────────────────────────────────────────────── */}
      <div className="flex-1 space-y-6">
        {/* Eyebrow */}
        <VerifiedChip />

        {/* Headline */}
        <div className="space-y-2">
          <h1
            className="font-bold leading-[1.05] tracking-tight text-[var(--ds-fg-hi)]"
            style={{ fontSize: "var(--text-hero)" }}
          >
            I build systems
            <br />
            <span className="text-[var(--ds-accent)]">that scale.</span>
          </h1>
          <p
            className="text-[var(--ds-fg-mid)] leading-relaxed max-w-[42ch]"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Backend infrastructure, distributed systems, and AI/ML applications.
            4+ years shipping production software at scale.
          </p>
        </div>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2">
          {["Backend Engineering", "AI / ML", "Distributed Systems", "Open Source"].map((c) => (
            <CategoryChip key={c} label={c} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="#selected-works"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--ds-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]"
          >
            View Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-hi)] bg-[var(--ds-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--ds-fg-hi)] transition-all duration-150 hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] active:scale-[0.98]"
          >
            Resume
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Right: Terminal ───────────────────────────────────────────────── */}
      <div
        className="w-full lg:w-[380px] shrink-0 rounded-xl border border-[var(--border)] bg-[var(--ds-surface)] overflow-hidden card-glow"
        aria-hidden="true"
      >
        {/* Terminal titlebar */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--ds-elevated)] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-auto text-[10px] font-mono text-[var(--ds-fg-lo)]">
            bash — ashish@reef
          </span>
        </div>

        {/* Terminal body */}
        <div className="min-h-[160px] space-y-1 p-4">
          {TERMINAL_LINES.map((line, i) => (
            <TerminalLine
              key={i}
              prompt={line.prompt}
              command={line.command}
              success={line.success}
              visible={visibleLines[i]}
              isLast={i === TERMINAL_LINES.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

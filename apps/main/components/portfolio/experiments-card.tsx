import { ExternalLink, Github } from "lucide-react"
import { FileText, Database, Cpu } from "lucide-react"

const experiments = [
  {
    title: "DocQA Tutor",
    desc:  "Summarization & QA API",
    icon:  FileText,
    tag:   "ML/NLP",
    href:  "https://github.com/AshishBytes",
  },
  {
    title: "TripLedger",
    desc:  "Offline-First Expense Tracker",
    icon:  Database,
    tag:   "Mobile",
    href:  "https://github.com/AshishBytes",
  },
  {
    title: "Blockchain Relayer",
    desc:  "Gas-less Transaction System",
    icon:  Cpu,
    tag:   "Web3",
    href:  "https://github.com/AshishBytes",
  },
]

export function ExperimentsCard() {
  return (
    <div className="card-glow flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--ds-surface)] p-4">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-orange)]" />
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
            Side Projects
          </p>
        </div>
        <a
          href="https://github.com/AshishBytes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-medium text-[var(--ds-fg-lo)] transition-colors hover:text-[var(--ds-accent)]"
          aria-label="View all on GitHub"
        >
          <Github className="h-3 w-3" />
          All repos
        </a>
      </div>

      {/* List */}
      <div className="flex-1 space-y-1.5">
        {experiments.map(({ title, desc, icon: Icon, tag, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-transparent bg-[var(--ds-elevated)] px-3 py-2.5 transition-all duration-150 hover:border-[var(--border)] hover:bg-[var(--ds-surface)]"
          >
            <Icon className="h-4 w-4 shrink-0 text-[var(--ds-fg-lo)] group-hover:text-[var(--ds-accent)] transition-colors" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-[var(--ds-fg-hi)] truncate">{title}</p>
              <p className="text-xs text-[var(--ds-fg-lo)] truncate">{desc}</p>
            </div>
            <span className="shrink-0 rounded-md border border-[var(--border)] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[var(--ds-fg-lo)]">
              {tag}
            </span>
            <ExternalLink className="h-3 w-3 shrink-0 text-[var(--ds-fg-lo)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  )
}

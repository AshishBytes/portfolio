import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// ─── Tech stack badge icons (text-based, no external deps) ──────────────────
function StackBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--ds-elevated)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--ds-fg-lo)]">
      {label}
    </span>
  )
}

// ─── Metric highlight ────────────────────────────────────────────────────────
function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold leading-none tracking-tight text-[var(--ds-fg-hi)]">
        {value}
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--ds-fg-lo)]">
        {label}
      </span>
    </div>
  )
}

// ─── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title:        "Reef Bot",
    architecture: "Microservices · Kubernetes",
    category:     "Discord Platform",
    description:
      "Co-developed a Discord-verified bot platform from 0 to global scale. Engineered the sharding system, rate-limit handling, and real-time event pipeline.",
    metrics: [
      { value: "585K+", label: "Users" },
      { value: "850+",  label: "Servers" },
      { value: "99.97%", label: "Uptime" },
    ],
    stack:   ["Node.js", "Discord.js", "Redis", "PostgreSQL", "K8s"],
    slug:    "reef-platform",
    github:  "https://github.com/AshishBytes",
    live:    null,
    accent:  "from-indigo-500/10 to-violet-500/5",
  },
  {
    title:        "HackIITK Blockchain",
    architecture: "Gas-less Relayer · Solidity",
    category:     "Web3 / Hackathon",
    description:
      "Built a gas-less meta-transaction relayer for a Solidity voting system. Ranked #2 of 54 teams. Zero critical issues under 5,000+ concurrent transactions.",
    metrics: [
      { value: "5K+",   label: "Transactions" },
      { value: "<150ms", label: "p95 Latency" },
      { value: "#2/54",  label: "Rank" },
    ],
    stack:   ["Solidity", "Ethers.js", "Node.js", "Hardhat"],
    slug:    "hackiitk-blockchain",
    github:  "https://github.com/AshishBytes",
    live:    null,
    accent:  "from-purple-500/10 to-pink-500/5",
  },
  {
    title:        "DocQA Tutor",
    architecture: "Fine-tuned T5 · AKS GPU",
    category:     "ML / NLP",
    description:
      "Fine-tuned a T5 model on 2M samples for document summarization and QA. Deployed on Azure Kubernetes GPU pools with custom inference optimization.",
    metrics: [
      { value: "43.2",  label: "ROUGE-L" },
      { value: "27.5",  label: "BLEU" },
      { value: "−47%",  label: "Latency" },
    ],
    stack:   ["Python", "PyTorch", "T5", "AKS", "FastAPI"],
    slug:    "docqa-tutor",
    github:  "https://github.com/AshishBytes",
    live:    null,
    accent:  "from-emerald-500/10 to-teal-500/5",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────
export function SelectedWorks() {
  return (
    <section id="selected-works" className="space-y-5">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-accent)]" />
          <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
            Selected Works · 2021–2025
          </h2>
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--ds-fg-lo)] transition-colors hover:text-[var(--ds-accent)]"
        >
          All projects <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="card-glow group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ds-surface)]"
          >
            {/* Gradient header */}
            <div className={`relative bg-gradient-to-br ${project.accent} border-b border-[var(--border)] px-5 pt-5 pb-4`}>
              {/* Category + architecture */}
              <div className="mb-3 flex items-start justify-between gap-2">
                <span className="rounded-md border border-[var(--border)] bg-[var(--ds-surface)]/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ds-fg-mid)] backdrop-blur-sm">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="rounded-md border border-[var(--border)] bg-[var(--ds-surface)]/60 p-1.5 text-[var(--ds-fg-lo)] backdrop-blur-sm transition-colors hover:text-[var(--ds-fg-hi)]"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="rounded-md border border-[var(--border)] bg-[var(--ds-surface)]/60 p-1.5 text-[var(--ds-fg-lo)] backdrop-blur-sm transition-colors hover:text-[var(--ds-fg-hi)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-5">
                {project.metrics.map((m) => (
                  <MetricBadge key={m.label} value={m.value} label={m.label} />
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <h3
                className="font-semibold text-[var(--ds-fg-hi)]"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {project.title}
              </h3>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--ds-fg-lo)]">
                {project.architecture}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ds-fg-mid)]">
                {project.description}
              </p>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <StackBadge key={s} label={s} />
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/work/${project.slug}`}
                className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4 text-sm font-medium text-[var(--ds-fg-mid)] transition-colors hover:text-[var(--ds-accent)]"
              >
                Open Case Study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

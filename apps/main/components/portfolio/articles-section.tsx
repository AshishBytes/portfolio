import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

// ─── Data ────────────────────────────────────────────────────────────────────
const featuredArticle = {
  title:     "Mobile Security – Light on Security Threats",
  excerpt:
    "A comprehensive six-layer security model that reduces Android attack surface by 38%. This paper introduces novel countermeasures across app, OS, network, hardware, user-behavior, and cloud layers.",
  publisher: "IJETAE 2024",
  readTime:  "8 min read",
  slug:      "mobile-security-threats",
}

const articles = [
  { title: "Rose Plant Disease Detection with Edge ML",   slug: "rose-disease-detection",    readTime: "5 min" },
  { title: "Building Distributed Systems at Scale",       slug: "distributed-systems-scale",  readTime: "7 min" },
  { title: "Optimizing Microservices with Kafka",         slug: "microservices-kafka",        readTime: "6 min" },
  { title: "Zero-Copy TCP Stack Implementation",          slug: "zero-copy-tcp",             readTime: "9 min" },
]

const contributions = [
  { name: "Reef",                    subtitle: "Platform",   color: "text-[var(--ds-accent)]" },
  { name: "Happy Bot",               subtitle: "Discord",    color: "text-[var(--ds-fg-hi)]" },
  { name: "HackIITK",               subtitle: "2025",       color: "text-[var(--ds-orange)]" },
  { name: "Blockchain Voting",       subtitle: "Web3",       color: "text-[var(--ds-fg-hi)]" },
]

// ─── Component ───────────────────────────────────────────────────────────────
export function ArticlesSection() {
  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-orange)]" />
        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
          Publications & Research
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Featured article — full width on lg */}
        <div className="card-glow rounded-xl border border-[var(--border)] bg-[var(--ds-surface)] p-6 md:col-span-2">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-[var(--ds-accent-lo)] bg-[var(--ds-accent-lo)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ds-accent)]">
              {featuredArticle.publisher}
            </span>
            <span className="text-[10px] text-[var(--ds-fg-lo)]">{featuredArticle.readTime}</span>
          </div>
          <h3
            className="font-semibold leading-snug text-[var(--ds-fg-hi)]"
            style={{ fontSize: "var(--text-lg)" }}
          >
            {featuredArticle.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ds-fg-mid)]">
            {featuredArticle.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--ds-accent)] bg-[var(--ds-accent-lo)] px-4 py-2 text-sm font-semibold text-[var(--ds-accent)] transition-all hover:bg-[var(--ds-accent)] hover:text-white"
            >
              Read Paper <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--ds-fg-mid)] transition-colors hover:border-[var(--border-hi)] hover:text-[var(--ds-fg-hi)]"
            >
              All publications <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Article list */}
        <div className="card-glow overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ds-surface)]">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-[var(--ds-elevated)] ${
                index !== articles.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <span className="text-sm font-medium text-[var(--ds-fg-mid)] group-hover:text-[var(--ds-fg-hi)]">
                {article.title}
              </span>
              <div className="flex shrink-0 items-center gap-3">
                <span className="text-[10px] text-[var(--ds-fg-lo)]">{article.readTime}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[var(--ds-fg-lo)]" />
              </div>
            </Link>
          ))}
        </div>

        {/* Contributions */}
        <div className="card-glow rounded-xl border border-[var(--border)] bg-[var(--ds-surface)] p-6">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
            Contributed to the success of
          </p>
          <div className="grid grid-cols-2 gap-3">
            {contributions.map((c) => (
              <div
                key={c.name}
                className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--ds-elevated)] px-3 py-3"
              >
                <span className={`text-sm font-semibold ${c.color}`}>{c.name}</span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--ds-fg-lo)]">
                  {c.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

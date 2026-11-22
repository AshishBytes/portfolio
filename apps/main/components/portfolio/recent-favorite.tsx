"use client"

import { useState } from "react"
import { Layers, Zap } from "lucide-react"

const focusItems = [
  {
    tab: "Current Focus",
    icon: Zap,
    title: "Distributed Systems",
    subtitle: "Kafka · Microservices · K8s",
    detail: "Deep-diving event-driven architectures and service mesh patterns.",
    color: "text-[var(--ds-accent)]",
  },
  {
    tab: "Experiments",
    icon: Layers,
    title: "AI/ML Research",
    subtitle: "LLMs · Fine-tuning · RAG",
    detail: "Exploring T5, embedding models, and production inference pipelines.",
    color: "text-[var(--ds-orange)]",
  },
]

export function RecentFavorite() {
  const [active, setActive] = useState(0)
  const item = focusItems[active]
  const Icon = item.icon

  return (
    <div className="card-glow flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--ds-surface)] p-4">
      {/* Tab switcher */}
      <div className="mb-4 flex gap-1 rounded-lg border border-[var(--border)] bg-[var(--ds-elevated)] p-1">
        {focusItems.map((f, i) => (
          <button
            key={f.tab}
            onClick={() => setActive(i)}
            className={`flex-1 rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition-all duration-150 ${
              active === i
                ? "bg-[var(--ds-surface)] text-[var(--ds-fg-hi)] shadow-sm"
                : "text-[var(--ds-fg-lo)] hover:text-[var(--ds-fg-mid)]"
            }`}
          >
            {f.tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-1 items-start gap-3">
        <div className={`mt-0.5 rounded-lg border border-[var(--border)] bg-[var(--ds-elevated)] p-2 ${item.color}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="font-semibold text-[var(--ds-fg-hi)]">{item.title}</p>
          <p className="text-xs text-[var(--ds-fg-mid)]">{item.subtitle}</p>
          <p className="mt-2 text-xs leading-relaxed text-[var(--ds-fg-lo)]">{item.detail}</p>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"

export function ProfileCard() {
  return (
    <div className="card-glow relative h-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ds-surface)]">
      {/* Profile photo */}
      <Image
        src="/images/profile.jpg"
        alt="Ashish Singh — Backend & AI/ML Engineer"
        fill
        className="object-cover object-center select-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        priority
      />

      {/* Gradient overlay at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Identity badge */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="mb-2 flex items-center gap-2">
          {/* Available indicator */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ds-success)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ds-success)]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
            Available for work
          </span>
        </div>
        <p className="text-base font-semibold text-white leading-tight">Ashish Singh</p>
        <p className="text-xs text-white/60 mt-0.5">Backend · AI/ML · Distributed Systems</p>
      </div>

      {/* Top-right: photo label */}
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm select-none">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        IMG.JPG
      </div>
    </div>
  )
}

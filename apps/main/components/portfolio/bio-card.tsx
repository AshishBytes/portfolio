import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    href:  "https://linkedin.com/in/ashishbytes",
    icon:  Linkedin,
    label: "LinkedIn",
  },
  {
    href:  "https://twitter.com/ashishbytes",
    icon:  Twitter,
    label: "Twitter / X",
  },
  {
    href:  "https://github.com/AshishBytes",
    icon:  Github,
    label: "GitHub",
  },
  {
    href:  "mailto:ashishlodhi5559@gmail.com",
    icon:  Mail,
    label: "Email",
  },
]

const metrics = [
  { value: "4+",   label: "Years building" },
  { value: "585K+", label: "Users served" },
  { value: "99.9%", label: "Uptime SLA" },
]

export function BioCard() {
  return (
    <div className="card-glow flex h-full flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--ds-surface)] p-6 sm:p-7">
      {/* Metric pills */}
      <div className="mb-5 flex flex-wrap gap-2">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--ds-elevated)] px-3 py-2"
          >
            <span className="text-base font-bold leading-none text-[var(--ds-fg-hi)]">
              {value}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--ds-fg-lo)]">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Bio text */}
      <div
        className="flex-1 space-y-3 leading-[1.65] text-[var(--ds-fg-mid)]"
        style={{ fontSize: "var(--text-base)" }}
      >
        <p>
          I&apos;m a final-year B.Tech. CS student with 4+ years building distributed
          systems and scalable applications. Co-developer of{" "}
          <span className="font-semibold text-[var(--ds-fg-hi)]">Reef Bot</span>
          {" "}— a Discord-verified platform reaching{" "}
          <span className="font-semibold text-[var(--ds-accent)]">585K+ users</span>{" "}
          across 850+ servers.
        </p>
        <p>
          I specialize in distributed systems, cloud architecture, and backend
          engineering — with growing depth in AI/ML and NLP.
        </p>
        <p>
          Off the clock I dive into{" "}
          <span className="text-[var(--ds-orange)] underline underline-offset-2 decoration-1">
            competitive programming
          </span>
          , contribute to{" "}
          <span className="text-[var(--ds-orange)] underline underline-offset-2 decoration-1">
            open source
          </span>
          , and explore{" "}
          <span className="text-[var(--ds-orange)] underline underline-offset-2 decoration-1">
            ML/NLP
          </span>{" "}
          research.
        </p>
      </div>

      {/* Signature + contact */}
      <div className="mt-8 flex items-end justify-between">
        <svg
          viewBox="0 0 340 141"
          className="h-12 w-28 stroke-[var(--ds-fg-hi)]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5.16585 2.91969C17.9283 18.9197 34.0904 90.7751 29.7727 122.568C25.455 154.361 22.4103 139.723 21.4277 128.43C20.4452 107.47 15.8233 54.3757 35.5843 27.2925C47.1658 11.4197 61.4385 5.7905 72.5 8.00279C95 12.5028 86.1657 46 66 62.3667C40.3389 83.1935 21.4245 93.5232 16.1658 95.4196C7.66577 98.4851 2.16577 95.4196 2.16577 90.9197C2.84402 84.891 11.6658 86.9197 18.1658 88.9197C29.1987 92.3144 47.121 112.949 61 131.001C72.1032 145.442 82 131.001 84 122.568L86.1657 106.378C86.1657 98 83.7966 133.559 96.5827 135.793C109.369 138.028 111.761 124.782 111.606 118.42L112.017 106.378C112.127 110.855 113.886 126.035 119.1 131.001C124.314 135.966 129.557 134.609 131.166 132.92C132.993 131.001 136.166 128.631 136.166 119.5C136.166 112.42 135.166 111.53 133.666 107.92C133.06 106.461 128.166 102.92 123.666 104.92C119.789 106.643 114.237 114.346 112.256 119.5C110.756 123.402 112.256 104.92 112.256 100.42C112.666 91.4196 113.166 86.9196 116.666 77.4196C120.166 67.9196 125.369 61.8667 129.369 62.3667C139.424 64.8667 130.176 104.721 152.166 111.363C155.666 112.42 158.666 105.489 157.666 101.989L157.166 100.42C155.666 97.9836 146.166 92.4892 147.166 109.989C148.254 129.041 155.367 134.719 159.666 132.139C164.327 129.903 166.214 119.667 171.221 92.9496C176.229 66.2324 182.438 95.4827 183.834 118.908C184.281 126.407 188.642 135.205 190.5 136.282C199.5 141.5 201.305 121.488 204 116C204.5 115.5 204.2 137.807 217.166 135.793C230.131 133.78 225.166 129.124 230.166 131.001C232.59 131.911 233.166 134.242 244.407 134.242C257.756 134.242 268.666 134.242 278.166 131.001C287.666 127.759 321.166 119.5 341.666 119.5"
            strokeWidth="4"
            className="signature-path"
          />
        </svg>

        <div className="text-right">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ds-fg-lo)]">
            Find me at
          </p>
          <p className="mt-0.5 text-sm font-medium text-[var(--ds-fg-mid)]">
            ashishlodhi5559@gmail.com
          </p>
        </div>
      </div>

      {/* Social links */}
      <div className="mt-5 flex items-center gap-2.5">
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--ds-elevated)] text-[var(--ds-fg-lo)] transition-all duration-150 hover:-translate-y-[1px] hover:border-[var(--ds-accent)] hover:text-[var(--ds-accent)] hover:shadow-sm active:translate-y-0"
          >
            <Icon className="h-4 w-4 stroke-[1.5px]" />
          </a>
        ))}
      </div>
    </div>
  )
}

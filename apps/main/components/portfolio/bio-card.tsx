import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function BioCard() {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none">
      <CardContent className="p-0">

        {/* ACTUAL CARD SURFACE */}
        <div
          className="
            flex h-full flex-col justify-between
            rounded-2xl
            bg-[#fcfcfc]
            px-6 py-6 sm:px-7
            border border-black/5
          "
        >
          {/* ===== TEXT ===== */}
          <div className="space-y-3 text-base sm:text-lg font-medium leading-7 sm:leading-8 text-[#767676]">
            <p>
              I&apos;m a full-stack engineer helping digital founders build unique
              web experiences that make their products stand out and attract more
              investors.
            </p>

            <p>
              I specialize in crafting pixel-perfect frontend applications.
            </p>

            <p>
              Off the clock, I dive into{" "}
              <a className="text-orange-500 underline underline-offset-2">
                photography
              </a>
              , geek out on the latest{" "}
              <a className="text-orange-500 underline underline-offset-2">
                gadgets
              </a>
              , and play{" "}
              <a className="text-orange-500 underline underline-offset-2">
                games
              </a>{" "}
              like a 12-year-old.
            </p>
          </div>

          {/* ===== SIGNATURE + CONTACT (OLD CODE, UNTOUCHED LOGIC) ===== */}
          <div className="mt-6 flex items-end justify-between">
            <svg
              className="h-10 w-20 text-[#2f2f2f]"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 30 Q10 10 20 25 Q30 40 40 20 Q50 5 60 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2f2f2f]">
                Find me at
              </p>
              <p className="text-sm font-medium text-[#767676]">
                hello@ashishbytes.com
              </p>
            </div>
          </div>

          {/* ===== SOCIALS (UNCHANGED) ===== */}
          <div className="mt-4 flex items-center gap-3">
            {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
              <a
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#9a9a9a] hover:text-[#2f2f2f]"
              >
                <Icon className="h-4 w-4 stroke-[1.5px]" />
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

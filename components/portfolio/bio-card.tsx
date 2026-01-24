import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function BioCard() {
  return (
    <Card className="h-full border-0 shadow-sm">
      <CardContent className="flex h-full flex-col justify-between p-6">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-foreground">
            I&apos;m a full-stack engineer helping digital founders build unique web experiences that make their products stand out and attract more investors.
          </p>
          <p className="text-base leading-relaxed text-foreground">
            I specialize in crafting pixel-perfect frontend applications.
          </p>
          <p className="text-base leading-relaxed text-foreground">
            Off the clock, I dive into{" "}
            <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80">
              photography
            </a>
            , geek out on the latest{" "}
            <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80">
              gadgets
            </a>
            , and play{" "}
            <a href="#" className="text-primary underline underline-offset-2 hover:text-primary/80">
              games
            </a>{" "}
            like a 12-year-old.
          </p>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <svg
              className="h-10 w-20 text-foreground"
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
          </div>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Find me at
            </p>
            <p className="text-sm font-medium text-foreground">hello@ashishbytes.com</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <a
            href="https://linkedin.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="https://github.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@ashishbytes.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

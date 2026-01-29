import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
const socials = [
  { href: "https://linkedin.com/in/ashishbytes", icon: Linkedin },
  { href: "https://twitter.com/ashishbytes", icon: Twitter },
  { href: "https://github.com/AshishBytes", icon: Github },
  { href: "mailto:hello@ashishbytes.com", icon: Mail },
]


export function BioCard() {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none">
      <CardContent className="h-full p-0">
        <div
          className="
            flex h-full flex-col justify-between
            rounded-2xl
            bg-[#fcfcfc]
            px-6 py-6 sm:px-7
            border border-black/5
          "
        >
          {/* Text */}
          <div className="space-y-3 text-base sm:text-lg font-medium leading-7 sm:leading-8 text-[#767676]">
            <p>
              I&apos;m a full-stack engineer helping digital founders build unique
              web experiences that make their products stand out and attract more
              investors.
            </p>
            <p>I specialize in crafting pixel-perfect frontend applications.</p>
            <p>
              Off the clock, I dive into{" "}
              <span className="text-orange-500 underline underline-offset-2">
                photography
              </span>
              , geek out on the latest{" "}
              <span className="text-orange-500 underline underline-offset-2">
                gadgets
              </span>
              , and play{" "}
              <span className="text-orange-500 underline underline-offset-2">
                games
              </span>{" "}
              like a 12-year-old.
            </p>
          </div>

          {/* Signature + Contact */}
          <div className="mt-6 flex items-end justify-between">
            <svg
              viewBox="0 0 340 141"
              className="h-10 w-24 stroke-[#2f2f2f]"
              fill="none"
            >
              <path
                d="M5.16585 2.91969C17.9283 18.9197 34.0904 90.7751 29.7727 122.568C25.455 154.361 22.4103 139.723 21.4277 128.43C20.4452 107.47 15.8233 54.3757 35.5843 27.2925C47.1658 11.4197 61.4385 5.7905 72.5 8.00279C95 12.5028 86.1657 46 66 62.3667C40.3389 83.1935 21.4245 93.5232 16.1658 95.4196C7.66577 98.4851 2.16577 95.4196 2.16577 90.9197C2.84402 84.891 11.6658 86.9197 18.1658 88.9197C29.1987 92.3144 47.121 112.949 61 131.001C72.1032 145.442 82 131.001 84 122.568L86.1657 106.378C86.1657 98 83.7966 133.559 96.5827 135.793C109.369 138.028 111.761 124.782 111.606 118.42L112.017 106.378C112.127 110.855 113.886 126.035 119.1 131.001C124.314 135.966 129.557 134.609 131.166 132.92C132.993 131.001 136.166 128.631 136.166 119.5C136.166 112.42 135.166 111.53 133.666 107.92C133.06 106.461 128.166 102.92 123.666 104.92C119.789 106.643 114.237 114.346 112.256 119.5C110.756 123.402 112.256 104.92 112.256 100.42C112.666 91.4196 113.166 86.9196 116.666 77.4196C120.166 67.9196 125.369 61.8667 129.369 62.3667C139.424 64.8667 130.176 104.721 152.166 111.363C155.666 112.42 158.666 105.489 157.666 101.989L157.166 100.42C155.666 97.9836 146.166 92.4892 147.166 109.989C148.254 129.041 155.367 134.719 159.666 132.139C164.327 129.903 166.214 119.667 171.221 92.9496C176.229 66.2324 182.438 95.4827 183.834 118.908C184.281 126.407 188.642 135.205 190.5 136.282C199.5 141.5 201.305 121.488 204 116C204.5 115.5 204.2 137.807 217.166 135.793C230.131 133.78 225.166 129.124 230.166 131.001C232.59 131.911 233.166 134.242 244.407 134.242C257.756 134.242 268.666 134.242 278.166 131.001C287.666 127.759 321.166 119.5 341.666 119.5"
                strokeWidth="5"
                className="signature-path"
              />
            </svg>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2f2f2f]">
                Find me at
              </p>
              <p className="text-sm font-medium text-[#767676]">
                hello@ashishbytes.com
              </p>
            </div>
          </div>

           {/* SOCIAL LINKS */}
          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-black/10
                  bg-white
                  text-[#9a9a9a]
                  transition-all duration-200 ease-out
                  hover:-translate-y-[2px]
                  hover:text-[#2f2f2f]
                  hover:border-black/20
                  hover:shadow-[0_6px_14px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]
                  active:translate-y-0
                "
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

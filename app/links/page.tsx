import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Globe,
  FileText,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const links = [
  {
    title: "Portfolio",
    description: "Check out my work",
    href: "/",
    icon: Globe,
  },
  {
    title: "Blog",
    description: "Read my articles",
    href: "/blog",
    icon: FileText,
  },
  {
    title: "GitHub",
    description: "@ashishbytes",
    href: "https://github.com",
    icon: Github,
    external: true,
  },
  {
    title: "Twitter",
    description: "@ashishbytes",
    href: "https://twitter.com",
    icon: Twitter,
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Connect with me",
    href: "https://linkedin.com",
    icon: Linkedin,
    external: true,
  },
  {
    title: "Email",
    description: "hello@ashishbytes.com",
    href: "mailto:hello@ashishbytes.com",
    icon: Mail,
    external: true,
  },
]

export default function LinksPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="Ashish Bytes"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            ashish<span className="text-primary">.</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Full-stack engineer crafting pixel-perfect experiences
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <Card className="group border-0 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-medium text-foreground">{link.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Ashish Bytes
        </p>
      </div>
    </main>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, FileText } from "lucide-react"
import Link from "next/link"

const featuredArticle = {
  title: "Programming is Easy, Software Development is Hard & Maintaining Code is the Hardest",
  excerpt:
    "When you are a programmer, you need to be able to do what you can do, and when you are a software developer, you need to be able to do what you can't do.",
  slug: "programming-is-easy",
}

const articles = [
  {
    title: "The Easing Blueprint",
    slug: "easing-blueprint",
  },
  {
    title: "Startup Founders, Would You Rather Have A 10x Better Product Or 10x Better Distribution?",
    slug: "product-vs-distribution",
  },
  {
    title: "Life-Changing Lessons I've Learnt As An Entrepreneur",
    slug: "life-changing-lessons",
  },
  {
    title: "Stop Validating Your Business Ideas",
    slug: "stop-validating",
  },
]

const contributions = [
  { name: "Neat", subtitle: "METHOD" },
  { name: "davai", icon: true },
  { name: "MONKE", subtitle: "DAO" },
  { name: "DEAD KING SOCIETY", icon: true },
]

export function ArticlesSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-primary" />
        <h2 className="text-xs font-medium uppercase tracking-wider text-primary">
          Articles
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Featured Article */}
        <Card className="border-0 shadow-sm lg:row-span-1">
          <CardContent className="flex h-full flex-col justify-between p-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground">
                {featuredArticle.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {featuredArticle.excerpt}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Read <ArrowUpRight className="h-3 w-3" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                All articles <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Article Links */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={`flex items-center justify-between p-4 transition-colors hover:bg-muted ${
                  index !== articles.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="pr-4 text-sm font-medium text-foreground">
                  {article.title}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Contributions */}
        <Card className="border-0 shadow-sm">
          <CardContent className="flex h-full flex-col justify-center p-6">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
              I&apos;ve Contributed To The Success Of
            </p>
            <div className="grid grid-cols-2 gap-4">
              {contributions.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center justify-center py-2"
                >
                  <span className="text-base font-semibold tracking-wide text-foreground">
                    {company.name}
                  </span>
                  {company.subtitle && (
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                      {company.subtitle}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

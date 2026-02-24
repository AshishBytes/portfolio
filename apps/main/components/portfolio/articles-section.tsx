import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, FileText } from "lucide-react"
import Link from "next/link"

const featuredArticle = {
  title: "Mobile Security – Light on Security Threats",
  excerpt:
    "A comprehensive six-layer security model that reduces Android attack surface by 38%. Published in IJETAE 2024, this research addresses critical mobile security vulnerabilities.",
  slug: "mobile-security-threats",
}

const articles = [
  {
    title: "Rose Plant Disease Detection with Edge ML",
    slug: "rose-disease-detection",
  },
  {
    title: "Building Distributed Systems at Scale",
    slug: "distributed-systems-scale",
  },
  {
    title: "Optimizing Microservices with Kafka",
    slug: "microservices-kafka",
  },
  {
    title: "Zero-Copy TCP Stack Implementation",
    slug: "zero-copy-tcp",
  },
]

const contributions = [
  { name: "Reef", subtitle: "PLATFORM" },
  { name: "Happy", subtitle: "BOT" },
  { name: "HackIITK", subtitle: "2025" },
  { name: "Blockchain Voting System", subtitle: "PROJECT" },
]

export function ArticlesSection() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-orange-500" />
        <h2 className="text-xs font-medium uppercase tracking-wider text-orange-500">
          Publications & Research
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Featured Article - spans 2 columns on large screens */}
        <Card className="border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] lg:col-span-2">
          <CardContent className="flex h-full flex-col justify-between p-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold leading-tight text-[#1a1a1a]">
                {featuredArticle.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#666666]">
                {featuredArticle.excerpt}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] px-4 py-2 text-sm font-medium text-[#333333] transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Read <ArrowUpRight className="h-3 w-3" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 rounded-full border border-black/[0.08] px-4 py-2 text-sm font-medium text-[#333333] transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                All publications <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Article Links */}
        <Card className="border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <CardContent className="p-0">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={`flex items-center justify-between p-4 transition-colors hover:bg-[#f8f8f8] ${index !== articles.length - 1 ? "border-b border-black/[0.08]" : ""
                  }`}
              >
                <span className="pr-4 text-sm font-medium text-[#333333]">
                  {article.title}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#999999]" />
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Contributions */}
        <Card className="border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <CardContent className="flex h-full flex-col justify-center p-6">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-[#999999]">
              I&apos;ve Contributed To The Success Of
            </p>
            <div className={`grid gap-4 ${contributions.length === 1 ? 'grid-cols-1' : contributions.length === 2 ? 'grid-cols-2' : contributions.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {contributions.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center justify-center py-2"
                >
                  <span className="text-base font-semibold tracking-wide text-[#1a1a1a]">
                    {company.name}
                  </span>
                  {company.subtitle && (
                    <span className="text-[10px] tracking-[0.2em] text-[#999999]">
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

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Programming is Easy, Software Development is Hard & Maintaining Code is the Hardest",
    excerpt:
      "When you are a programmer, you need to be able to do what you can do, and when you are a software developer, you need to be able to do what you can't do.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    slug: "programming-is-easy",
    tags: ["Engineering", "Career"],
  },
  {
    title: "The Easing Blueprint",
    excerpt:
      "A comprehensive guide to creating smooth, natural animations using easing functions and timing curves.",
    date: "Jan 10, 2024",
    readTime: "5 min read",
    slug: "easing-blueprint",
    tags: ["Design", "Animation"],
  },
  {
    title: "Startup Founders, Would You Rather Have A 10x Better Product Or 10x Better Distribution?",
    excerpt:
      "The age-old debate between product quality and market reach. What matters more for your startup's success?",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    slug: "product-vs-distribution",
    tags: ["Startup", "Business"],
  },
  {
    title: "Life-Changing Lessons I've Learnt As An Entrepreneur",
    excerpt:
      "Reflecting on years of building products and companies, here are the most valuable lessons I've learned.",
    date: "Dec 28, 2023",
    readTime: "10 min read",
    slug: "life-changing-lessons",
    tags: ["Entrepreneurship", "Personal"],
  },
  {
    title: "Stop Validating Your Business Ideas",
    excerpt:
      "Why endless validation is killing your startup before it even begins, and what to do instead.",
    date: "Dec 20, 2023",
    readTime: "7 min read",
    slug: "stop-validating",
    tags: ["Startup", "Strategy"],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:py-12">
        {/* Header */}
        <header className="mb-8 lg:mb-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Thoughts on software development, startups, and life.
          </p>
        </header>

        {/* Blog Posts */}
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              className="group border-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

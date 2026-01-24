import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const posts: Record<string, {
  title: string
  date: string
  readTime: string
  tags: string[]
  content: string
}> = {
  "programming-is-easy": {
    title: "Programming is Easy, Software Development is Hard & Maintaining Code is the Hardest",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    tags: ["Engineering", "Career"],
    content: `
When you're learning to code, everything seems straightforward. You write some functions, they return values, and the computer does exactly what you tell it to do. It's logical, predictable, and even fun.

But then you join a real team, working on a real product, with real users. Suddenly, you realize that writing code is the easy part.

## The Three Stages of a Developer

**Stage 1: Programming**
You learn syntax, algorithms, and data structures. You solve coding challenges. You feel accomplished when your code compiles and runs.

**Stage 2: Software Development**
You learn to work in teams. You deal with requirements that change. You discover that code needs tests, documentation, and reviews. You start thinking about architecture, scalability, and user experience.

**Stage 3: Maintenance**
You inherit code written years ago by developers who have long since moved on. The documentation is outdated. The tests are incomplete. And somehow, you need to add new features without breaking everything that already works.

## Why Maintenance is the Hardest

The codebase has accumulated technical debt. Quick fixes were applied to meet deadlines. Patterns that made sense three years ago now seem antiquated. And every change you make has the potential to cascade through the system in unexpected ways.

The best developers I know aren't those who write the cleverest code. They're the ones who write code that's easy to understand, easy to test, and easy to change.

Because in the end, code is read far more often than it's written. And the person reading it might be you, six months from now, wondering what on earth you were thinking.
    `,
  },
  "easing-blueprint": {
    title: "The Easing Blueprint",
    date: "Jan 10, 2024",
    readTime: "5 min read",
    tags: ["Design", "Animation"],
    content: `
Great animations feel natural because they mimic how objects move in the real world. Understanding easing functions is the key to creating these fluid, polished interactions.

## What is Easing?

Easing describes how an animation progresses over time. Instead of moving at a constant speed (linear), objects can accelerate, decelerate, or both.

## Common Easing Functions

**Ease-In**: Starts slow, ends fast. Use for elements leaving the screen.

**Ease-Out**: Starts fast, ends slow. Use for elements entering the screen.

**Ease-In-Out**: Slow at both ends, fast in the middle. Use for elements that stay on screen.

## My Favorite Curves

For most UI animations, I reach for \`cubic-bezier(0.4, 0, 0.2, 1)\` - it's the standard Material Design curve and feels great for almost everything.

For bouncy, playful interactions, try adding a slight overshoot with \`cubic-bezier(0.34, 1.56, 0.64, 1)\`.

The key is consistency. Pick a small set of easing functions and use them throughout your application.
    `,
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 lg:py-12">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 py-8 md:px-6 lg:py-12">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="prose prose-neutral max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="mb-4 mt-8 text-xl font-semibold text-foreground">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return null
            }
            if (paragraph.includes('**')) {
              const parts = paragraph.split(/\*\*(.*?)\*\*/)
              return (
                <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                  {parts.map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              )
            }
            return null
          })}
        </div>
      </article>
    </main>
  )
}

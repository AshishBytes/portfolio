import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects: Record<string, {
  title: string
  location: string
  country: string
  category: string
  description: string
  fullDescription: string
  image: string
  tech: string[]
  year: string
  link?: string
}> = {
  "neat-method": {
    title: "NeatMethod",
    location: "US",
    country: "USA",
    category: "e-commerce",
    description: "A cutting-edge e-commerce store developed from scratch using modern React 18.",
    fullDescription: `NeatMethod is a premium organization and design company that helps clients declutter and organize their spaces. They needed a modern e-commerce platform to sell their curated selection of organizational products.

The challenge was to create a shopping experience that reflected their minimalist, clean aesthetic while providing all the functionality expected from a modern e-commerce store.

Key features include:
- Custom product configurator for organizational systems
- Real-time inventory management
- Seamless checkout experience
- Mobile-first responsive design
- Integration with existing inventory systems`,
    image: "/images/project-1.jpg",
    tech: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity CMS"],
    year: "2024",
    link: "https://neatmethod.com",
  },
  "clear-collectibles": {
    title: "Clear Collectibles",
    location: "US",
    country: "USA",
    category: "web3",
    description: "An ambitious Web3 project gamifying an NFT platform using modern Next.js 14.",
    fullDescription: `Clear Collectibles is an innovative NFT marketplace that gamifies the collecting experience. The platform allows users to discover, trade, and showcase digital collectibles in unique ways.

The project required deep integration with blockchain technology while maintaining an intuitive, accessible user experience for both crypto-native users and newcomers.

Key features include:
- Wallet connection and management
- Real-time NFT minting and trading
- Gamified achievement system
- Social features for collectors
- Gas-optimized smart contracts`,
    image: "/images/project-2.jpg",
    tech: ["Next.js 14", "TypeScript", "Solidity", "ethers.js", "IPFS", "Framer Motion"],
    year: "2024",
  },
  davai: {
    title: "Davai",
    location: "IN",
    country: "India",
    category: "pharmaceutical",
    description: "A website for an ambitious pharma startup from scratch using Astro.js + DatoCMS.",
    fullDescription: `Davai is an ambitious pharmaceutical startup on a mission to make healthcare more accessible and affordable in India. They needed a website that communicated their vision while building trust with both patients and healthcare professionals.

The challenge was to balance professional credibility with approachability, while ensuring the site performed well across all devices and network conditions common in India.

Key features include:
- Multi-language support (English, Hindi)
- Medicine information database
- Pharmacy locator with map integration
- Healthcare professional portal
- Optimized for low-bandwidth connections`,
    image: "/images/project-3.jpg",
    tech: ["Astro.js", "DatoCMS", "TypeScript", "Tailwind CSS", "Google Maps API"],
    year: "2024",
  },
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:py-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-4xl px-4 py-8 md:px-6 lg:py-12">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {project.location} {project.country} · {project.year}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{project.description}</p>
        </header>

        {/* Featured Image */}
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-neutral max-w-none">
          {project.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Visit Website
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </article>
    </main>
  )
}

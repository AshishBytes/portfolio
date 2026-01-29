import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "NeatMethod",
    location: "US",
    country: "USA",
    category: "e-commerce",
    description:
      "A cutting-edge e-commerce store developed from scratch using modern React 18.",
    image: "/images/project-1.jpg",
    slug: "neat-method",
    color: "bg-gradient-to-b from-rose-100 to-rose-50",
  },
  {
    title: "Clear Collectibles",
    location: "US",
    country: "USA",
    category: "web3",
    description:
      "An ambitious Web3 project gamifying an NFT platform using modern Next.js 14.",
    image: "/images/project-2.jpg",
    slug: "clear-collectibles",
    color: "bg-gradient-to-b from-violet-100 to-violet-50",
  },
  {
    title: "Davai",
    location: "IN",
    country: "India",
    category: "pharmaceutical",
    description:
      "A website for an ambitious pharma startup from scratch using Astro.js + DatoCMS.",
    image: "/images/project-3.jpg",
    slug: "davai",
    color: "bg-gradient-to-b from-amber-100 to-amber-50",
  },
]

export function SelectedWorks() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-4 w-4 text-orange-500" />
        <h2 className="text-xs font-medium uppercase tracking-wider text-orange-500">
          Selected Works from 2024
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="group overflow-hidden border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          >
            <div className={`relative aspect-[4/3] ${project.color}`}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover p-4"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                {project.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#999999]">
                <span className="font-medium">{project.location}</span> {project.country},{" "}
                {project.category}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#666666]">
                {project.description}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="mt-4 flex items-center justify-between border-t border-black/[0.08] pt-4 text-sm font-medium text-[#333333] transition-colors hover:text-orange-500"
              >
                Open Case
                <ChevronRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

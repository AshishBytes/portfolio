import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Reef Platform",
    location: "Remote",
    country: "Global",
    category: "distributed systems",
    description:
      "Sharded microservices platform on Kubernetes serving 1M+ monthly users at 99.9% uptime. Built with Go, Python, and advanced networking optimizations.",
    image: "/images/project-1.jpg",
    slug: "reef-platform",
    color: "bg-gradient-to-b from-blue-100 to-blue-50",
  },
  {
    title: "HackIITK Blockchain",
    location: "Kanpur",
    country: "India",
    category: "blockchain",
    description:
      "Gas-less Solidity relayer handling 5,000+ transactions <150ms p95. Ranked #2/54 teams for reliability & innovation with zero critical issues.",
    image: "/images/project-2.jpg",
    slug: "hackiitk-blockchain",
    color: "bg-gradient-to-b from-purple-100 to-purple-50",
  },
  {
    title: "DocQA Tutor",
    location: "Remote",
    country: "India",
    category: "ML/NLP",
    description:
      "Fine-tuned T5 model on 2M samples achieving ROUGE-L 43.2, BLEU 27.5. Deployed on AKS GPU pools with 47% latency reduction.",
    image: "/images/project-3.jpg",
    slug: "docqa-tutor",
    color: "bg-gradient-to-b from-green-100 to-green-50",
  },
]

export function SelectedWorks() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-4 w-4 text-orange-500" />
        <h2 className="text-xs font-medium uppercase tracking-wider text-orange-500">
          Selected Projects from 2021-2025
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

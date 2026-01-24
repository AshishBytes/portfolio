import { Card, CardContent } from "@/components/ui/card"
import { Flag as Flask, Users, FileText, Search } from "lucide-react"

const experiments = [
  {
    title: "Agency",
    description: "Frontend Templates Fast",
    icon: Users,
    color: "bg-muted",
  },
  {
    title: "Contract AI",
    description: "Contracts In Seconds",
    icon: FileText,
    color: "bg-muted",
  },
  {
    title: "Seek",
    description: "Discover Your Truth",
    icon: Search,
    color: "bg-muted",
  },
]

export function ExperimentsCard() {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Flask className="h-4 w-4 text-primary" />
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            Experiments
          </p>
        </div>
        <div className="space-y-2">
          {experiments.map((experiment) => (
            <div
              key={experiment.title}
              className="group flex cursor-pointer items-center justify-between rounded-xl bg-muted/50 p-3 transition-colors hover:bg-muted"
            >
              <div>
                <h3 className="font-medium text-foreground">{experiment.title}</h3>
                <p className="text-sm text-muted-foreground">{experiment.description}</p>
              </div>
              <div className="flex h-10 w-16 items-center justify-end gap-0.5 pr-2">
                <div className="h-6 w-1 rounded-full bg-border" />
                <div className="h-4 w-1 rounded-full bg-border" />
                <div className="h-8 w-1 rounded-full bg-border" />
                <div className="h-3 w-1 rounded-full bg-border" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

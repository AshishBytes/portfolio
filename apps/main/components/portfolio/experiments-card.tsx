import { Card, CardContent } from "@/components/ui/card"
import { Flag as Flask, Users, FileText, Search } from "lucide-react"

const experiments = [
  { title: "Agency", desc: "Frontend Templates Fast", icon: Users },
  { title: "Contract AI", desc: "Contracts In Seconds", icon: FileText },
  { title: "Seek", desc: "Discover Your Truth", icon: Search },
]

export function ExperimentsCard() {
  return (
    <Card className="h-full border-0 shadow-sm">
      <CardContent className="h-full flex flex-col p-4">
        <div className="mb-3 flex items-center gap-2">
          <Flask className="h-4 w-4 text-primary" />
          <p className="text-xs font-medium uppercase tracking-wide text-primary">
            Experiments
          </p>
        </div>

        <div className="flex-1 space-y-2">
          {experiments.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-xl bg-muted/50 p-3 hover:bg-muted"
            >
              <div>
                <p className="font-medium text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>

              <Icon className="h-5 w-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

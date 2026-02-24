import { Card, CardContent } from "@/components/ui/card"
import { Flag as Flask, Users, FileText, Search } from "lucide-react"

const experiments = [
  { title: "DocQA Tutor", desc: "Summarisation & QA API", icon: FileText },
  { title: "TripLedger", desc: "Offline-First Expense Tracker", icon: Users },
  { title: "Blockchain Relayer", desc: "Gas-less Transaction System", icon: Search },
]

export function ExperimentsCard() {
  return (
    <Card className="h-full border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <CardContent className="h-full flex flex-col p-4">
        <div className="mb-3 flex items-center gap-2">
          <Flask className="h-4 w-4 text-orange-500" />
          <p className="text-xs font-medium uppercase tracking-wide text-orange-500">
            Experiments
          </p>
        </div>

        <div className="flex-1 space-y-2">
          {experiments.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-xl bg-[#f8f8f8] p-3 hover:bg-[#f0f0f0] transition-colors"
            >
              <div>
                <p className="font-medium text-[#333333]">{title}</p>
                <p className="text-sm text-[#666666]">{desc}</p>
              </div>

              <Icon className="h-5 w-5 text-[#999999]" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

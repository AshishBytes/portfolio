import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function RecentFavorite() {
  return (
    <Card className="h-full border border-black/[0.08] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <CardContent className="p-4 h-full">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#999999]">
          Current Focus
        </p>

        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-[#333333]">Distributed Systems</p>
            <p className="text-sm text-[#666666]">Kafka, Microservices</p>
          </div>

          <div className="relative ml-auto h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <span className="text-white text-lg font-bold">DS</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

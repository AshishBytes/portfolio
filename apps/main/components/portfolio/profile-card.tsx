import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProfileCard() {
  return (
    <Card className="h-full min-h-[360px] md:min-h-0 overflow-hidden border-0 shadow-sm">      <CardContent className="relative h-full p-0">
        <Image
          src="/images/profile.jpg"
          alt="Ashish"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 backdrop-blur">
          <span className="text-xs font-medium text-muted-foreground">
            IMG.JPG
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

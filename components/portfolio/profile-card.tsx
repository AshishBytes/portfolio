import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProfileCard() {
  return (
    <Card className="h-full overflow-hidden border-0 shadow-sm">
      <CardContent className="relative h-full min-h-[300px] p-0">
        <Image
          src="/images/profile.jpg"
          alt="Ashish - Full-stack engineer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-card/90 px-3 py-2 backdrop-blur-sm">
          <svg
            className="h-4 w-4 text-muted-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-xs font-medium text-muted-foreground">IMG.JPG</span>
        </div>
      </CardContent>
    </Card>
  )
}

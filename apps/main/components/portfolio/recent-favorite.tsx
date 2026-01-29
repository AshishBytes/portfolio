import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function RecentFavorite() {
  return (
    <Card className="h-full border-0 shadow-sm">
      <CardContent className="p-4 h-full">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Recent Favorite
        </p>

        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium">m.A.A.d city</p>
            <p className="text-sm text-muted-foreground">Kendrick Lamar</p>
          </div>

          <div className="relative ml-auto h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797"
              alt="Album cover"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

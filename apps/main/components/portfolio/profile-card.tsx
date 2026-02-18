import * as Avatar from "@radix-ui/react-avatar"
import { Card } from "@/components/ui/card"

export function ProfileCard() {
  return (
    <Card
      className="
        relative
        h-full
        overflow-hidden
        rounded-2xl
        border border-black/[0.08]
        bg-white
        shadow-[0_1px_3px_rgba(0,0,0,0.05)]
      "
    >
      {/* Image must be absolute to fill card */}
      <Avatar.Root className="absolute inset-0">
        <Avatar.Image
          src="/images/profile.jpg"
          alt="Ashish portrait"
          className="
            h-full
            w-full
            object-cover
            object-center
            select-none
          "
        />
        <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-500">
          Ashish Singh
        </Avatar.Fallback>
      </Avatar.Root>

      {/* IMG.JPG badge */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          left-4
          flex
          items-center
          gap-1.5
          rounded-lg
          bg-black/70
          px-2.5
          py-1.5
          text-[11px]
          font-medium
          text-white
          backdrop-blur-sm
          select-none
        "
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        IMG.JPG
      </div>
    </Card>
  )
}

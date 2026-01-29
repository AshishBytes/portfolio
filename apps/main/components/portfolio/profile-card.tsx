import { Card, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";

export function ProfileCard() {
  return (
    <Card className="h-full overflow-hidden">
      <Inset clip="padding-box" side="all">
        <div className="relative h-full w-full">
          <Image
            src="/images/profile.jpg"
            alt="Portrait Picture"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />

          <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 backdrop-blur">
            <Text size="1" color="gray">
              IMG.JPG
            </Text>
          </div>
        </div>
      </Inset>
    </Card>
  );
}

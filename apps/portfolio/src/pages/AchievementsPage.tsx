import { Award, BadgeCheck } from "lucide-react";
import { achievements } from "../content/certifications";
import { PageHeader } from "../components/sections/PageHeader";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

export function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Certifications and awards."
        description="Credentials and competition results recorded in the current resume."
      />
      <Container className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-2">
        {achievements.map((item) => {
          const Icon = item.kind === "award" ? Award : BadgeCheck;
          return (
            <Card className="flex gap-4" key={item.id}>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                <Icon aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="eyebrow">{item.kind}</p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{item.organization}</p>
                <p className="mt-3 text-xs text-subtle">{item.date}</p>
              </div>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

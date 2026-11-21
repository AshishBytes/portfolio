import { MessageCircleText } from "lucide-react";
import { PageHeader } from "../components/sections/PageHeader";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

export function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Professional references."
        description="A place for feedback shared by colleagues and collaborators."
      />
      <Container className="pb-12">
        <Card className="flex max-w-2xl gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
            <MessageCircleText aria-hidden="true" size={19} />
          </span>
          <div>
            <h2 className="text-base font-semibold">
              No testimonials published
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              No testimonials are available for display yet.
            </p>
          </div>
        </Card>
      </Container>
    </>
  );
}

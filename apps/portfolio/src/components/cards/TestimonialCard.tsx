import { Quote } from "lucide-react";
import type { Testimonial } from "../../types/content";
import { Card } from "../ui/Card";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col">
      <Quote
        aria-hidden="true"
        className="text-accent/70"
        size={22}
        strokeWidth={1.7}
      />
      <blockquote className="mt-4 flex-1 text-base leading-7 text-ink">
        “{testimonial.quote}”
      </blockquote>
      <footer className="mt-5 border-t border-line pt-4">
        <p className="m-0 text-sm font-semibold">{testimonial.name}</p>
        <p className="m-0 mt-1 text-xs text-muted">{testimonial.role}</p>
      </footer>
    </Card>
  );
}

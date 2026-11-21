import { Container } from "../ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Container className="pb-8 pt-12 sm:pb-10 sm:pt-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-heading mt-3 max-w-4xl text-4xl leading-tight sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {description}
      </p>
    </Container>
  );
}

import { Link } from "react-router-dom";
import { PageHeader } from "../components/sections/PageHeader";
import { ButtonLink } from "../components/ui/Button";
import { Container } from "../components/ui/Container";

export function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="404 · Not found"
        title="This page isn’t here."
        description="The address may have changed or the page may no longer be available."
      />
      <Container className="pb-16">
        <ButtonLink to="/">Return home</ButtonLink>
        <Link
          className="ml-5 text-sm font-semibold text-muted hover:text-accent"
          to="/projects"
        >
          Browse projects
        </Link>
      </Container>
    </>
  );
}

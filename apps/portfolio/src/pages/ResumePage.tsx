import { Download, FileText } from "lucide-react";
import { profile } from "../content/profile";
import { ButtonLink } from "../components/ui/Button";
import { PageHeader } from "../components/sections/PageHeader";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

export function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="A concise record of experience."
        description="Open the current two-page resume or download a copy for later."
      />
      <Container className="pb-12">
        <Card className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
              <FileText aria-hidden="true" size={20} />
            </span>
            <div>
              <h2 className="font-semibold">Ashish Singh · Resume</h2>
              <p className="mt-1 text-sm text-muted">PDF document</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={profile.resume} variant="secondary">
              View PDF
            </ButtonLink>
            <ButtonLink download href={profile.resume}>
              Download <Download aria-hidden="true" size={15} />
            </ButtonLink>
          </div>
        </Card>
      </Container>
    </>
  );
}

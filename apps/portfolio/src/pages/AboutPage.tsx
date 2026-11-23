import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { about, aboutHighlights } from "../content/about";
import { profile } from "../content/profile";
import { PageHeader } from "../components/sections/PageHeader";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building useful systems with care."
        description={about.introduction}
      />
      <Container className="grid grid-cols-1 gap-5 pb-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)]">
        <section
          aria-label="Areas of focus"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {aboutHighlights.map((highlight) => (
            <Card key={highlight.title}>
              <h2 className="text-lg font-semibold tracking-tight">
                {highlight.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {highlight.description}
              </p>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={`${highlight.title} topics`}
              >
                {highlight.skills.map((skill) => (
                  <li
                    className="rounded-full bg-surface-soft px-3 py-1 text-xs text-muted"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </section>
        <aside className="space-y-4">
          <Card>
            <div className="flex items-start gap-3">
              <span className="rounded-full bg-accent-soft p-2 text-accent-dark">
                <GraduationCap aria-hidden="true" size={18} />
              </span>
              <div>
                <p className="eyebrow">Education</p>
                <h2 className="mt-2 text-base font-semibold">
                  {about.education.institution}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {about.education.program}
                </p>
                <p className="mt-2 text-xs text-subtle">
                  {about.education.period} · {about.education.location}
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <p className="eyebrow">Based in</p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin aria-hidden="true" size={15} />
              {profile.location}
            </p>
            <Link
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent"
              to="/experience"
            >
              Explore experience <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </Card>
        </aside>
      </Container>
    </>
  );
}

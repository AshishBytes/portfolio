import { skillCategories } from "../content/skills";
import { SkillBadge } from "../components/cards/SkillBadge";
import { PageHeader } from "../components/sections/PageHeader";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";

export function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools and areas of practice."
        description="A categorized view of the technologies and foundations listed in the resume."
      />
      <Container className="grid grid-cols-1 gap-4 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.id}>
            <h2 className="text-lg font-semibold tracking-tight">
              {category.title}
            </h2>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label={category.title}
            >
              {category.skills.map((skill) => (
                <li key={skill}>
                  <SkillBadge skill={skill} />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Container>
    </>
  );
}

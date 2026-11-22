import { contributorHeading, contributors } from "../../../content/contributors";
import { Badge } from "../../../components/ui/Badge";

export function ContributorsStrip() {
  return (
    <section
      aria-label={contributorHeading}
      className="flex flex-col gap-3 border-y border-line py-5 sm:flex-row sm:items-center sm:gap-5"
    >
      <h2 className="m-0 shrink-0 text-sm font-semibold text-ink">
        {contributorHeading}
      </h2>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {contributors.map((contributor) => (
          <li key={contributor.name}>
            <Badge className="gap-1.5 border-line bg-surface text-sm text-ink">
              <span className="font-semibold">{contributor.name}</span>
              <span aria-hidden="true" className="text-subtle">·</span>
              <span className="text-muted">{contributor.subtitle}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}

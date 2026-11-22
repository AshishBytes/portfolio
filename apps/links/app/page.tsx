import { site, getProfessionalProfiles } from "@repo/config";

export default function LinksPage() {
  const professional = getProfessionalProfiles();

  return (
    <main style={{ padding: "2rem", maxWidth: 480, margin: "0 auto" }}>
      {/* Stage 3 will replace this with the full link-in-bio design */}
      <h1>{site.name}</h1>
      <p>{site.tagline}</p>
      <ul>
        {professional.map((p) => (
          <li key={p.id}>
            <a href={p.url}>{p.label}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

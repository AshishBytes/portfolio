// ---------------------------------------------------------------------------
// Icon literals
// ---------------------------------------------------------------------------

/** Icons accepted by apps/portfolio's existing Zod socialLinkSchema. */
export type ProfessionalIcon = "github" | "linkedin" | "mail";

/** All icons, including follower-facing platforms. */
export type SocialIcon = ProfessionalIcon | "x" | "instagram" | "youtube";

// ---------------------------------------------------------------------------
// Discriminated union — TypeScript enforces that:
//   professional: true  ↔  icon ∈ ProfessionalIcon
//   professional: false ↔  icon ∈ { x, instagram, youtube }
// ---------------------------------------------------------------------------

export interface ProfessionalProfile {
  readonly id: string;
  readonly label: string;
  readonly url: string;
  readonly handle: string;
  readonly icon: ProfessionalIcon;
  readonly professional: true;
}

export interface OtherProfile {
  readonly id: string;
  readonly label: string;
  readonly url: string;
  readonly handle: string;
  readonly icon: Exclude<SocialIcon, ProfessionalIcon>;
  readonly professional: false;
}

/** Union type for all profiles. */
export type SocialProfile = ProfessionalProfile | OtherProfile;

// ---------------------------------------------------------------------------
// Data — `satisfies` validates each entry against the discriminated union.
// If you try to add  { icon: "x", professional: true }  TypeScript will error.
// ---------------------------------------------------------------------------

export const profiles = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/AshishBytes",
    handle: "@AshishBytes",
    icon: "github",
    professional: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/ashishbytes",
    handle: "ashishbytes",
    icon: "linkedin",
    professional: true,
  },
  {
    id: "x",
    label: "X",
    url: "https://x.com/ashishbytes",
    handle: "@ashishbytes",
    icon: "x",
    professional: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/ashishbytes",
    handle: "@ashishbytes",
    icon: "instagram",
    professional: false,
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@ashishbytes",
    handle: "@ashishbytes",
    icon: "youtube",
    professional: false,
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:ashishlodhi5559@gmail.com",
    handle: "ashishlodhi5559@gmail.com",
    icon: "mail",
    professional: true,
  },
] as const satisfies readonly SocialProfile[];

// ---------------------------------------------------------------------------
// Helper — return type is narrowed to ProfessionalProfile[], so callers
// always see  icon: "github" | "linkedin" | "mail"  without a cast.
// ---------------------------------------------------------------------------

export function getProfessionalProfiles(): Extract<(typeof profiles)[number], { professional: true }>[] {
  return profiles.filter(
    (p): p is Extract<(typeof profiles)[number], { professional: true }> =>
      p.professional === true,
  );
}

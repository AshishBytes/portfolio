import { z } from "zod";
import { site, getProfessionalProfiles } from "@repo/config";

const socialLinkSchema = z.object({
  label: z.string().min(1),
  href: z.union([z.url(), z.string().regex(/^mailto:/)]),
  icon: z.enum(["github", "linkedin", "mail"]),
});

const profileSchema = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  location: z.string().min(1),
  email: z.email(),
  image: z.string().startsWith("/"),
  resume: z.string().startsWith("/"),
  socials: z.array(socialLinkSchema).min(2),
});

export const profile = profileSchema.parse({
  // ── values sourced from @repo/config ──────────────────────────────────────
  name: site.name,
  brand: site.brand,
  title: site.tagline,
  email: site.email,
  image: site.photo, // "/images/ashish-singh.jpeg" — verified against public/
  // ── values that stay local to apps/portfolio ───────────────────────────────
  summary:
    "I build backend systems and software tools, with experience in distributed services, automation, and API integrations.",
  location: "Gwalior, Madhya Pradesh, India",
  resume: "/documents/Ashish_Singh_Resume.pdf",
  // getProfessionalProfiles() returns ProfessionalProfile[] whose icon type
  // is "github"|"linkedin"|"mail" — exactly the enum accepted by socialLinkSchema.
  socials: getProfessionalProfiles().map((p) => ({
    label: p.label,
    href: p.url,
    icon: p.icon,
  })),
});

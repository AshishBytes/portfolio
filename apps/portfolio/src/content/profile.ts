import { z } from "zod";

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
  name: "Ashish Singh",
  brand: "Ashish Bytes",
  title: "Software engineer · systems & backend",
  summary:
    "I build distributed systems and software engineering tools, with experience in backend services, network performance, and applied NLP.",
  location: "Gwalior, Madhya Pradesh, India",
  email: "ashishlodhi5559@gmail.com",
  image: "/images/ashish-singh.jpeg",
  resume: "/documents/Ashish_Singh_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/AshishBytes", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ashishbytes",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:ashishlodhi5559@gmail.com", icon: "mail" },
  ],
});

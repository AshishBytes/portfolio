export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Profile {
  name: string;
  brand: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  image: string;
  resume: string;
  socials: SocialLink[];
}

export interface AboutHighlight {
  title: string;
  description: string;
  skills: string[];
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
  pinned?: boolean;
  projectSlug?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  category: string;
  technologies: string[];
  achievements: string[];
  metrics?: ProjectMetric[];
  featured: boolean;
  experiment?: boolean;
  pinned?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  kind: "certification" | "award";
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  date: string;
  summary: string;
  metrics: string[];
  featured: boolean;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface ArticlePreview {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

export interface ArticleDraft {
  slug: string;
  title: string;
  status: "draft";
}

export interface Contributor {
  name: string;
  subtitle: string;
}

export interface Favorite {
  label: string;
  title: string;
  detail: string;
}

export interface Experiment {
  title: string;
  detail: string;
  category: string;
}

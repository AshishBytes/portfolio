import { projectBySlug } from "../content/projects";
import { profile } from "../content/profile";
import { siteConfig } from "./config";

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image: string;
  type?: "website" | "article";
  index?: boolean;
}

const defaultImage = "/images/social-preview.png";
const pageMetadata: Record<string, PageMetadata> = {
  "/": {
    title: "Ashish Singh — Software Engineer",
    description: siteConfig.description,
    path: "/",
    image: defaultImage,
  },
  "/about": {
    title: "About — Ashish Singh",
    description: "Background, education, and focus areas of Ashish Singh.",
    path: "/about",
    image: defaultImage,
  },
  "/experience": {
    title: "Experience — Ashish Singh",
    description:
      "Professional experience in backend engineering, distributed systems, and software development.",
    path: "/experience",
    image: defaultImage,
  },
  "/projects": {
    title: "Projects — Ashish Singh",
    description:
      "Selected project work across applied NLP, backend systems, and offline-first applications.",
    path: "/projects",
    image: defaultImage,
  },
  "/skills": {
    title: "Skills — Ashish Singh",
    description:
      "Technical skills across programming, distributed systems, cloud, machine learning, databases, and systems.",
    path: "/skills",
    image: defaultImage,
  },
  "/achievements": {
    title: "Certifications & Awards — Ashish Singh",
    description: "Certifications and awards listed in Ashish Singh’s resume.",
    path: "/achievements",
    image: defaultImage,
  },
  "/publications": {
    title: "Publications — Ashish Singh",
    description:
      "Research and publication summaries listed in Ashish Singh’s resume.",
    path: "/publications",
    image: defaultImage,
  },
  "/testimonials": {
    title: "Testimonials — Ashish Singh",
    description: "Professional references and testimonials.",
    path: "/testimonials",
    image: defaultImage,
    index: false,
  },
  "/blog": {
    title: "Articles — Ashish Singh",
    description: "Article previews from the existing portfolio content.",
    path: "/blog",
    image: defaultImage,
  },
  "/resume": {
    title: "Resume — Ashish Singh",
    description: "View or download Ashish Singh’s resume.",
    path: "/resume",
    image: defaultImage,
  },
  "/contact": {
    title: "Contact — Ashish Singh",
    description:
      "Get in touch with Ashish Singh about software engineering and collaboration.",
    path: "/contact",
    image: defaultImage,
  },
};

export function getPageMetadata(pathname: string): PageMetadata {
  const path = pathname.replace(/\/$/, "") || "/";
  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = projectBySlug.get(projectMatch[1] ?? "");
    if (project) {
      return {
        title: `${project.title} — Projects by Ashish Singh`,
        description: project.description,
        path,
        image: project.image ?? defaultImage,
        type: "article",
      };
    }
  }
  return (
    pageMetadata[path] ?? {
      title: "Page not found — Ashish Bytes",
      description: "The requested page could not be found.",
      path,
      image: defaultImage,
      index: false,
    }
  );
}

export function getCanonicalUrl(path: string) {
  return new URL(path.replace(/^\//, ""), `${siteConfig.origin}/`).toString();
}

export function getStructuredData(pathname: string) {
  const metadata = getPageMetadata(pathname);
  const projectMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  const project = projectMatch
    ? projectBySlug.get(projectMatch[1] ?? "")
    : undefined;
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.origin,
    description: siteConfig.description,
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.brand,
    url: siteConfig.origin,
    jobTitle: "Software Engineer",
    email: `mailto:${profile.email}`,
    image: getCanonicalUrl(profile.image),
    sameAs: profile.socials
      .filter((social) => social.href.startsWith("https://"))
      .map((social) => social.href),
  };
  const projectData = project
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: project.category,
        author: {
          "@type": "Person",
          name: profile.name,
          url: siteConfig.origin,
        },
        url: getCanonicalUrl(metadata.path),
      }
    : undefined;
  return [website, person, ...(projectData ? [projectData] : [])];
}

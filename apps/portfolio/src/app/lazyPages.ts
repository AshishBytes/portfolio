import { lazy } from "react";

const loadHome = () =>
  import("../pages/HomePage").then(({ HomePage }) => ({ default: HomePage }));
const loadAbout = () =>
  import("../pages/AboutPage").then(({ AboutPage }) => ({
    default: AboutPage,
  }));
const loadExperience = () =>
  import("../pages/ExperiencePage").then(({ ExperiencePage }) => ({
    default: ExperiencePage,
  }));
const loadProjects = () =>
  import("../pages/ProjectsPage").then(({ ProjectsPage }) => ({
    default: ProjectsPage,
  }));
const loadProjectDetail = () =>
  import("../pages/ProjectDetailPage").then(({ ProjectDetailPage }) => ({
    default: ProjectDetailPage,
  }));
const loadSkills = () =>
  import("../pages/SkillsPage").then(({ SkillsPage }) => ({
    default: SkillsPage,
  }));
const loadAchievements = () =>
  import("../pages/AchievementsPage").then(({ AchievementsPage }) => ({
    default: AchievementsPage,
  }));
const loadPublications = () =>
  import("../pages/PublicationsPage").then(({ PublicationsPage }) => ({
    default: PublicationsPage,
  }));
const loadTestimonials = () =>
  import("../pages/TestimonialsPage").then(({ TestimonialsPage }) => ({
    default: TestimonialsPage,
  }));
const loadArticles = () =>
  import("../pages/ArticlesPage").then(({ ArticlesPage }) => ({
    default: ArticlesPage,
  }));
const loadResume = () =>
  import("../pages/ResumePage").then(({ ResumePage }) => ({
    default: ResumePage,
  }));
const loadContact = () =>
  import("../pages/ContactPage").then(({ ContactPage }) => ({
    default: ContactPage,
  }));
const loadNotFound = () =>
  import("../pages/NotFoundPage").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }));

export const HomePage = lazy(loadHome);
export const AboutPage = lazy(loadAbout);
export const ExperiencePage = lazy(loadExperience);
export const ProjectsPage = lazy(loadProjects);
export const ProjectDetailPage = lazy(loadProjectDetail);
export const SkillsPage = lazy(loadSkills);
export const AchievementsPage = lazy(loadAchievements);
export const PublicationsPage = lazy(loadPublications);
export const TestimonialsPage = lazy(loadTestimonials);
export const ArticlesPage = lazy(loadArticles);
export const ResumePage = lazy(loadResume);
export const ContactPage = lazy(loadContact);
export const NotFoundPage = lazy(loadNotFound);

export function preloadPages() {
  return Promise.all([
    loadHome(),
    loadAbout(),
    loadExperience(),
    loadProjects(),
    loadProjectDetail(),
    loadSkills(),
    loadAchievements(),
    loadPublications(),
    loadTestimonials(),
    loadArticles(),
    loadResume(),
    loadContact(),
    loadNotFound(),
  ]);
}

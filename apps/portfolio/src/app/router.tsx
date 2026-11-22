import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { blogLive } from "../content/articles";
import { Container } from "../components/ui/Container";
import {
  AboutPage,
  AchievementsPage,
  ArticlesPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectDetailPage,
  ProjectsPage,
  PublicationsPage,
  ResumePage,
  SkillsPage,
  TestimonialsPage,
} from "./lazyPages";

export function PortfolioRouter() {
  return (
    <Suspense
      fallback={
        <Container className="py-20">
          <output aria-live="polite" className="text-sm text-muted">
            Loading page…
          </output>
        </Container>
      }
    >
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ExperiencePage />} path="/experience" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<ProjectDetailPage />} path="/projects/:slug" />
        <Route element={<SkillsPage />} path="/skills" />
        <Route element={<AchievementsPage />} path="/achievements" />
        <Route element={<PublicationsPage />} path="/publications" />
        <Route element={<TestimonialsPage />} path="/testimonials" />
        <Route
          element={blogLive ? <ArticlesPage /> : <NotFoundPage />}
          path="/blog"
        />
        <Route element={<ResumePage />} path="/resume" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Suspense>
  );
}

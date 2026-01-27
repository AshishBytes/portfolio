import { HeroHeader } from "@/components/portfolio/hero-header"
import { BioCard } from "@/components/portfolio/bio-card"
import { ProfileCard } from "@/components/portfolio/profile-card"
import { RecentFavorite } from "@/components/portfolio/recent-favorite"
import { ExperimentsCard } from "@/components/portfolio/experiments-card"
import { ArticlesSection } from "@/components/portfolio/articles-section"
import { SelectedWorks } from "@/components/portfolio/selected-works"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-8 lg:px-12 lg:py-12">

        {/* Hero */}
        <header className="mb-8 lg:mb-12">
          <HeroHeader />
        </header>

        {/* ===== TOP GRID (REFERENCE LAYOUT) ===== */}
        <section
          className="
            mb-8
            grid
            gap-4
            md:grid-cols-12
            md:items-stretch
            lg:mb-12
          "
        >
          {/* Bio */}
          <div className="md:col-span-3">
            <BioCard />
          </div>

          {/* Profile */}
          <div className="md:col-span-6">
            <ProfileCard />
          </div>

          {/* Right Widgets */}
          <div className="flex flex-col gap-4 md:col-span-3">
            <RecentFavorite />
            <ExperimentsCard />
          </div>
        </section>

        {/* Articles */}
        <section className="mb-8 lg:mb-12">
          <ArticlesSection />
        </section>

        {/* Selected Works */}
        <section className="mb-8 lg:mb-12">
          <SelectedWorks />
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ashish Bytes. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  )
}

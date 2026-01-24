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
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:py-12">
        {/* Hero Header */}
        <header className="mb-8 lg:mb-12">
          <HeroHeader />
        </header>

        {/* Main Grid - Bio, Profile, Widgets */}
        <section className="mb-8 grid gap-4 md:grid-cols-2 lg:mb-12 lg:grid-cols-4">
          {/* Bio Card - spans 1 column on mobile, 1 on md, 1.5 equivalent on lg */}
          <div className="md:col-span-1 lg:col-span-1">
            <BioCard />
          </div>

          {/* Profile Card */}
          <div className="md:col-span-1 lg:col-span-2">
            <ProfileCard />
          </div>

          {/* Right Side Widgets */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <RecentFavorite />
            <ExperimentsCard />
          </div>
        </section>

        {/* Articles Section */}
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

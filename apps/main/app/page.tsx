import { HeroHeader } from "@/components/portfolio/hero-header"
import { BioCard } from "@/components/portfolio/bio-card"
import { ProfileCard } from "@/components/portfolio/profile-card"
import { RecentFavorite } from "@/components/portfolio/recent-favorite"
import { ExperimentsCard } from "@/components/portfolio/experiments-card"
import { ArticlesSection } from "@/components/portfolio/articles-section"
import { SelectedWorks } from "@/components/portfolio/selected-works"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-8 lg:px-8 lg:py-10">

        {/* Hero */}
        <header className="mb-6 lg:mb-8">
          <HeroHeader />
        </header>

        {/* Main Grid - Bio, Profile, Widgets */}
        <section className="mb-6 grid gap-4 md:grid-cols-12 md:items-stretch lg:mb-8 lg:h-[440px]">
          {/* Left bio - spans 5/12 */}
          <div className="md:col-span-5">
            <div className="h-full">
              <BioCard />
            </div>
          </div>

          {/* Center profile - spans 4/12 */}
          <div className="md:col-span-4">
            <div className="h-full">
              <ProfileCard />
            </div>
          </div>

          {/* Right widgets - spans 3/12, two stacked halves */}
          <div className="md:col-span-3 flex flex-col gap-4 h-full">
            <div className="flex-1">
              <RecentFavorite />
            </div>
            <div className="flex-1">
              <ExperimentsCard />
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="mb-6 lg:mb-8">
          <ArticlesSection />
        </section>

        {/* Selected Works */}
        <section className="mb-6 lg:mb-8">
          <SelectedWorks />
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ashish Bytes. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  )
}

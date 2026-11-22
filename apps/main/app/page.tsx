import { NavBar }          from "@/components/portfolio/nav-bar"
import { HeroHeader }      from "@/components/portfolio/hero-header"
import { BioCard }         from "@/components/portfolio/bio-card"
import { ProfileCard }     from "@/components/portfolio/profile-card"
import { RecentFavorite }  from "@/components/portfolio/recent-favorite"
import { ExperimentsCard } from "@/components/portfolio/experiments-card"
import { ArticlesSection } from "@/components/portfolio/articles-section"
import { SelectedWorks }   from "@/components/portfolio/selected-works"
import { Footer }          from "@/components/portfolio/footer"

export default function HomePage() {
  return (
    <>
      {/* Sticky navigation */}
      <NavBar />

      <main className="min-h-screen bg-background pt-14">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-10 lg:px-8 lg:py-14">

          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <header className="mb-10 lg:mb-14" id="hero">
            <HeroHeader />
          </header>

          {/* ── Bento grid: Bio · Profile · Widgets ───────────────────────── */}
          <section
            id="bio"
            aria-label="About Ashish"
            className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-12 lg:mb-14"
          >
            {/* Bio — 5 cols */}
            <div className="md:col-span-5">
              <BioCard />
            </div>

            {/* Profile photo — 4 cols */}
            <div className="min-h-[320px] md:col-span-4 md:min-h-0">
              <ProfileCard />
            </div>

            {/* Right widgets — 3 cols, stacked */}
            <div className="flex flex-col gap-4 md:col-span-3">
              <div className="flex-1">
                <RecentFavorite />
              </div>
              <div className="flex-1">
                <ExperimentsCard />
              </div>
            </div>
          </section>

          {/* ── Publications & Research ────────────────────────────────────── */}
          <section className="mb-10 lg:mb-14" aria-label="Publications and research">
            <ArticlesSection />
          </section>

          {/* ── Selected Works ─────────────────────────────────────────────── */}
          <section className="mb-10 lg:mb-14" aria-label="Selected projects">
            <SelectedWorks />
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

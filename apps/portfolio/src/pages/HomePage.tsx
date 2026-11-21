import { ArticlesSection } from "../features/home/components/ArticlesSection";
import { BioCard } from "../features/home/components/BioCard";
import { ExperimentsCard } from "../features/home/components/ExperimentsCard";
import { HeroHeader } from "../features/home/components/HeroHeader";
import { ProfileCard } from "../features/home/components/ProfileCard";
import { RecentFavorite } from "../features/home/components/RecentFavorite";
import { SelectedWorks } from "../features/home/components/SelectedWorks";
import { Container } from "../components/ui/Container";

export function HomePage() {
  return (
    <>
      <HeroHeader />
      <Container>
        <section
          aria-label="Profile and current focus"
          className="grid gap-5 pb-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(18rem,0.88fr)]"
        >
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.78fr)] lg:grid-rows-[minmax(17rem,auto)_auto]">
            <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
              <BioCard />
            </div>
            <div className="min-h-64 sm:col-span-1 lg:min-h-0">
              <RecentFavorite />
            </div>
            <div className="sm:col-span-1">
              <ExperimentsCard />
            </div>
          </div>
          <div className="min-h-[26rem] lg:min-h-0">
            <ProfileCard />
          </div>
        </section>
        <SelectedWorks />
        <ArticlesSection />
      </Container>
    </>
  );
}

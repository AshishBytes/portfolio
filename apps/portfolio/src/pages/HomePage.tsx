import { ArticlesSection } from "../features/home/components/ArticlesSection";
import { BioCard } from "../features/home/components/BioCard";
import { ContributorsStrip } from "../features/home/components/ContributorsStrip";
import { FeaturedPublication } from "../features/home/components/FeaturedPublication";
import { FocusExperimentsCard } from "../features/home/components/FocusExperimentsCard";
import { HeroHeader } from "../features/home/components/HeroHeader";
import { ProfileCard } from "../features/home/components/ProfileCard";
import { SelectedWorks } from "../features/home/components/SelectedWorks";
import { Container } from "../components/ui/Container";

export function HomePage() {
  return (
    <>
      <HeroHeader />
      <Container>
        <section
          aria-label="Profile and current work"
          className="grid gap-5 pb-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(18rem,0.88fr)]"
        >
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,0.78fr)]">
            <BioCard />
            <FocusExperimentsCard />
          </div>
          <div className="min-h-[26rem] lg:min-h-0">
            <ProfileCard />
          </div>
        </section>
        <SelectedWorks />
        <ContributorsStrip />
        <FeaturedPublication />
        <ArticlesSection />
      </Container>
    </>
  );
}

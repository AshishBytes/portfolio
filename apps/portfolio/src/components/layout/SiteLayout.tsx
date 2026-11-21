import type { ReactNode } from "react";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";
import { Footer } from "./Footer";
import { ResponsiveNavigation } from "../navigation/ResponsiveNavigation";
import { SeoSync } from "./SeoSync";

function RouteEffects() {
  useScrollRestoration();
  return null;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-page text-ink">
      <RouteEffects />
      <SeoSync />
      <ResponsiveNavigation />
      <main id="main-content" className="min-h-[65vh]" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

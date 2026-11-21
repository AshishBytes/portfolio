import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../app/providers";
import { profile } from "../../content/profile";
import { cn } from "../../lib/cn";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";
import { NavigationLink } from "./NavigationLink";

const primaryLinks = [
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Writing", to: "/blog" },
];

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "light" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-ink"
    >
      <Icon aria-hidden="true" size={17} />
    </button>
  );
}

function HeaderContents() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
        href="#main-content"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur-xl">
        <Container className="flex h-[4.5rem] items-center justify-between gap-4">
          <Link
            aria-label={`${profile.brand}, home`}
            className="group inline-flex items-baseline gap-1"
            to="/"
          >
            <span className="font-display text-[1.45rem] font-semibold tracking-tight">
              ashish
            </span>
            <span className="text-xl font-semibold text-accent">.</span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {primaryLinks.map((item) => (
              <NavigationLink key={item.to} end={false} to={item.to}>
                {item.label}
              </NavigationLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeButton />
            <ButtonLink
              className="hidden sm:inline-flex"
              size="small"
              to="/contact"
            >
              Contact <ArrowUpRight aria-hidden="true" size={15} />
            </ButtonLink>
            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            >
              {isOpen ? (
                <X aria-hidden="true" size={18} />
              ) : (
                <Menu aria-hidden="true" size={18} />
              )}
            </button>
          </div>
        </Container>

        <div
          id="mobile-navigation"
          className={cn(
            "absolute inset-x-0 top-full border-b border-line bg-page px-4 pb-4 pt-2 shadow-card lg:hidden",
            !isOpen && "hidden",
          )}
          hidden={!isOpen}
        >
          <nav
            aria-label="Mobile navigation"
            className="page-container flex flex-col gap-1"
          >
            <NavigationLink compact onClick={closeMenu} to="/">
              Home
            </NavigationLink>
            {primaryLinks.map((item) => (
              <NavigationLink
                compact
                key={item.to}
                onClick={closeMenu}
                to={item.to}
              >
                {item.label}
              </NavigationLink>
            ))}
            <NavigationLink compact onClick={closeMenu} to="/resume">
              Resume
            </NavigationLink>
            <NavigationLink compact onClick={closeMenu} to="/contact">
              Contact
            </NavigationLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export function ResponsiveNavigation() {
  return <HeaderContents />;
}

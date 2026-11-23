import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig } from "motion/react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const themeEvent = "portfolio-theme-change";
const getThemeSnapshot = (): Theme => {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem("portfolio-theme") === "dark"
    ? "dark"
    : "light";
};
const getServerThemeSnapshot = (): Theme => "light";
const subscribeToTheme = (onChange: () => void) => {
  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = {
    theme,
    toggleTheme: (origin?: { x: number; y: number }) => {
      const nextTheme = theme === "light" ? "dark" : "light";
      const root = document.documentElement;

      window.localStorage.setItem("portfolio-theme", nextTheme);
      root.dataset.theme = nextTheme;

      if (
        origin &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        root.style.setProperty("--theme-origin-x", `${origin.x}px`);
        root.style.setProperty("--theme-origin-y", `${origin.y}px`);
        root.classList.remove("theme-reveal");
        // Restart the reveal when the same control is clicked repeatedly.
        void root.offsetWidth;
        root.classList.add("theme-reveal");
        window.setTimeout(() => {
          root.classList.remove("theme-reveal");
        }, 700);
      }

      window.dispatchEvent(new Event(themeEvent));
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }
  return value;
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>{children}</ThemeProvider>
    </MotionConfig>
  );
}

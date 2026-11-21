import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function useScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const previousMode = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousMode;
    };
  }, []);

  useEffect(() => {
    const storageKey = `portfolio-scroll:${location.key}`;
    if (navigationType === "POP") {
      const savedPosition = Number(
        window.sessionStorage.getItem(storageKey) ?? 0,
      );
      requestAnimationFrame(() => window.scrollTo(0, savedPosition));
    } else {
      window.scrollTo(0, 0);
    }

    const savePosition = () => {
      window.sessionStorage.setItem(storageKey, String(window.scrollY));
    };
    window.addEventListener("scroll", savePosition, { passive: true });
    return () => window.removeEventListener("scroll", savePosition);
  }, [location.key, navigationType]);
}

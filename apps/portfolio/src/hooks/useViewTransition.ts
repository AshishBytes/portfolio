import { useCallback } from "react";

interface ViewTransitionOptions {
  /**
   * Coordinates where the transition should originate from.
   * If not provided, the transition will be instant.
   */
  x?: number;
  y?: number;
}

/**
 * Hook to handle View Transitions API with circular reveal animation.
 * Respects prefers-reduced-motion and provides fallback for unsupported browsers.
 */
export function useViewTransition() {
  const startTransition = useCallback(
    async (
      callback: () => void | Promise<void>,
      options?: ViewTransitionOptions,
    ) => {
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Check if View Transitions API is supported
      const supportsViewTransitions =
        "startViewTransition" in document &&
        typeof (document as any).startViewTransition === "function";

      // If reduced motion or no support, just run the callback immediately
      if (prefersReducedMotion || !supportsViewTransitions) {
        await callback();
        return;
      }

      // If we have coordinates, set up the circular reveal animation
      if (options?.x !== undefined && options?.y !== undefined) {
        const { x, y } = options;

        // Calculate the radius needed to cover the entire viewport
        // from the click point to the farthest corner
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        );

        // Set CSS custom properties for the animation
        document.documentElement.style.setProperty("--x", `${x}px`);
        document.documentElement.style.setProperty("--y", `${y}px`);
        document.documentElement.style.setProperty(
          "--end-radius",
          `${endRadius}px`,
        );
      }

      // Start the view transition
      const transition = (document as any).startViewTransition(async () => {
        await callback();
      });

      // Wait for the transition to complete
      try {
        await transition.ready;
      } catch (error) {
        // Transition was skipped, that's okay
        console.debug("View transition skipped:", error);
      }
    },
    [],
  );

  return { startTransition };
}

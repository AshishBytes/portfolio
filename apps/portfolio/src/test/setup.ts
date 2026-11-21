import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, vi } from "vitest";
import { cleanup, configure } from "@testing-library/react";

configure({ asyncUtilTimeout: 5_000 });

beforeEach(() => {
  window.localStorage.clear();
  Object.defineProperty(window, "scrollTo", {
    configurable: true,
    value: vi.fn<() => void>(),
  });
});

afterEach(() => cleanup());

import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, vi } from "vitest";
import { cleanup, configure } from "@testing-library/react";

configure({ asyncUtilTimeout: 5_000 });

function createStorage(): Storage {
  const values = new Map<string, string>();
  return {
    get length() {
      return values.size;
    },
    clear: () => values.clear(),
    getItem: (key) => values.get(String(key)) ?? null,
    key: (index) => Array.from(values.keys())[index] ?? null,
    removeItem: (key) => values.delete(String(key)),
    setItem: (key, value) => values.set(String(key), String(value)),
  };
}

for (const storageName of ["localStorage", "sessionStorage"] as const) {
  if (typeof window[storageName] === "undefined") {
    Object.defineProperty(window, storageName, {
      configurable: true,
      value: createStorage(),
    });
  }
}

beforeEach(() => {
  window.localStorage.clear();
  Object.defineProperty(window, "scrollTo", {
    configurable: true,
    value: vi.fn<() => void>(),
  });
});

afterEach(() => cleanup());

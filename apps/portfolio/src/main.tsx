import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "./app/providers";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("The root element was not found.");
}

const application = (
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviders>
  </StrictMode>
);

if (rootElement.dataset.prerendered === "true") {
  hydrateRoot(rootElement, application, {
    onRecoverableError(error, info) {
      console.error(
        "Portfolio hydration recovered from an error.",
        error,
        info.componentStack,
      );
    },
  });
} else {
  createRoot(rootElement).render(application);
}

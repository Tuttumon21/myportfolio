import "./lib/sentry";
import * as Sentry from "@sentry/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<h1>An error occurred.</h1>}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>
);

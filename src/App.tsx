import * as Sentry from "@sentry/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Toaster } from "sonner";
import { useAuthStore } from "./store/authStore";

import NotFound from "./pages/404page/NotFound";
import LoginScreen from "./pages/authpage/LoginScreen";
import WelcomeMessage from "./pages/welcomepage/WelcomeMessage";
import AuthCallback from "./pages/callback/AuthCallback";
import Home from "./pages/homepage/Home";
import Navbar from "./pages/navbarpage/Navbar";
import About from "./pages/aboutpage/About";
import Progress from "./pages/progresspage/Progress";

const ExperienceLoader = () => import("./pages/experiencepage/Experience");
const TechstackLoader = () => import("./pages/techstackpage/Techstack");
const SofttoolLoader = () => import("./pages/softtoolpage/Softtool");
const ProjectLoader = () => import("./pages/projectpage/Project");
const TestimonialsLoader = () => import("./pages/testimonialpage/Testimonials");
const ContactLoader = () => import("./pages/contactpage/Contact");
const NameLoader = () => import("./pages/namepage/Name");
const FooterLoader = () => import("./pages/footerpage/Footer");

function SectionPlaceholder({ height = 600 }: { height?: number }) {
  return (
    <div
      aria-busy="true"
      role="status"
      className="w-full bg-black flex items-center justify-center text-white text-xl font-semibold"
      style={{ minHeight: height }}
    >
      Loading
    </div>
  );
}

function LazyOnVisible({
  loader,
  placeholder,
}: {
  loader: () => Promise<{ default: React.ComponentType<any> }>;
  placeholder?: React.ReactNode;
}) {
  const [Comp, setComp] = useState<React.ComponentType<any> | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let obs: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !Comp) {
          loader().then((m) => setComp(() => m.default));
          if (obs) {
            obs.disconnect();
            obs = null;
          }
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => {
      if (obs) obs.disconnect();
    };
  }, [loader, Comp]);

  return (
    <div ref={ref}>
      {Comp ? <Comp /> : placeholder ?? <SectionPlaceholder />}
    </div>
  );
}

function AppComponent() {
  const { isAuthenticated, isGuest, showWelcome } = useAuthStore();

  const handleLoginSuccess = () => {
  };

  useEffect(() => {
    fetch("https://portfolion8n.app.n8n.cloud/webhook/website-visit", {
      method: "GET",
    }).catch(() => {});
  }, []);

  // Check if user is already authenticated or guest on app load
  // useEffect(() => {
  //   if (isAuthenticated || isGuest) {
  //     setShowContent(true);
  //   }
  //   setIsLoading(false);
  // }, [isAuthenticated, isGuest]);

  // if (isLoading) {
  //   return <SectionPlaceholder height={window.innerHeight} />;
  // }

  if (!isAuthenticated && !isGuest) {
    return (
      <>
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }
  return (
    <Router>
      <Toaster position="top-center" />

      {showWelcome && <WelcomeMessage onComplete={() => {}} />}
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />

          <Route
            path="/"
            element={
              <div className="">
                <Home />
                <About />
                <LazyOnVisible loader={ExperienceLoader} />
                <LazyOnVisible loader={TechstackLoader} />
                <LazyOnVisible loader={SofttoolLoader} />
                <LazyOnVisible loader={ProjectLoader} />
                <LazyOnVisible loader={TestimonialsLoader} />
                <LazyOnVisible loader={ContactLoader} />
                <LazyOnVisible loader={NameLoader} />
                <LazyOnVisible
                  loader={FooterLoader}
                  placeholder={<SectionPlaceholder height={300} />}
                />
              </div>
            }
          />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

const App = Sentry.withProfiler(AppComponent);

export default App;

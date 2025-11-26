import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { useAuthStore } from "./store/authStore";

import NotFound from "./pages/404page/NotFound";
import LoginScreen from "./pages/authpage/LoginScreen";
import WelcomeMessage from "./pages/welcomepage/WelcomeMessage";
import AuthCallback from "./pages/callback/AuthCallback";
import Home from "./pages/homepage/Home";
import Navbar from "./pages/navbarpage/Navbar";
import About from "./pages/aboutpage/About";
import Experience from "./pages/experiencepage/Experience";
import Techstack from "./pages/techstackpage/Techstack";
import Softtool from "./pages/softtoolpage/Softtool";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import Testimonials from "./pages/testimonialpage/Testimonials";
import Project from "./pages/projectpage/Project";
import Name from "./pages/namepage/Name";
import Footer from "./pages/footerpage/Footer";
import Progress from "./pages/progresspage/Progress";
import Contact from "./pages/contactpage/Contact";

function App() {
  const { isAuthenticated, isGuest, showWelcome } = useAuthStore();
  const [showContent, setShowContent] = useState(false);

  const handleLoginSuccess = () => {
    setShowContent(true);
  };

  // Check if user is already authenticated or guest on app load
  useEffect(() => {
    if (isAuthenticated || isGuest) {
      setShowContent(true);
    }
  }, [isAuthenticated, isGuest]);

  if (!showContent) {
    return (
      <>
        <SmoothCursor />
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }
  return (
    <Router>
      <Toaster position="top-center" />

      {showWelcome && <WelcomeMessage onComplete={() => {}} />}
      <Navbar />
      <main className="relative cursor-none">
        <SmoothCursor />
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />

          <Route
            path="/"
            element={
              <div className="">
                <Home />
                <About />
                <Experience />
                <Techstack />
                <Softtool />
                <Project />
                <Testimonials />
                <Contact />
                <Name />
                <Footer onSignOut={() => setShowContent(false)} />
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

export default App;

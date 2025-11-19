import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }
  return (
    <Router>
      <Toaster position="top-center" />

      {showWelcome && <WelcomeMessage onComplete={() => {}} />}

      <Navbar />
      <main
        className="relative"
      >
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />

          <Route
            path="/"
            element={
              <div className="">
                <Home />
                <About />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
interface welcomeMessageProps {
  onComplete: () => void;
}

const WelcomeMessage = ({ onComplete }: welcomeMessageProps) => {
  const { user, hideWelcome } = useAuthStore();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        hideWelcome();
        onComplete();
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isVisible && (
        <div>
          <h2>Welcome, {user?.name || "User"}!</h2>
          <p>We're glad you're here.</p>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;

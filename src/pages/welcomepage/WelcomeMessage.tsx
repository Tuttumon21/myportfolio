import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import SplitText from "@/components/SplitText";
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
    <div className="w-full h-screen flex items-center justify-center bg-black">
      {isVisible && (
        <div className="text-center flex flex-col gap-4">
          <SplitText
            text={`Welcome, ${user?.name || "User"}!`}
            className="md:text-7xl text-4xl font-bebas text-white"
            delay={500}
            duration={1}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            tag="h1"
          />
          <SplitText
            text="I’m glad you’re here — enjoy exploring what I’ve built."
            className="md:text-7xl text-4xl font-bebas text-white"
            delay={300}
            duration={1}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            tag="h1"
          />
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;

import { useEffect, useState, lazy, Suspense } from "react";
import SplitText from "@/components/SplitText";
const Logork = lazy(() => import("@/canvas/Logork"));

const Home = () => {
  const [showBlast, setShowBlast] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const ric = (window as any).requestIdleCallback;
    if (typeof ric === "function") {
      const id = ric(() => setShowBlast(true), { timeout: 1500 });
      return () => (window as any).cancelIdleCallback?.(id);
    } else {
      const t = setTimeout(() => setShowBlast(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <div className="h-screen relative bg-black overflow-hidden">
      {showBlast && (
        <Suspense fallback={null}>
          <Logork/>
        </Suspense>
      )}

      {/* Limit width & align left */}
      <div className="absolute md:inset-0 top-10 flex flex-col gap-2 pointer-events-auto items-start justify-center p-10">
        <SplitText
          text="Rakesh K R"
          className="md:text-7xl text-4xl font-bebas text-center text-white"
          delay={100}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
          tag="h1"
        />
        <SplitText
          text="Software Developer"
          className="md:text-5xl text-3xl font-bebas text-center text-white"
          delay={100}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
          tag="h2"
        />
      </div>

      {/* <div className="absolute inset-0 flex flex-col gap-2 pointer-events-auto items-end justify-center p-10 right-30"> */}
        {/* Limit width & align left */}
        {/* <div className="lg:flex flex-col gap-2 pointer-events-auto hidden">
          <ProfileCard
            avatarUrl={profile}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </div> */}
      {/* </div> */}
      <div className="absolute inset-0 flex flex-col gap-2 pointer-events-auto items-center justify-end p-10">
        {/* Limit width & align left */}
        <div className="flex flex-col gap-2 pointer-events-auto">
          <SplitText
            text="Solving problems through logic, innovation, and code"
            className="text-2xl font-bebas text-center text-white"
            delay={100}
            duration={2}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import LaserFlow from "@/components/LaserFlow";
import { useRef } from "react";
// import image from "@/assets/images/icons.webp";
import ScrambledText from "@/components/ScrambledText";

const About = () => {
  const revealImgRef = useRef<HTMLImageElement>(null);
  return (
    <>
      <div
        id="about"
        role="about"
        style={{
          height: "800px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty("--mx", `${x}px`);
            el.style.setProperty("--my", `${y}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty("--mx", "-9999px");
            el.style.setProperty("--my", "-9999px");
          }
        }}
      >
        <LaserFlow
          horizontalBeamOffset={0.2}
          verticalBeamOffset={0}
          verticalSizing={3}
          horizontalSizing={0.7}
          color="#3C14C3"
          fogFallSpeed={5}
          falloffStart={0.5}
          decay={0.9}
          flowStrength={2}
          wispIntensity={50}
          wispSpeed={50}
          fogScale={0.2}
          fogIntensity={0.2}
          flowSpeed={0.3}
          wispDensity={2}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[86%] h-[53%] bg-transparent rounded-[20px] border-2 border-[#331DE0] flex items-center justify-center text-white text-2xl z-[6]">
          <ScrambledText
            className="scrambled-text-demo text-xs font-bebas"
            radius={50}
            duration={1}
            speed={0.1}
            scrambleChars=".:"
          >
            <span className="text-4xl font-bebas">About ME</span>
            <br />
            <br />
            <p className="break-normal whitespace-normal font-sansita">
              I’m a Jr. Software Developer with 2 years of experience building
              scalable, user-focused applications across web and cloud
              platforms. I work with modern stacks including React, Vite,
              Python, FastAPI, Node.js, PostgreSQL, MongoDB, Docker, AWS, and
              Kubernetes, specializing in microservices architecture and
              end-to-end system design.
              <br />
              <br />I value ownership, performance, and long-term
              maintainability, and I approach every project with a focus on
              scalability, clean architecture, and great user experience. My
              goal is to create impactful software that grows smoothly—both
              technically and for the business it supports.
            </p>
          </ScrambledText>
        </div>

        {/* <img
          ref={revealImgRef}
          src={image}
          alt="Reveal effect"
          loading="lazy"
          className="opacity-[0.3] md:opacity-60 absolute w-full top-0 z-[5] mix-blend-lighten pointer-events-none"
          style={
            {
              WebkitMaskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              maskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            } as React.CSSProperties
          }
        /> */}
      </div>
    </>
  );
};

export default About;

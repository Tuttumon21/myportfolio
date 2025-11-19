import Beams from "@/components/Beams";
import Shuffle from "@/components/Shuffle";
import "../../index.css";  

const NotFound = () => {
  return (
    <div className="h-screen relative">
      <Beams
        beamWidth={2}
        beamHeight={30}
        beamNumber={10}
        lightColor="#CBD8F0"
        speed={10}
        noiseIntensity={1}
        scale={0.2}
        rotation={45}
      />
      <div className="absolute inset-0  flex items-center justify-center">
        <Shuffle
          text="404 Not Found!"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className="text-lg text-slate-300"
        />
      </div>
    </div>
  );
};

export default NotFound;

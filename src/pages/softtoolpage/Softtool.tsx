import { LogoCloud } from "@/components/logo-cloud-2";

const Softtool = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="max-w-9xl w-full space-y-8">
        <div className="text-center font-bebas space-y-4">
          <h1 className="text-5xl font-bold text-white">
            My AI-Powered Development Tools
          </h1>
          <p className="text-neutral-400 text-lg">
            The technologies and AI workflows I use to build powerful
            applications
          </p>
        </div>
        <LogoCloud />
      </div>
    </div>
  );
};

export default Softtool;

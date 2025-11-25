import FloatingLines from "@/components/FloatingLines";
import { MinimalFooter } from "@/components/minimal-footer";

interface NavbarProps {
  onSignOut?: () => void;
}

const Footer = ({ onSignOut }: NavbarProps) => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background FloatingLines */}
      <div className="absolute inset-0">
        <FloatingLines
          enabledWaves={["middle"]}
          lineCount={[15]}
          lineDistance={[15]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Foreground footer content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <MinimalFooter onSignOut={onSignOut} />
      </div>
    </div>
  );
};

export default Footer;

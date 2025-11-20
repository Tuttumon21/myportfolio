import { LogoLoop } from "@/components/LogoLoop";
import awsq from "@/assets/icons/amazon-q.svg";
import claude from "@/assets/icons/claude-ai-wordmark-icon_dark.svg";
import n8n from "@/assets/icons/n8n.svg";
import copilot from "@/assets/icons/copilot_dark.svg";
import framer from "@/assets/icons/framer_dark.svg";
import gemini from "@/assets/icons/gemini_wordmark.svg";
import mcp from "@/assets/icons/model-context-protocol-dark.svg";
import openai from "@/assets/icons/openai_wordmark_dark.svg";
import openrouter from "@/assets/icons/openrouter_dark.svg";
import perplexity from "@/assets/icons/perplexity_wordmark_dark.svg";
import replit from "@/assets/icons/replit-wordmark-dark.svg";
import trae from "@/assets/icons/trae-color.svg";
import vscode from "@/assets/icons/vscode.svg";

const Softtool = () => {
  const techLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      alt: "Visual Studio Code",
    },
    { src: awsq, alt: "Amazon Q" },
    { src: openai, alt: "OpenAI" },
    { src: trae, alt: "Trae" },
  ];
  const techLogos2 = [
    { src: claude, alt: "Claude AI" },
    { src: mcp, alt: "Model Context Protocol" },
    { src: gemini, alt: "Google Gemini" },
    { src: replit, alt: "Replit" },
  ];
  const techLogos3 = [
    { src: n8n, alt: "n8n" },
    { src: copilot, alt: "GitHub Copilot" },
    { src: framer, alt: "Framer" },
    { src: openrouter, alt: "OpenRouter" },
    { src: perplexity, alt: "Perplexity" },
  ];

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

        <LogoLoop
          logos={techLogos}
          speed={0}
          direction="left"
          logoHeight={90}
          gap={210}
          pauseOnHover
        />
        <LogoLoop
          logos={techLogos2}
          speed={0}
          direction="left"
          logoHeight={80}
          gap={120}
          pauseOnHover
  
        />
        <LogoLoop
          logos={techLogos3}
          speed={0}
          direction="left"
          logoHeight={90}
          gap={150}
          pauseOnHover
   
        />
      </div>
    </div>
  );
};

export default Softtool;

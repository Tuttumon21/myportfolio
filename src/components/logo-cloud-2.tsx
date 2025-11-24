import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import trae from "@/assets/icons/trae-color.svg";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <LogoCard
        className="relative"
        logo={{
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          alt: "Visual Studio Code Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className=""
        logo={{
          src: "https://svgl.app/library/amazon-q.svg",
          alt: "Amazon Q Logo",
        }}
      />

      <LogoCard
        className="relative"
        logo={{
          src: trae,
          alt: "Trae Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative"
        logo={{
          src: "https://svgl.app/library/openai_wordmark_dark.svg",
          alt: "OpenAI Logo",
        }}
      />
      <LogoCard
        className=""
        logo={{
          src: "https://svgl.app/library/claude-ai-wordmark-icon_dark.svg",
          alt: "Claude AI Logo",
        }}
      />

      <LogoCard
        className=""
        logo={{
          src: "https://svgl.app/library/perplexity_wordmark_dark.svg",
          alt: "Perplexity Logo",
        }}
      />
      <LogoCard
        className=""
        logo={{
          src: "https://svgl.app/library/gemini_wordmark.svg",
          alt: "Gemini Logo",
        }}
      />
      <LogoCard
        className="relative"
        logo={{
          src: "https://svgl.app/library/replit-wordmark-dark.svg",
          alt: "Replit Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard
        className="relative"
        logo={{
          src: "https://svgl.app/library/copilot_dark.svg",
          alt: "Copilot Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>
      <LogoCard
        className=""
        logo={{
          src: "https://svgl.app/library/model-context-protocol-dark.svg",
          alt: "Model Context Protocol Logo",
        }}
      />
      <LogoCard
        className=""
        logo={{
          src: "https://svgl.app/library/openrouter_dark.svg",
          alt: "OpenRouter Logo",
        }}
      />
      <LogoCard
        className="relative"
        logo={{
          src: "https://svgl.app/library/n8n.svg",
          alt: "n8n Logo",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-4 py-8 md:p-8 bg-black",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none md:h-10"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}

import {
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import ProfileDropdown from "./kokonutui/profile-dropdown";
import { LinkPreview } from "./ui/link-preview";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onSignOut?: () => void;
}

export function MinimalFooter({ onSignOut }: NavbarProps) {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const website = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Hire Me",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
  ];

  const resources = [
    {
      title: "Projects",
      href: "#",
    },
    {
      title: "Help Center",
      href: "#",
    },
    {
      title: "Contact Support",
      href: "#",
    },
    {
      title: "Progress",
      href: "/progress",
    },
  ];

  const socialLinks = [
    {
      icon: <GithubIcon className="size-4" />,
      link: "https://github.com/tuttumon21",
    },
    {
      icon: <LinkedinIcon className="size-4" />,
      link: "https://www.linkedin.com/in/rakesh-k-r",
    },
    //   {
    // 	icon: <YoutubeIcon className="size-4" />,
    // 	link: "https://www.youtube.com/channel/epicplayyt",
    //   },
    // {
    //   icon: <FacebookIcon className="size-4" />,
    //   link: "#",
    // },
    // {
    //   icon: <InstagramIcon className="size-4" />,
    //   link: "#",
    // },
    // {
    //   icon: <TwitterIcon className="size-4" />,
    //   link: "#",
    // },
  ];
  return (
    <footer role="footer" className="relative text-white">
      <div className="bg-border absolute inset-x-0 h-px w-full" />
      <div className="grid grid-cols-10 gap-6 p-4">
        <div className="col-span-8 flex flex-col gap-5 md:col-span-8">
          <ProfileDropdown onSignOut={onSignOut}/>

          <p className="text-muted-foreground max-w-sm font-bebas text-sm text-balance">
            Transforming complex challenges into elegant solutions.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((item, i) => (
              <LinkPreview url={item.link}>
                <button
                  onClick={() =>
                    window.open(item.link, "_blank", "noopener,noreferrer")
                  }
                  key={i}
                  className="hover:bg-accent rounded-md border p-1.5 cursor-pointer bg-white"
                >
                  {item.icon}
                </button>
              </LinkPreview>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-muted-foreground mb-1 text-xs">Resources</span>
          <div className="flex flex-col gap-1">
            {resources.map(({ href, title }, i) => (
              <button
                key={i}
                className={`w-max py-1 text-sm duration-200 hover:underline text-left`}
                onClick={() => navigate(href)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-muted-foreground mb-1 text-xs">Website</span>
          <div className="flex flex-col gap-1">
            {website.map(({ href, title }, i) => (
              <button
                key={i}
                className={`w-max py-1 text-sm duration-200 hover:underline text-left`}
                onClick={() => navigate(href)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-border absolute inset-x-0 h-px w-full" />
      <div className="flex flex-col justify-between gap-2 pt-2 pb-5 font-bebas">
        <p className="text-muted-foreground text-center font-thin">
          © <span>Rakesh K R</span>. All rights reserved {year}
        </p>
      </div>
    </footer>
  );
}

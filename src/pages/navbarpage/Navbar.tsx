import {StaggeredMenu} from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Experience", ariaLabel: "View my timeline", link: "/experience" },
  { label: "Project", ariaLabel: "View my projects", link: "/projects" },
  {
    label: "Testimonials",
    ariaLabel: "View my testimonials",
    link: "/testimonials",
  },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Whatsapp", link: "https://wa.me/919310000000" },
  { label: "Resume", link: "https://rakesh.md" },
];

const Navbar = () => {
  return (
    <div className="h-screen absolute w-full overflow-hidden no-scrollbar">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="./vite.svg"
        accentColor="#3C14C3"
        isFixed={false}
      />
    </div>
  );
};

export default Navbar;

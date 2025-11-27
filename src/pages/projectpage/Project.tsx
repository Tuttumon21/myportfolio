"use client";
import image1 from "../../assets/images/passwordgeneratorapp.webp";
import image2 from "../../assets/images/triangleweb.webp";
import image3 from "../../assets/images/alanqamarine.webp";
import image4 from "../../assets/images/plagirism.webp";
import image5 from "../../assets/images/zoltbooc.webp";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { LinkPreview } from "@/components/ui/link-preview";

const Project = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div id="projects" role="project" className="w-full h-full bg-black pl-5 py-5">
      <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-white font-bebas">
        Projects
      </h2>
      <p className="max-w-7xl mx-auto text-base md:text-2xl font-bebas text-neutral-200">
        Highlighted works and featured creations.
      </p>
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent = ({ project }: { project: (typeof data)[0] }) => {
  return (
    <>
      <div
        key={"projectdetails"}
        className="bg-[#f5f5f7] p-8 md:p-14 rounded-3xl mb-4"
      >
        {project.technologies && (
          <div className="flex flex-wrap gap-2 font-bebas mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white rounded-full text-sm text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <p className="text-neutral-600 text-base md:text-xl font-mono max-w-3xl mx-auto mb-6">
          {project.description}
        </p>
        <LinkPreview url={project.link}>
        {project.link && (
          <button
            onClick={() =>
              window.open(project.link, "_blank", "noopener,noreferrer")
            }
            className="inline-block px-6 py-3 bg-black text-white rounded-full font-bebas text-lg hover:bg-gray-800 transition-colors mb-6"
          >
              View Project →
          </button>
        )}
            </LinkPreview>
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const data = [
  {
    category: "AI Password Security",
    title: "Password Generator",
    src: image1,
    technologies: [
      "Python",
      "Streamlit",
      "Random / Secrets Module",
      "UI/UX Design",
    ],
    description:
      "A secure and customizable password generator built using the Streamlit framework. Users can generate strong passwords with adjustable length, symbol inclusion, numbers, uppercase/lowercase settings, and one-click copy functionality. Designed with a clean UI and optimized logic for producing highly random, secure passwords suitable for modern applications.",
    link: "https://passwordgeneratorapp.streamlit.app",
    content: null as any,
  },
  {
    category: "AI Agent",
    title: "ZoltBooc",
    src: image5,
    technologies: ["AI", "OpenAI", "Firebase"],
    description:
      "ZoltBooc is an intelligent appointment-booking platform that integrates a fully automated AI Voice Agent with a customizable scheduling workflow. Built using OpenAI’s advanced language models, the system is capable of interacting with users through natural, human-like conversations to understand queries, suggest time slots, confirm bookings, and guide customers through personalized options.The platform features a custom appointment selection system, enabling businesses to define their own services, timings, availability, and booking rules. The AI assistant uses real-time logic to check slot availability, recommend alternatives, and handle rescheduling or cancellations.Designed for modern service-based businesses, ZoltBooc supports industries such as clinics, salons, consultation services, repair centers, and customer support desks. The combination of voice interaction and automated scheduling streamlines appointments, reduces manual workload, and enhances customer experience.This project showcases strong expertise in AI model integration, natural-language workflows, appointment system design, and real-time user interaction, demonstrating how modern AI can elevate traditional booking processes into a smart, effortless, and fully automated experience.",
    link: "",
    content: null as any,
  },
  {
    category: "Website",
    title: "Triangle Website",
    src: image2,
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
    description:
      "The Triangle Website is a highly interactive, visually rich static web experience built using React (Vite), JavaScript, TailwindCSS, Three.js, GSAP, and Framer Motion. Developed collaboratively with a team of two, the project showcases a clean, modern UI enhanced by advanced motion design and 3D visual elements. With over a decade of experience guiding my approach, I took the lead in crafting the interactive design layer, engineering smooth animations, building key components and page structures, and optimizing the site for responsiveness and performance. I implemented immersive Three.js 3D scenes, refined UI transitions with Framer Motion, and introduced precise micro-interactions using GSAP, collectively elevating the user experience to a polished, professional standard. This project strengthened my expertise in responsive design, animation systems, and 3D web workflows, while reinforcing effective team collaboration and high-quality UI engineering practices.",
    link: "https://trianglesoftwaresolutions.com",
    content: null as any,
  },
  {
    category: "Website",
    title: "Alanqa Marine",
    src: image3,
    technologies: [
      "React",
      "vite",
      "JavaScript",
      "Three.js",
      "Tailwind CSS",
      "Blender",
      "3D Models",
    ],
    description:
      "Alanqa Marine is a Dubai-based engineering company specializing in advanced ROV (Remotely Operated Vehicles) and USV (Unmanned Surface Vessels) manufacturing, repair, and marine maintenance solutions. Our team of three developers built their official company website as a fully responsive, high-performance static platform using React (Vite), JavaScript, Tailwind CSS, and Three.js. The website showcases the company’s technical capabilities through clean UI design and immersive 3D model presentations, giving visitors a modern, high-fidelity visual overview of their marine technologies. Throughout the project, I contributed across the entire development pipeline—from component architecture to page layouts—while taking the lead on the interactive and 3D experience layer. I integrated and optimized several Three.js 3D models, implemented smooth transitions, and focused on delivering a polished, professional user experience. This project significantly deepened my knowledge of Three.js workflows, 3D asset handling, and high-quality visual design for corporate websites.",
    link: "https://alanqamarinesolutions.com",
    content: null as any,
  },
  {
    category: "AI ML",
    title: "Plagirism Detector",
    src: image4,
    technologies: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "AI",
      "Flask",
    ],
    description:
      "This project is an advanced AI-driven plagiarism detection system built using Python, Machine Learning, and Natural Language Processing (NLP). The system is designed to accurately identify plagiarism across multiple content types using a combination of web-scraping, semantic similarity analysis, and AI-generated content detection. It can compare documents against online sources, detect rephrased or AI-generated text, analyze writing patterns, and measure content originality with high precision.The model incorporates techniques like TF-IDF, Cosine Similarity, Word Embeddings, and Transformer-based language models to evaluate text similarity beyond exact matches—making it capable of detecting partial plagiarism, paraphrasing, AI/LLM-generated responses, and cross-document content overlap.This solution is intended for use in educational institutions, research analysis, corporate training environments, and content-verification platforms. Built as a final-year MCA project, it demonstrates the integration of real-world ML workflows, including data preprocessing, model training, evaluation, and deployment into a functional application.The project highlights strong skills in Python, NLP, ML model building, data scraping, and AI-assisted content detection, offering a robust system capable of supporting academic integrity and professional content validation.",
    link: "",
    content: null as any,
  },
];

data.forEach((project) => {
  project.content = <DummyContent project={project} />;
});

export default Project;

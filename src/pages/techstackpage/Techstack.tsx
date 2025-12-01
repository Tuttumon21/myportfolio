import { LogoLoop } from '@/components/LogoLoop';

const Techstack = () => {
  const techLogos = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', alt: 'Vite' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://svgl.app/library/expressjs_dark.svg', alt: 'Express.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg', alt: 'SQLAlchemy' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg', alt: 'SQLite' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', alt: 'FastAPI' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', alt: 'Django' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind CSS' },
  ];
  const techLogos2 = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'Visual Studio Code' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', alt: 'Supabase' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg', alt: 'Streamlit' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', alt: 'Redis' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg', alt: 'Kubernetes' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', alt: 'Postman' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg', alt: 'Firebase' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', alt: 'Jira' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
    { src: 'https://svgl.app/library/github_dark.svg', alt: 'GitHub' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },

  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center font-bebas space-y-4">
          <h1 className="text-5xl font-bold text-white">Tech Stack</h1>
          <p className="text-neutral-400 text-lg">Technologies I used with</p>
        </div>
        
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={100}
          gap={64}
          pauseOnHover
          fadeOut
          fadeOutColor="#000"
          scaleOnHover
        />
        <LogoLoop
          logos={techLogos2}
          speed={100}
          direction="right"
          logoHeight={100}
          gap={64}
          pauseOnHover
          fadeOut
          fadeOutColor="#000"
          scaleOnHover
        />
      </div>
    </div>
  );
};

export default Techstack;
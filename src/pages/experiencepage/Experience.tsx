import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "NOW",
      content: (
        <div>
          <p className="text-slate-50 text-xs md:text-2xl font-normal mb-8">
            Jr. Software Engineer
          </p>
          <div className="mb-8 text-slate-200">
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Building scalable, high-performance products with clean
              architecture
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Continuously learning and adopting modern technologies to stay
              industry-ready
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Implementing workflow automation using n8n to improve productivity
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Strengthening skills across cloud, DevOps, and microservices
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 SEP",
      content: (
        <div>
          <p className="text-slate-50 text-xs md:text-2xl font-normal mb-1">
            Junior Developer at Triangle Software Solutions LTD
          </p>
          <p className="text-slate-50 text-xs md:text-sm font-normal mb-1">
            Nottingham, England, United Kingdom 
          </p>
          <p className="text-slate-50 font-mono text-xs md:text-sm font-normal mb-8">
            September 2024 - Present . 1 YEAR 3 MONTH . On-Site 
          </p>
          <div className="mb-8 text-slate-200">
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Worked with AWS Cloud for deployment, hosting, and scaling
              services
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Built and maintained end-to-end scalable projects across multiple
              domains
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Developed full-stack applications using React, Vite, FastAPI,
              PostgreSQL, Node.js, and MongoDB
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              * Collaborated with cross-functional teams to deliver features
              efficiently
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 JUN",
      content: (
        <div>
          <p className="text-slate-50 text-xs md:text-2xl font-normal mb-1">
            Python Developer at GVR BUSINESS TRANSFORMS
          </p>
           <p className="text-slate-50 text-xs md:text-sm font-normal mb-1">
            Kochi, Kerala, India
          </p>
          <p className="text-slate-50 font-mono text-xs md:text-sm font-normal mb-8">
            June 2024 - August 2024 . 3 MONTH . Remote 
          </p>
          <div className="mb-8 text-slate-200">
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Developed Python-based web applications with focus on performance
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Worked on Django framework to build scalable backend features
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Collaborated with team members to integrate APIs, UI, and backend
              services
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Participated in requirement analysis, sprint planning, and testing
              cycles
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 APR",
      content: (
        <div>
          <p className="text-slate-50 text-xs md:text-2xl font-normal mb-1">
            IT Support + Customer Relationship at I-NET SECURE LABS PRIVATE
            LIMITED
          </p>
           <p className="text-slate-50 text-xs md:text-sm font-normal mb-1">
            Kochi, Kerala, India
          </p>
          <p className="text-slate-50 font-mono text-xs md:text-sm font-normal mb-8">
            April 2024 - May 2024 . 1 MONTH . On-Site 
          </p>
          <div className="mb-8 text-slate-200">
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Provided real-time technical support for CCTV and surveillance
              systems
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Supported large-scale election duty camera setups with zero
              downtime
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Handled customer queries, troubleshooting, and live monitoring
              assistance
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Performed system diagnostics, configuration, and issue resolution
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 MAY",
      content: (
        <div>
          <p className="text-slate-50 text-xs md:text-2xl font-normal mb-1">    
            Data Science Intern at iDatalytics
          </p>
           <p className="text-slate-50 text-xs md:text-sm font-normal mb-1">
            Kochi, Kerala, India
          </p>
          <p className="text-slate-50 font-mono text-xs md:text-sm font-normal mb-8">
            May 2023 - AUG 2023 . 4 MONTH . On-Site 
          </p>
          <div className="mb-8 text-slate-200">
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Built and trained machine learning models for predictions and
              insights
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Gained strong foundation in Python, NumPy, Pandas, and ML
              pipelines
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Performed data cleaning, transformation, and exploratory analysis
            </div>
            <div className="flex gap-2 items-center text-xs md:text-lg">
              - Worked on data analytics and visualization projects using Power BI
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" role="experience" className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;

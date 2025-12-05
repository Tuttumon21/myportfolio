import { StaggerTestimonials } from "@/components/stagger-testimonials";

const Testimonials = () => {
  return (
    <div id="testimonials" role="testimonials" className="bg-black flex flex-col w-full h-screen justify-center items-center">
      <div className="flex flex-col self-start items-start pl-10 space-y-1">
        <span className="text-5xl font-bebas text-white">Testimonials</span>
        <p className="text-sm md:text-base text-neutral-200 font-bebas">
          Feedback that fuels my growth
        </p>
        <p className="text-sm md:text-base text-neutral-200 font-sansita">
          [ Demo Content - Sumbit Your Feedback in Contact Section ]
        </p>
      </div>
      <StaggerTestimonials />
    </div>
  );
};

export default Testimonials;

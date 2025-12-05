import { WobbleCard } from "@/components/ui/wobble-card";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" role="contact" className="bg-black h-full p-10">
      <div className="max-w-7xl mx-auto mb-8 font-bebas">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Contact Us
        </h1>
        <p className="text-neutral-400 mt-2">
          Let's build something amazing together
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 h-full md:h-screen max-w-7xl mx-auto">
        <WobbleCard containerClassName="bg-blue-50" className="bg-black h-full pointer-events-auto">
          <iframe
            allow="geolocation; microphone; camera"
            src="https://9t7yum45.forms.app/form/6926f83e9a8ceb000262085a"

            className="w-full h-full border-0"
          ></iframe>
        </WobbleCard>
        <WobbleCard containerClassName="bg-blue-50" className="bg-black">
          <div className="flex flex-col justify-center h-full gap-3">
            <button
              onClick={() =>
                (window.location.href = "mailto:mrrak007kr@gmail.com")
              }
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">mrrak007kr@gmail.com</span>
            </button>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Kerala, India</span>
            </div>
            <button
              onClick={() => (window.location.href = "tel:+919633556219")}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91 Phone Number</span>
            </button>
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/rakesh-k-r", "_blank","noopener noreferrer")
              }
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">Linkedin</span>
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/tuttumon21", "_blank", "noopener noreferrer")
              }
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </button>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default Contact;

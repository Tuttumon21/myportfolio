import { WorldMap } from "@/components/map";
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
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen max-w-7xl mx-auto">
        <WobbleCard containerClassName="row-span-2 bg-blue-50" className="bg-black pointer-events-auto">
          <iframe
            allow="geolocation; microphone; camera"
            src="https://9t7yum45.forms.app/form/6926f83e9a8ceb000262085a"

            className="w-full h-full border-0"
          ></iframe>
        </WobbleCard>
        <WobbleCard containerClassName="bg-blue-50" className="bg-black">
          <WorldMap
            dots={[
              {
                start: {
                  lat: -6.0,
                  lng: 79.244,
                  label: "Kerala",
                },
                end: {
                  lat: 46.5074456,
                  lng: -0.9277653,
                  label: "London",
                },
              },
              {
                start: {
                  lat: -6.0,
                  lng: 79.244,
                  label: "Kerala",
                },
                end: {
                  lat: 7.0742823,
                  lng: 57.1885387,
                  label: "Dubai",
                },
              },
              {
                start: {
                  lat: -6.0,
                  lng: 79.244,
                  label: "Kerala",
                },
                end: {
                  lat: 35.0742823,
                  lng: -73.1885387,
                  label: "New York",
                },
              },
            ]}
          />
        </WobbleCard>
        <WobbleCard containerClassName="bg-blue-50" className="bg-black">
          <div className="flex flex-col gap-3">
            <button
              onClick={() =>
                (window.location.href = "mailto:rakeshkr@example.com")
              }
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">rakeshkr@example.com</span>
            </button>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Kerala, India</span>
            </div>
            <button
              onClick={() => (window.location.href = "tel:+911234567890")}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91 1234567890</span>
            </button>
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/rakesh-k-r", "_blank")
              }
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">linkedin.com/in/rakesh-k-r</span>
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/tuttumon21", "_blank")
              }
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">github.com/tuttumon21</span>
            </button>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default Contact;

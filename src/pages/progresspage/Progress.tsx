import Logork from "../../canvas/Logork";
// import Message from "./Message";
import Plannings from "./Plannings";

const Progress = () => {
  return (
    <div className="bg-black relative h-screen">
      <div className="fixed top-0 left-0 z-10">
        <Logork />
      </div>
      <div className="absolute z-40 bottom-0">
        <Plannings />
      </div>
      {/* <Message /> */}
    </div>
  );
};

export default Progress;

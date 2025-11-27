import Logork from "../../canvas/Logork";
// import Message from "./Message";
import Plannings from "./Plannings";

const Progress = () => {
  return (
    <div className="bg-black relative">
      <div className="h-screen">
        <Logork />
      </div>
      <div className="">
        <Plannings />
      </div>
      {/* <Message /> */}
    </div>
  );
};

export default Progress;

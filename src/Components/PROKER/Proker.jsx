import "./Proker.css";
import ProkerRutin from "./ProkerRutin";
import ProkerUnggulan from "./ProkerUnggulan";
import ProkerInsidental from "./ProkerInsidental";

export default function Proker() {
  return (
    <>
      <div id="proker-bg">
        <ProkerRutin />
        <div className="mainLine2 container"></div>
        <ProkerUnggulan />
        <div className="mainLine2 container"></div>
        <ProkerInsidental />
      </div>
    </>
  );
}

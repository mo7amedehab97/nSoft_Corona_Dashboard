import AnimatedNumber from "./AnimatedNumber";
import "./index.css";

const GlobalSatistics = ({ total, about }) => {
  return (
    <div className="worldStats_box">
      <AnimatedNumber n={Number(total)} />
      <p className="about">{about}</p>
    </div>
  );
};

export default GlobalSatistics;

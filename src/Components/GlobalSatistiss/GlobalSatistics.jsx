import "./index.css";

const GlobalSatistics = ({ total, about }) => {
  return (
    <div className="worldStats_box">
      <h1 className="totalNumbers">{total}</h1>
      <p className="about">{about}</p>
    </div>
  );
};

export default GlobalSatistics;

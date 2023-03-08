import React, { useEffect, useState } from "react";
import GlobalSatistics from "../GlobalSatistiss/GlobalSatistics";
import "./index.css";
import axios from "axios";
import CardSkeleton from "./CardSkeleton";

function formatCompactNumber(number) {
  const formatter = Intl.NumberFormat("en", { notation: "standard" });
  return formatter.format(number);
}

const Banner = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((result) => {
        let corona = result.Global;
        setData({
          TotalConfirmed: corona.TotalConfirmed,
          TotalDeaths: corona.TotalDeaths,
          ActiveCase:
            corona.TotalConfirmed -
            (corona.TotalRecovered + corona.TotalDeaths),
          NewDeaths: corona.NewDeaths,
        });
        setTimeout(() => {
          setLoading(true);
        }, 2000);
      });
  }, []);
  return (
    <div className="banenr_container">
      <h1 className="heading">nSoft Corona Virus</h1>
      <p className="description">Let's Check Information About Corona Virus</p>

      <div className="world_stats">
        {!loading
          ? Object.keys(data).map((key, index) => {
              return <CardSkeleton />;
            })
          : Object.keys(data).map((key, index) => {
              return (
                <GlobalSatistics
                  key={index}
                  about={key}
                  total={formatCompactNumber(Number(data[key]))}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Banner;

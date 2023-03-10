import React from "react";
import ReactCountryFlag from "react-country-flag";

const CountryComp = (props) => {
  return (
    <div className="country_comp_container">
      <div className="country_icon">
        <ReactCountryFlag
          className="country-flag"
          countryCode={props.countryCode}
          svg
          style={{
            width: "3.5em",
            height: "3.5m",
          }}
          title={props.countryCode}
        />
      </div>
      <div className="cases_details">
        <div className="country_flag Cases">
          <a href="#">{props.totalCase}</a>
          <p className="yesterday">
            Last 24 hours: <strong>{props.newCase}</strong>
          </p>
        </div>
        <div className="country_flag Deaths">
          <a href="#">{props.totalDeaths}</a>
          <p className="yesterday">
            Last 24 hours: <strong>{props.newDeaths}</strong>
          </p>
        </div>
        <div className="country_flag Recovered">
          <a href="#">{props.totalRecovered}</a>
          <p className="yesterday">
            Last 24 hours: <strong>{props.newRecovered}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryComp;

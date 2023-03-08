import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import "./index.css";

const CountriesList = () => {
  return (
    <div className="countries_list_container">
      <h2 className="countries_list_heading">Countries Stats</h2>
      <div className="Filtering">
        <input
          type="text"
          placeholder="Enter Country Name"
          //   onChange={this.searchCountry}
        />

        <select className="sortBy">
          <option>Highest</option>
          <option>Lowest</option>
        </select>
      </div>

      <TableHeader />

      {/* {this.state.countryDetails.length < 1 ? <Spinner /> : null}
      {countriesList} */}
    </div>
  );
};

export default CountriesList;

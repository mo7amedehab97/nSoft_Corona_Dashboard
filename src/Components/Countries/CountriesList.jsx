import React, { useState, useEffect } from "react";
import TableHeader from "../TableHeader/TableHeader";
import CountryComp from "./CountryComp";
import "./index.css";
import CountrySkeletonLoading from "./CountrySkeletonLoading";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [sortBy, setSortBy] = useState("highest");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Countries[0], "fjndjfnjdsn");
        setCountries(data.Countries);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.Country.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedCountries(filteredCountries);
  }, [countries, searchQuery]);

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.Country.toLowerCase().includes(searchInput.toLowerCase())
  );

  let sortedCountries;
  if (sortBy === "highest") {
    sortedCountries = filteredCountries.sort(
      (a, b) => b.TotalConfirmed - a.TotalConfirmed
    );
  } else {
    sortedCountries = filteredCountries.sort(
      (a, b) => a.TotalConfirmed - b.TotalConfirmed
    );
  }

  console.log("first fdnfdndfjngjdfngjfn", countries);

  return (
    <div className="countries_list_container">
      <h2 className="countries_list_heading">Countries Stats</h2>
      <div className="Filtering">
        <input
          type="text"
          placeholder="Enter Country Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select className="sortBy" value={sortBy} onChange={handleSortByChange}>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>

      <TableHeader />

      {/* {this.state.countryDetails.length < 1 ? <Spinner /> : null}
      {countriesList} */}
      <div className="country_list_outer_holder">
        {!loading
          ? countries.map((cur, index) => (
              <CountryComp
                key={index}
                countryCode={cur.CountryCode}
                totalCase={cur.TotalConfirmed}
                newCase={cur.NewConfirmed}
                totalDeaths={cur.TotalDeaths}
                newDeaths={cur.NewDeaths}
                totalRecovered={cur.TotalRecovered}
                newRecovered={cur.NewRecovered}
              />
            ))
          : countries.map((cur, index) => (
              <CountrySkeletonLoading key={cur.ID} />
            ))}
      </div>
    </div>
  );
};

export default CountriesList;

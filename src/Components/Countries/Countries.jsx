import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ Countryies }) => {
  const Countries = use(Countryies);
  const AllCountry = Countries.countries;

  return (
    <div>
      <h1>In The Country {AllCountry.length} </h1>
      <div className="Countries">
        {AllCountry.map((CountryBd) => (
          <Country key={CountryBd.ccn3.ccn3} Countryjk={CountryBd}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

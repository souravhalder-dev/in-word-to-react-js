import React from "react";
import "./Country.css";
const Country = ({ Countryjk }) => {
  //   console.log(Countryjk.languages.languages.eng);
  return (
    <div className="Country">
      <img src={Countryjk?.flags?.flags?.png} alt={Countryjk.flags.flags.alt} />
      <h3>Name : {Countryjk.name.common} </h3>
      <h5>Population: {Countryjk.population.population}</h5>
      <p>Region: {Countryjk.region.region}</p>
      <h5>languages: {Countryjk?.languages?.languages?.eng} </h5>
    </div>
  );
};

export default Country;

import React, { useState } from "react";
import "./Country.css";
const Country = ({ Countryjk }) => {
  //   console.log(Countryjk.area.area);
  const [visited, SetCount] = useState(false);
  const VisitedHandal = () => {
    // SetCount(!visited);
    if (visited) {
      SetCount(false);
    } else {
      SetCount(true);
    }
  };
  return (
    <div className={` Country  ${visited && "carfBacground"}`}>
      <img src={Countryjk?.flags?.flags?.png} alt={Countryjk.flags.flags.alt} />
      <h3>Name : {Countryjk.name.common} </h3>
      <h5>Population: {Countryjk.population.population}</h5>
      <p>Region: {Countryjk.region.region}</p>
      <h5>languages: {Countryjk?.languages?.languages?.eng} </h5>
      <p>
        Area : {Countryjk.area.area}
        <span
          style={{
            fontSize: "larger",
            color: "yellow",
            backgroundColor: "black",
          }}
        >
          {" "}
          {Countryjk.area.area > 300000 ? "Big Country" : "Small Country"}
        </span>
      </p>
      {/*  */}
      <button onClick={VisitedHandal}>
        {visited ? " Visited" : " Not Visited"}
      </button>
    </div>
  );
};

export default Country;

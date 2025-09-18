import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

// const CountryData = fetch("https://openapi.programming-hero.com/api/all");

const CountryData = async () => {
  const Country = await fetch("https://openapi.programming-hero.com/api/all");
  return Country.json();
};
function App() {
  const Data = CountryData();
  return (
    <>
      <Suspense fallback={<h2>all Country...</h2>}>
        <Countries Countryies={Data}></Countries>
      </Suspense>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import CountryCanada from "./CountryCanada/CountryCanada";
import CountryAustralia from "./CountryAustralia/CountryAustralia";
import CountryUsa from "./CountryUsa/CountryUsa";
import CountryUk from "./CountryUk/CountryUk";
import CountryNewZealand from "./CountryNewZealand/CountryNewZealand";
import CountryJapan from "./CountryJapan/CountryJapan";
import CountryKorea from "./CountryKorea/CountryKorea";

const CountryPage = () => {
  // const { path } = useRouteMatch();
  return (
    <div>
      <Route path="countries/canada/" element={<CountryCanada />} />
      <Route path="countries/australia/" element={<CountryAustralia />} />
      <Route path="countries/usa/" element={<CountryUsa />} />
      <Route path="countries/uk/" element={<CountryUk />} />
      <Route path="countries/new-zealand/" element={<CountryNewZealand />} />
      <Route path="countries/japan/" element={<CountryJapan />} />
      <Route path="countries/korea/" element={<CountryKorea />} />
    </div>
  );
};

export default CountryPage;

import React from "react";
import "../top-airlines/top-airlines.style.css";
import SearchFormPages from "../top-airlines/SearchFormPages";
import { Helmet } from "react-helmet";

export const London = () => {
  return (
    <div className="cm-section ">
      <Helmet>
        <title>Airfarefees | London</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>London</h1>
        </div>
        <div className="ryanair-content">
          <p>
            You must see England's capital city on your next European vacation
            since it is a center for culture, the arts, and education. The Royal
            Opera House in London hosts ballet performances for guests. Plus,
            London offers visitors spectacular exhibits at the National Gallery,
            ballet performances at the Royal Opera House, and the esteemed
            University of Westminster.
          </p>
          <p>
            In total, there are six airports in London: Heathrow, Stansted,
            Luton, Gatwick, City, and Southend. Any one of London's six
            international airports ensures a first-rate travel experience.
            Passenger assistants are available at several airports to help
            travellers get around, and those who want more support can take
            advantage of specific assistance programs. Heathrow, possibly the
            most visited airport, is easily accessible via the Piccadilly Line
            and the London Underground.
          </p>
        </div>
      </div>
    </div>
  );
};

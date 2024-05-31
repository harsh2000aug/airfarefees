import React from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PopupPage from "../popup-deals/Popuppage";
import { theme_airline_url } from "../../utils/apiInfo";

export const DeltaAirlines = () => {
  const [res, setRes] = useState();
  const [cnt, setCnt] = useState();
  const urlFull = window.location.href;
  useEffect(() => {
    axios
      .get(`${theme_airline_url}`, {
        params: {
          url: urlFull,
        },
      })
      .then((response) => {
        setRes(response.data.status);
        setCnt(response.data.no_of_counts)
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [urlFull]);

  return (
    <div className="cm-section ">
      {res === "1" ? <PopupPage /> : ""}
      <Helmet>
        <title>Airfarefees | Delta Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            Delta <span>Airlines</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            Delta Airlines is one of the most popular major American Airlines.
            It was founded in 1924 and had its headquarters in Atlanta, Georgia
            and its largest hub at Hartsfield-Jackson Atlanta International
            Airport. Moreover, Delta Airlines and its subsidiaries operate more
            than 5,400 flights daily, and it supports a vast network including
            319 destinations in 54 countries on six continents.
          </p>
          <p>
            Another major exploit for Delta is that it is the only american
            carrier to fly to a destination such as Copenhagen, bangkok,
            Istanbul, Dakar, Johannesburg, Moscow, Prague, and Reykjavik. Delta
            also has a fleet of 800+ aircraft and has the largest number of
            Airbus A330 and Boeing 767 carriers in its fleet amongst the United
            States airline. For international flights, Delta has Delta One
            cabins for business class and long haul flights, and it offers
            complimentary meals, refreshments, alcoholic beverages and an
            amenity kit to its business class passengers and flatbeds in its
            aircraft.
          </p>
          <p>
            Delta Airlines is known for its comfort+ seats in economy fare
            class. These seats provide 35-36 inches of pitch and 50% more lounge
            space than the normal main cabin seat, and by paying the fee or
            through the earned SkyMiles, passenger can upgrade their main cabin
            seat to a comfort+ seat. Delta Airlines provide Wi-Fi facilities for
            onboard entertainment on domestic and international flights. For
            passengers travelling in the main cabin on domestic flights, there
            is a wealth of complementary entertainment options as well as the
            option to pay for access to premium entertainment. In addition, for
            all first-class and comfort+ passengers, all of it is for free and
            on its international routes, all in-flight entertainment services
            are complimentary for all cabins.
          </p>
          <p>
            The airline has its top priority the taking care of passengers,
            especially who are disabled or have special needs. From taking care
            of everything from their transportation needs between gates to
            helping them board and deplane the aircraft, Delta makes sure it
            offers them only the best service. If passengers are travelling
            through the united states, they can avail the additional assistance
            related to wheelchair service. Additionally, Delta Airlines allow
            passengers to fly with their pets in the cabin for a one-way fare.
          </p>
        </div>
      </div>
    </div>
  );
};

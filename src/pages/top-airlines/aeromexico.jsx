import React, { useEffect, useState } from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import axios from "axios";
import PopupPage from "../popup-deals/Popuppage";
import { theme_airline_url } from "../../utils/apiInfo";

export const AeroMexico = () => {
  const [res, setRes] = useState();
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
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [urlFull]);

  return (
    <div className="cm-section ">
      {res === "1" ? <PopupPage /> : ""}
      <Helmet>
        <title>Airfarefees | Aero México</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            Aero<span>México</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            The national airline of Mexico is Aeromexico which operates
            scheduled services to 90+ destinations in Mexico, North, south, and
            Central America, the Caribbean, Europe, and Asia. Its main hub is
            located in Mexico, with secondary hubs in Guadalajara and Monterrey.
            Aeromexico had a highly successful year in 1962, thanks to the
            arrival of the first Douglas DC-8 aircraft, which had an unmatched
            performance. Both of its rival airlines, Trans Sea of Cortez, which
            operated on local routes, and Aerovias Guest, which operated on
            international flights, encountered financial difficulties and were
            forced to halt operations.
          </p>
          <p>
            It collaborates closely with Delta Air Lines, a U.S. airline that
            has a stake in Aeroméxico and declared its aim to buy up to 49% of
            the company in 2015. The airline updated its website fully in July
            2016 and installed new check-in kiosks at Mexico City International
            Airport. The airline also contributed funding to MassChallenge's
            debut in Mexico that same year. Plus, The business and the digital
            agency MediaMonks collaborated to create a new mobile app in Mexico
            in August 2017.
          </p>
          <p>
            In September 2016, Aeromexico became the first airline in the
            Americas to launch a chatbot option that enables passengers to
            search, track, and book flights by interacting with a virtual
            assistant on Facebook Messenger. In September 2017, Aeromexico
            declared it would be among the first businesses globally to launch
            services using WhatsApp's new Enterprise solution, marking the first
            time big businesses could offer user support at scale.
          </p>
          <p>
            Aeromexico is recognized as a 3-Star Airline for the caliber of its
            crew, onboard amenities, and airport products. Service ratings are
            given to cabin employees and ground staff, and product ratings are
            given to seats, amenities, beverages, food, IFE, cleanliness, etc.
            In addition, it is the first commercial aircraft with bigger windows
            and carry-on luggage compartments. In order to prevent obstructing
            passengers' vision when turning on the lights, the interior
            incorporates an indirect lighting system. Along with other
            facilities, it has screens with movies, television shows, music, and
            an interactive map showing passengers exactly where it is.
          </p>
        </div>
      </div>
    </div>
  );
};

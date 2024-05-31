import React from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PopupPage from "../popup-deals/Popuppage";
import { theme_airline_url } from "../../utils/apiInfo";

export const Southwest = () => {
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
        <title>Airfarefees | Southwest Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            Southwest <span>Airlines</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            Southwest Airlines Co., based in the United States, is the biggest low-cost carrier in the world. Its headquarters are in Dallas, Texas, and it offers regular service to 121 American cities in addition to 10 more overseas locations. In 2018, Southwest outperformed all other American airlines in terms of domestic passenger volume. It is now North America's third-largest airline by number of passengers flown.
          </p>
          <p>
            On March 9, 1967, Herb Kelleher and Rollin King established the Air Southwest Co. When it began operating as an intrastate airline, exclusively within the state of Texas, first connecting Dallas, Houston, and San Antonio, it changed its name to Southwest Airlines Co. in 1971. In 1979, it launched regional interstate service, and during the next decades, it expanded countrywide. In addition to 42 states, Southwest currently offers airport service to a number of places in Central America.
          </p>
          <p>
            Southwest employs a rolling hub and point-to-point network in contrast to other US airlines, and it provides free checked baggage. There are solely Boeing 737s in its fleet. The airline conducts over 4,000 departures per day and employs close to 66,100 workers during peak travel periods.
          </p>
          <p>
            Southwest Airlines has only ever flown Boeing 737 aircraft throughout its existence, with the exception of the years 1979 to 1980 and 1983 to 1985, when it leased and flew a few Boeing 727-200 aircraft. Currently, Southwest is the biggest Boeing 737 aircraft operator in the world. Southwest's pilots and flight attendants are free to crew any aircraft in the fleet because they are all of the same basic kind.
          </p>
          <p>
            Southwest Airlines' operations are built on a foundation of safety. The airline constantly surpasses global safety requirements because of its modern fleet and stringent maintenance procedures. Passengers may fly with confidence, knowing that the airline places a high priority on the well-being of its customers.
          </p>
          <p>
            Southwest Airlines' unrelenting commitment to excellence and innovation endures as business takes off. The airline has a history of growth and development, and it is unwavering in its determination to transform the way travelers travel in the future. Southwest Airlines advances further on its mission to redefine aviation for a new era with each takeoff.
          </p>
        </div>
      </div>
    </div>
  );
};

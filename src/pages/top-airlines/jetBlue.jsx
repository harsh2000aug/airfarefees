import React from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PopupPage from "../popup-deals/Popuppage";
import { theme_airline_url } from "../../utils/apiInfo";

export const JetBlue = () => {
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
    <div className="cm-section">
      {res === "1" ? <PopupPage /> : ""}
      <Helmet>
        <title>Airfarefees | JetBlue Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air cm-page-center">
        <div className="ryanair-title">
          <h1>
            JetBlue <span>Airlines</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            JetBlue is one of the largest United States low-cost airlines
            headquartered in the Long Island City neighborhood of New York City
            that maintains corporate offices in Utah and Florida. In addition to
            serving 100 domestic and worldwide network destinations in the
            United States, Mexico, Canada, the Caribbean, Central America, South
            America, and Europe, JetBlue operates more than 1,000 flights every
            day. Although most of its itineraries are in North America, JetBlue
            operates transatlantic flights from New York to London and Paris,
            with sleek, next-generation Mint business-class suites on board.
          </p>
          <p>
            The business was started in August 1999 under the name "NewAir" by
            David Neeleman. JetBlue initially adopted Southwest's strategy of
            providing inexpensive travel, but it wanted to stand apart by adding
            extras like in-flight entertainment, TVs at every seat, and Sirius
            XM satellite radio. Moreover, JetBlue offers a single cabin
            experience called Core on most of its planes. There are just a few
            rows with Even More Space seats, which the airline distinguishes
            from regular rows by offering seven extra inches of legroom. The
            Core cabin features include leather chairs, free Wi-Fi, free
            entertainment screens with DirecTV, Sirius XM Radio, and movies,
            free snacks, and free non-alcoholic beverages.
          </p>
          <p>
            JetBlue's in-flight services are one of the things that set it apart
            from other extremely low-cost airlines. These in-flight
            entertainment options consist of gate-to-gate Fly-Fi internet
            access, Sirius XM Radio, over 100 channels of DIRECTV, and the
            Airbus A321 and newer retrofitted Airbus A320 aircraft. This 15-inch
            interactive video screen is not available on the rest of the fleet.
            Plus, by connecting to Wi-Fi and downloading the Amazon Video app on
            their mobile phones or tablets, customers of JetBlue can view Amazon
            Prime videos.
          </p>
          <p>
            JetBlue's frequent-flyer program is called TrueBlue. Under the
            original TrueBlue program, flights were worth two, four, or six
            points based on flight distance, and double points were awarded for
            flights reserved online. However, JetBlue changed its TrueBlue
            program in September 2009. Under the new program, members get three
            points for every dollar they spend on flights, excluding taxes and
            fees, plus an extra three points if they book their flights directly
            on JetBlue.com's website. Additional points are awarded if the
            customer uses Barclay's issued JetBlue Mastercard credit card to buy
            the flight ticket. The price of flights in points depends on the
            flight fare in U.S. dollars.
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import PopupPage from "../popup-deals/Popuppage";
import axios from "axios";
import { theme_airline_url } from "../../utils/apiInfo";

export const RyanAir = () => {
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
        <title>Airfarefees | Ryan Air</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            Ryan<span>Air</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            Ryanair was established in 1984 and has a long history of providing
            first-rate air travel services. From modest origins, they have grown
            into a leader in aviation worldwide, known for their focus on the
            needs of the client and steadfast commitment to quality. Its main
            operational bases are the Dublin and London Stansted airports, and
            its headquarters are in Swords, Dublin, Ireland. Ryanair UK, Buzz,
            Lauda Europe, and Malta Air are sibling airlines that comprise most
            of the Ryanair Holdings airline family. The largest airline in
            Ireland surpassed all other airlines in the world regarding
            scheduled foreign passengers in 2016. The airline operates more than
            500 planes. Due to the liberalization of the aviation sector in
            Europe in 1997 and the success of its low-cost business strategy, it
            has been known for its quick expansion. Over 40 countries in Europe,
            North Africa (Morocco), and the Middle East (Israel and Jordan) are
            included in Ryanair's route network.
          </p>
          <p>
            Since its founding in 1984, Ryanair has become Europe's largest
            airline, covering the brief route from Waterford to London Gatwick.
            Over 19,000 employees have been hired by the business, the majority
            of whom are contracted by organizations to fly aboard Ryanair
            planes. In 1997, the airline went public, and the funds acquired
            were utilized to turn it into a pan-European carrier. Revenues grew
            from €231 million in 1998 to €1.843 billion in 2003 and €3.013
            billion in 2010. Similarly, over the same time period, net earnings
            rose from €48 million to €339 million.
          </p>
          <p>
            Step on board one of the flights to discover a new standard of
            comfort and elegance. Ryanair’s roomy cabins, which feature
            ergonomic chairs, generous legroom, and cutting-edge in-flight
            entertainment, are created to promote relaxation during the voyage.
            Ryanair ensures that your trip, whether it be for work or pleasure,
            will be relaxing. A major believer in environmental sustainability
            is Ryanair. To lessen carbon impact, they make investments in
            modern, fuel-efficient aircraft and use environmentally friendly
            procedures. They work to preserve the natural beauty of the earth
            for future generations via ethical business practices.
          </p>
          <p>
            Ryanair is a benchmark for excellence, security, and innovation in
            the aviation industry. They have shaped the future of air travel for
            more than 38 years, making sure that every flight is memorable. They
            are passionate about customer satisfaction and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

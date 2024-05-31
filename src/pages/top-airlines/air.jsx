import React from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import PopupPage from "../popup-deals/Popuppage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { theme_airline_url } from "../../utils/apiInfo";

export const AirFrance = () => {
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
        <title>Airfarefees | Air France</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            Air <span>France</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            Air France epitomizes upscale travel and advances innovation. They
            have a long history of setting the standard for providing passengers
            with great air travel experiences that blend comfort, luxury, and
            unmatched connection. Since its founding in 1933, Air France has
            provided its passengers with a distinctive experience when traveling
            on board its aircraft, which operates a significant global network.
            Air France is a key participant in the airline business because of
            the dedication and hard work of its 42,000 workers. The three major
            functions of Air France are flying people, moving cargo, and
            maintaining aircraft. The national airline of France, AIRFRANCE, has
            its headquarters in Tremblay-en-France. It belongs to the Air
            France-KLM Group and is a subsidiary of the international airline
            alliance SkyTeam. In 78 different countries and 201 different
            destinations, Air France offered regular passenger and cargo routes
            as of 2013. In 2019, the airline transported 46,803,000 passengers.
            Air France now serves 29 destinations in France. The Air France
            headquarters, which were once in Montparnasse, are now located on
            the property of Paris's Charles de Gaulle Airport. During the Cold
            War, from 1950 until 1990, it was one of the three main Allied
            scheduled airlines operating in Germany at the Tempelhof and Tegel
            airports in West Berlin. It acquired the operations of regional
            airline Air Inter and competing international airline UTA in France
            in 1990. It served as the primary national flag carrier of France
            for seven decades before merging with KLM in 2003.
          </p>
          <p>
            Experience the pinnacle of refinement when you enter one of their
            cabins. The attention to detail in Air France's interior design,
            ergonomic seats, and ambient lighting is evident in their dedication
            to comfort. You may unwind and rest from takeoff to touchdown in
            their cabins, which are a sanctuary of peace.
          </p>
          <p>
            Air France is devoted to minimizing its negative effects on the
            environment. They proactively adopt environmental measures, such as
            decreasing single-use plastics and running more fuel-efficient
            operations. They are attempting to make the aviation sector more
            sustainable by adopting green ideas.
          </p>
          <p>
            The epitome of style, innovation, and interconnectedness is Air
            France. They continue to enhance travel, making sure that every trip
            is nothing short of spectacular. They have a heritage of quality, a
            passion for passenger well-being, and a desire to lead aviation into
            the future.
          </p>
        </div>
      </div>
    </div>
  );
};

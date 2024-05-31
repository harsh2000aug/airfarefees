import React, { useEffect, useState } from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import PopupPage from "../popup-deals/Popuppage";
import axios from "axios";
import { theme_airline_url } from "../../utils/apiInfo";

export const UnitedAirlines = () => {
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
        <title>Airfarefees | United Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            United <span>Airlines</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            United Airlines is a major American and second largest airline
            headquartered at the wills tower in Chicago, Illinois. It was the
            creation of aviation pioneer William Boeing, who got started in the
            airplane business in 1916. United is one of the predominant carriers
            between North America and East Asia, and it also provides numerous
            flights from the US to Australia, the Caribbean, Canada, Central
            America, Mexico, the middle east, South America, and Southeast Asia.
          </p>
          <p>
            Apart from its standard mainline operations, United Airlines offers
            an ultra-luxurious premium service product on all nonstop flights
            from New York to either Los Angeles or San Francisco. The airline,
            also now defunct low-cost ted operation, has been formally
            discontinued as of june 2008. In the summer of 2008, United
            announced its new "Travel options by United" program, which permits
            passengers to customize their travel by adding convenient services
            to their itinerary. Among these are Premier Access, which offers
            fast-track access through airport lines, and Baggage Delivery, which
            picks up your luggage at the airport of your arrival and delivers it
            to your ultimate destination.
          </p>
          <p>
            United Airlines offers three-class service on international flights
            and two-class service on most domestic flights, including feeder
            flights on Canadian CRJ-700 and Embraer 170 regional jets. Uniquely,
            among many other major US airlines, United sets apart the first few
            rows of economy class as the economy as economy plus, which has five
            extra inches of legroom. Economy plus seating is given to ticketed
            economy passengers who hold elite status in the mileage plus program
            and who pay an additional fee at check-in or purchase.
          </p>
          <p>
            The airline's main lounge network is called the United club, which
            offers light refreshments such as fruits, complimentary soft drinks,
            and alcoholic beverages, plus free wifi. In addition, the United
            Clubs are open to paying members of the United club as well as star
            alliance gold members. The official United website states that
            economy passengers flying more than 500 miles have access to
            alternatives including snack boxes that may be purchased, while
            those flying more than 1500 miles have the option of purchasing
            things from the bistro and board menu. Further, passengers who are
            flying international long haul can get a full pre-packed meal on a
            single tray, plus additional snacks mid-flight and before arrival in
            all cabins.
          </p>
        </div>
      </div>
    </div>
  );
};

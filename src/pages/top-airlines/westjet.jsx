import React from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PopupPage from "../popup-deals/Popuppage";
import { theme_airline_url } from "../../utils/apiInfo";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const Westjet = () => {
  const [res, setRes] = useState();
  const urlFull = window.location.href;
  const navigate = useNavigate();

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

  const handleExpClick = (origin, dest) => {
    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
        "YYYY-MM-DD"
      )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
    });
  };


  return (
    <div className="cm-section ">
      {res === "1" ? <PopupPage /> : ""}
      <Helmet>
        <title>Airfarefees | WestJet Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>
            WestJet <span>Airlines</span>
          </h1>
        </div>
        <div className="ryanair-content">
          <p>
            WestJet Airlines Ltd. is a Canadian airline headquartered near Calgary International Airport in Calgary, Alberta. It is Canada's second-largest airline, after only Air Canada.  WestJet operates an average of 777 flights each day, carrying over 66,130 people. Edmonton, Toronto-Pearson, Vancouver, and Winnipeg are airline-focused cities.
            WestJet carried 25.49 million flyers in 2018, putting it as the ninth-largest airline in North America by flyer volume.
          </p>
          <p>
            WestJet started up in 1994 and began operations in 1996. It originated as a low-cost alternative to the country's top competitors. The airline serves over 100 locations in Canada, Europe, the United States, Asia, Central America, Mexico, and the Caribbean via scheduled and charter flights.
          </p>
          <h2>
            History
          </h2>
          <p>
            Clive Beddoe, David Neeleman, Mark Hill, Tim Morgan, and Donald Bell formed Westjet on June 27, 1994. The airline's early routes were located in Western Canada, which provided the airline its name. The first-ever WestJet flight, a Boeing 737-200, took off on February 29, 1996. With a fleet of three used Boeing 737-200 airplanes and 225 employees, the airline initially served Calgary, Vancouver, Edmonton, Kelowna, and Winnipeg. By the end of the year, the corporation had expanded its network to include Regina, Saskatoon, and Victoria.
          </p>
          <h2>
            Services
          </h2>
          <p>In-Flight Services</p>
          <ul>
            <li>WestJet's 737 aircraft are equipped with WestJet Connect, an in-flight entertainment system that allows customers to utilize their own mobile devices and laptop computers. The service provides free access to hundreds of TV series and movies, paid internet access, and USB and 110 V power outlets at each seat.</li>
            <li>WestJet provides complimentary refreshments and snacks on flights of less than four hours. There are alcoholic beverages for sale.</li>
            <li>WestJet provides complimentary beverages and snacks on flights of four hours or more, as well as a buy-on-board meal option in economy on all aircraft. A complimentary dinner and alcoholic beverages are included in premium and business class. When flying to Europe, all classes receive a complimentary lunch as well as alcoholic beverages.</li>
          </ul>
          <h2>
            Cabins
          </h2>
          <ul>
            <li>Business Class is only available on the Boeing 787 and features individual pods with direct aisle access. In a 1-2-1 layout, the chairs have electronic flat beds.</li>
            <li>Premium Class has its own deemed cabin. In a 2-3-2 arrangement, larger seats with greater reclining are available.</li>
            <li>Economy seats have a 31" pitch and are available in a 3-3-3 arrangement. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

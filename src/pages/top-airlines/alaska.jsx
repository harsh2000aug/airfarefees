import React, { useEffect, useState } from "react";
import "./top-airlines.style.css";
import SearchFormPages from "./SearchFormPages";
import { Helmet } from "react-helmet";
import axios from "axios";
import PopupPage from "../popup-deals/Popuppage";
import { theme_airline_url } from "../../utils/apiInfo";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const AlaskaAirlines = () => {
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
    <>
      <div className="cm-section ">
        {res === "1" ? <PopupPage /> : ""}
        <Helmet>
          <title>Airfarefees | Alaska Airlines</title>
        </Helmet>
        <SearchFormPages />
        <div className="ryan-air  cm-page-center">
          <div className="ryanair-title">
            <h1>
              Alaska <span>Airlines</span>
            </h1>
          </div>
          <div className="ryanair-content">
            <p>
              Alaska is a large airline from the united states headquartered in
              SeaTac, Washington, within the Seattle Metropolitan area. In terms
              of the number of regularly scheduled passengers carried, it is
              North America's fifth-largest airline. Alaska has a route network
              largely focused on linking cities along the west coast of the
              United States to more than 100 destinations in the contiguous
              United States, Belize, Canada, Guatemala, Costa Rica, and Mexico.
              Also, the airline operates this network with its regional partners
              SkyWest and horizon airlines.
            </p>
            <p>
              The airline runs out of five hubs, with Seattle-Tacoma
              International Airport serving as its main base. The third-largest
              airline alliance in the world, Oneworld, also counts Alaska as a
              member. Alaska Airlines will have more than 16,000 employees by
              2020, and J.D. Power and Associates has consistently rated them as
              having the highest customer satisfaction among traditional
              airlines for the past twelve years. All Alaska Airlines run a
              mainline fleet consisting primarily of Boeing 737 series aircraft,
              With the exception of a small number of Airbus A321neo aircraft
              that Virgin America bought but didn't receive until after the
              merger.
            </p>
            <p>
              All Alaska jets are equipped with an in-flight WiFi and streaming
              entertainment system. It had been announced that the cost of
              internet access would shortly increase to a flat $8 fee for each
              flight, but only for aircraft equipped with satellite WiFi. On the
              older internet, WiFi service is still fee-based for all
              passengers, depending on the time of the flight. Additionally,
              streaming entertainment and electronic messaging services are free
              in Alaska.
            </p>
            <p>
              Additionally, Alaska's first-class cabin features priority
              boarding, complimentary food, and alcoholic and non-alcoholic
              beverages. Plus, seating it wide recliner-style seats in a 2-2
              configuration on mainline aircraft and a 2-1 configuration on
              regional jets. The Alaska premium class is located behind first
              class and features 35 inches of seat pitch, and it provides
              complimentary alcoholic and non-alcoholic beverages. Passengers of
              the main cabin can get a complimentary non-alcoholic beverage and
              a small snack. On February 2012, Alaska started serving coffee
              from fellow seattle company Starbucks on all its flights, and in
              July 2018, Alaska updated much of the first-class menu inspired
              West coast presence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

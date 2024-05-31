import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const PopAirlines = () => {
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
        <title>Airfarefees | Popular Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>Popular <span>Airlines</span></h1>
        </div>
        <div className="ryanair-content">
          <p>
            Popular Airlines are well-known and well-acknowledged air transportation providers that serve millions of customers globally. A combination of superior customer service, safety records, broad route networks, and customer contentment have helped the airlines to achieve their status. Moreover, all the famous Airlines primary aim is to offer passengers a seamless and enjoyable travel experience. They focus on ensuring safety and reliability, offering diverse destinations and routes, and maintaining high-quality customer service throughout the journey.
          </p>
        </div>
      </div>
    </div>
  )
}

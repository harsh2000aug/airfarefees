import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const LotPolish = () => {
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
        <title> Airfarefees | LOT Polish Airlines</title>
      </Helmet>
      <SearchFormPages />
      <div className="ryan-air  cm-page-center">
        <div className="ryanair-title">
          <h1>LOT Polish <span>Airlines</span></h1>
        </div>
        <div className="ryanair-content">
          <p>
            The national airline of Poland is LOT Polish Airlines, sometimes referred to as Polskie Linie Lotnicze LOT S.A. LOT, one of the oldest continuously running airlines in the world, joined IATA as one of the organization's first members in 1928. LOT Polish Airlines, the 18th biggest airline in Europe as of 2022 with a fleet of 79 aircraft, offers 1502 weekly flights. The majority of the destinations are reached by way of the Warsaw Chopin Airport hub. From Budapest Ferenc Liszt International Airport in Hungary, where it runs regularly scheduled flights to New York during the summer and Seoul year-round, LOT has maintained two long-haul services since 2018. Since 2003, LOT has belonged to the Star Alliance. Fly to various locations throughout the world to discover new cultures and people. The airline offers flights to 120 destinations in North America, Europe, Asia, and the Middle East. Set out on a holiday with Lot Polish Airlines, whether it's a beach getaway, a romantic retreat, a single trip, or a family trip. Modern Boeing, De Havilland Canada Dash, and Embraer aircraft make up Lot Polish Airlines' fleet, allowing passengers to go to their ideal vacation spot. These modern in-flight facilities are available on all of these planes, ensuring a comfortable and relaxing voyage. Our visitors may make use of the amenities of our opulent cabins, whether they are traveling vast distances or boarding a short local or international journey. Currently, business class, premium economy class, and economy class are all offered by the airlines. Any of these classes offer better services and amenities to passengers. The airline makes a lot of effort to make the in-flight experience stress-free and calm, offering large cabins, comfy seats, and greater legroom. Flying passengers may savor exquisite gourmet fare, snacks, and drinks. The skilled chefs of the airline make each meal, providing an excellent fine-dining experience. With the newest movie releases, TV shows, music, and online games, in-flight entertainment delivers a completely new flying experience.
          </p>
          <p>
            Customers may choose from a variety of additional services offered by the airline, such as choosing their preferred seat, upgrades, pre-ordering meals, hotel booking, E-visa, vehicle rental, and much more, to make travel hassle-free. When organizing your next vacation, let Lot Polish handle all of your travel arrangements, including booking, boarding, and arrival at the destination.
          </p>
        </div>
      </div>
    </div>
  )
}

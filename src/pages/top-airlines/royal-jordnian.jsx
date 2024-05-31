import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const RoyalJordanian = () => {
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
                <title>Airfarefees | Royal Jordanian Airlines</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Royal Jordanian <span>Airlines</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        On December 15, 1963, RJ (Royal Jordanian) was established as the national airline of the Hashemite Kingdom of Jordan. It is headquartered in Amman, Jordan (A country in West Asia). The airline commenced operations on December 15, 1963, following a royal order issued by the late King Hussein. Aalya was named after Princess Alia bint Al Hussein of Jordan (born February 13, 1956), King Hussein's eldest child. Alia (the Royal Jordanian Airline) began operations in Amman with two aircraft Handley Page Dart Heralds and a Douglas DC-7, reaching Kuwait City, Beirut, and Cairo. In 1964, another DC-7 was put in place, and service to Jeddah began. Alia commenced service to Rome, its first European destination, in 1965.
                    </p>
                    <p>
                        Royal Jordanian Airlines has codeshare agreements with American Airlines, British Airways, Etihad Airways, Gulf Air, ITA Airways, Malaysia Airlines, Oman Air, Qatar Airways, Royal Air Maroc, TAROM, and Turkish Airlines. A codeshare agreement is a business arrangement commonly known in the aviation industry. In this, two or more airlines promote and market the same flight as part of their announced schedule or itinerary under their individual airline designator and flight number.
                    </p>
                    <p>
                        When it comes to Royal Jordanian Airlines catering services, Dnata (Dubai National Air Travel Agency) provides food and beverages on flights departing from Amman. Hot meals will be offered on flights lasting at least three hours. If the journey is less than an hour long, the cabin crew will serve food and drinks during or before the flight. The Economy Class on board Airbus and Boeing aircraft are equipped with personal televisions (PTV) utilizing an audio- and video-on-demand system (AVOD). Movies, television shows, audio, and games are available to passengers through the system. In Crown Class, passengers have access to AVOD, which comprises an extensive library of movies, television shows, audio, and games. Crown Class passengers flying on Embraer aircraft can only use portable entertainment devices (IMS).
                    </p>
                    <p>
                        There is a frequent flyer program offered by Royal Jordanian, which is called the Royal Club. Passengers earn miles according to the flight's type, class, and destination. Members of the Royal Club can also earn miles by traveling on other Oneworld airlines.
                    </p>
                </div>
            </div>
        </div>
    )
}

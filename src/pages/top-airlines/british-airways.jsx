import React from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { theme_airline_url } from '../../utils/apiInfo'

export const BritishAirways = () => {
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
                <title>Airfarefees | British Airways</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>British <span>Airways</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        British Airways, the second largest and flag airline of the United Kingdom, has its primary hub at Heathrow Airport and is based in London, England. It was founded in 1974 after the British government developed a British Airways Board to oversee the two nationalized airline firms, British European Airways and British Overseas Airways Corporation, as well as two regional carriers, Northeast Carriers and Cambrian Airways. Also, it has service to approximately 170 locations worldwide, including 27 in the United States and eight domestically.
                    </p>
                    <p>
                        British Airways, which was the top airline by number of passengers up until 2008, is the largest and strongest airline located in the UK in terms of worldwide flights, fleet size, and overseas destinations. In 2008, the airline transported 34.6 passengers, whereas EasyJet, a competitor, carried 44.5 million. British Airways holds a UK civil aviation authority operating licence; it can carry passengers, cargo, and mail on aircraft with more than 20 seats. The airline is also a member of Oneworld, and being a part of Oneworld means that the airlines sell flight tickets for their own flights as well as for other members' flights. This is good for the airlines because the passengers can get their flight tickets in one place, and it permits the airlines to use flights that they would not normally have.
                    </p>
                    <p>
                        As of July 2021, British Airways had 253 aircraft in its fleet, and 47 more were on order. Moreover, The Executive Club, a tier-based reward program offered by British Airways, gives members access to exclusive lounges and "fast" lines. Six levels constitute its program: Blue, Bronze, Silver, Gold, Gold guest list, and Premier. The programme incentivizes its members to travel with BA by awarding them tier points and Avios. The exchangeable spending currency is called Avios. Tier Points, which determine a member's tier and cannot be exchanged for cash, are a score.
                    </p>
                    <p>
                        British Airways economy class, known as Euro Traveller, is applicable on all short-haul flights within Europe, including flights within the UK. Club Europe is the short-haul business class that allows for access to business lounges and complimentary onboard catering. Overall, The airline has a strong reputation for safety and has constantly been listed among the top 20 safest airlines in the world.
                    </p>
                </div>
            </div>
        </div>
    )
}

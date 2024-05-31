import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const SingaporeAirlines = () => {
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
                <title>Airfarefees | Singapore Airlines</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Singapore <span>Airlines</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Founded in 1947, the national airline of the Republic of Singapore, Singapore Airlines, has its hub at Changi Airport in Singapore. The airline stands out for making the Singapore Girl the focal point of its corporate branding campaign. Since the 1990s, Skytrax has given the airline a 5-star rating, and five times it has been named the greatest airline in the world. The Carrier is renowned across the world for its top-notch customer service and hospitality. Its revolutionary and modern aircraft provides its passengers with exceptional service as the biggest commercial aircraft in the world is being flown for the first time by Singapore Airlines. The Carrier, which has a significant presence in South Asia and is the biggest Asian airline, offers flights to eleven locations in Europe. With its main hub at Singapore Changi Airport, the airline acts as Asia's premium Carrier and offers services all over the world.
                    </p>
                    <p>
                        25 international carriers, including Aegean carriers, Avianca, LOT Polish Airlines, Ethiopian Airlines, EVA Air, Air China, and Fiji Airways, among others, have codeshare arrangements with Singapore Airlines. These codeshare agreements have aided Singapore Airlines in strengthening its position in the market and its ability to compete. The Carrier is a part of the prestigious Star Alliance, which has a global presence. The biggest air alliance in the world, it has 26 separate member airlines, each with a distinct brand and service region. Singapore Airlines carries 38.9 million passengers yearly on its scheduled routes, which include close to 1000 domestic and international flights. From its international airport hubs, the airline provides direct flights to more than 78 destinations worldwide in 32 nations distributed across five populated mainlands. Additionally, SIA flies more extra flights in Australia and India than in any other nation. Singapore Airlines has made orders for 10 Boeing 787 and Airbus A380 aircraft, bringing the fleet's total number of operating aircraft to over 149. The Carrier's fleet, with an average age of more than 7 years, is among the most advanced and environmentally friendly in the world.
                    </p>
                    <p>
                        Singapore Airlines' unrelenting commitment to excellence and innovation endures as the company soars. The airline has a history of change and expansion, and it is steadfast in its commitment to influencing how people fly in the future.
                    </p>
                </div>
            </div>
        </div>
    )
}

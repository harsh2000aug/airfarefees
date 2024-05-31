import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const Iberia = () => {
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
                <title>Airfarefees | Iberia Airlines</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Iberia <span>Airlines</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Iberia is Spain's national airline. It was founded in 1927 and has its headquarters in Ciudad Lineal, Madrid, Spain. From its primary base, Madrid-Barajas Airport, it operates an international network of services. Iberia is part of the International Airlines Group, which also operates Iberia Regional (operated by an independent airline called Air Nostrum) and Iberia Express. Flight operations began on December 14, 1927. Within a year, the Spanish government supported the company in providing postal transportation between Barcelona and Madrid during the despotism of Miguel Primo de Rivera. Spain's aviation industries were merged and nationalized as a general-interest public utility in early 1928. British Airways and Iberia declared plans to merge in July 2008, with each airline retaining its original brand. The acquisition was approved by the European Commission and the United States Department of Transportation in July, and the two airlines began working together on transatlantic operations with American Airlines.
                    </p>
                    <p>
                        Aside from operating its own fleet of aircraft, Iberia provides aircraft maintenance to 48 other companies, including some of the world's leading airlines. Moreover, It is a supplier of aircraft handling services with 7300 employees at all Spanish airports for more than 200 clients.
                    </p>
                    <p>
                        Iberia Airline Business Class is available on Spanish domestic and inter-European flights. The seats are identical to those in the economy cabin, with the middle (B and E) seats closed off. Improved ground services, including priority check-in, security, boarding, luggage handling, and lounge access, are also included with Business Class tickets. Business Plus, on the other hand, is available on long-haul flights to the Americas and South Africa. This travel class incorporates international business class amenities as well as lie-flat seating. For economy, Iberia has adopted a more American, or "a la carte" style, giving a buy-on-board service designated "Tu Men" for meals, refreshments, and beverages for domestic and European flights.
                    </p>
                    <p>
                        The airline's main lounge network is called the United club, which offers light refreshments such as fruits, complimentary soft drinks, and alcoholic beverages, plus free wifi. In addition, the United Clubs are open to paying members of the United club as well as star alliance gold members. The official United website states that economy passengers flying more than 500 miles have access to alternatives including snack boxes that may be purchased, while those flying more than 1500 miles have the option of purchasing things from the bistro and board menu. Further, passengers who are flying international long haul can get a full pre-packed meal on a single tray, plus additional snacks mid-flight and before arrival in all cabins.
                    </p>
                </div>
            </div>
        </div>
    )
}

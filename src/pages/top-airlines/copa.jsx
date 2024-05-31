import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import PopupPage from '../popup-deals/Popuppage'
import { theme_airline_url } from '../../utils/apiInfo'

export const CopaAirlines = () => {
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
                <title>Airfarefees | Copa Airlines</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Copa<span>Airlines</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>Founded in 1947, Copa Airlines is the national flag carrier of Panama. It is headquartered in Panama City, Panama. However, the airline was established on June 21, 1944. However, started operations on August 15, 1947. The airline began operating flights domestically with a small fleet of Douglas DC-3 aircraft. In the early 1970s, Copa Airlines started its first international flight with services to cities in Columbia, Jamaica, and Costa Rica. Today, Copa Airlines operates flights to a number of destinations in the United States of America, including Atlanta, Boston, Chicago, Denver, Fort Lauderdale, Las Vegas, Los Angeles, Miami, Montreal, Orlando, Toronto, New York City, San Francisco, Tampa and Washington, D.C. and  to other destinations in the Latin America and Caribbean.</p>

                    <p>When it comes to how this airline serves its passengers, there are a number of unavoidable facilities. From its initial days, when it operated flights between two locations in Panama, to its present position as one of the top airlines in the Americas, Copa Airlines celebrates seven decades of constant growth and progress. </p>

                    <h3>Services</h3>

                    <ul>
                        <li>
                            <h4>Business Class</h4>
                            <p>Copa Airlines business class seats are available on all aircraft. Passengers with business class tickets check in at separate counters. Also, given priorities with baggage and boarding handling. The airline's in-flight services include a comfy environment with pillows and blankets, which basically depends on the time and duration of the passenger's flight and multi-course meals. Business class fliers also enjoy reclinable leather seats with footrests, and most comfortable and adjustable headrest, a large tray table, a USB port, and a personal AVOD (Audio-Video-on-Demand) screen. </p>
                        </li>
                        <li>
                            <h4>Economy Class</h4>
                            <p>Copa Airlines economy class seats are available on all aircraft. The seats offer entertainment on flip-down displays above the seats, and the economy seats on brand-new 737-800s include an adjustable headrest and a personal AVOD with a 5-inch (13 cm) touch screen. On domestic, short-haul, and certain medium-haul international flights, food and refreshments are offered. On all other international medium- and long-haul flights, full meals are handed out at no additional cost. </p>
                        </li>
                        <li>
                            <h4>ConnectMiles</h4>
                            <p>Connect Miles is Copa Airlines' frequent flyer program. This program facilitates frequent flyers with the ability to purchase flight tickets with miles. Customers can earn miles by taking flights on United Airlines, Copa Airlines, and other Star Alliance members.</p>
                        </li>
                        <li>
                            <h4>Copa Club</h4>
                            <p>As part of a joint operation with United Airlines, Copa Airlines offers a membership airport lounge program called Copa Club. At Tocumen International Airport in Panama City, the Copa Club lounge is situated in the airport's hub. Visitors to the lounges can take advantage of the amenities, and members have access to associated lounges all around the world. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

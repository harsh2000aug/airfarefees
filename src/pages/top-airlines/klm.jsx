import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const KlmAirlines = () => {
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
                <title>Airfarefees | KLM Airlines</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>KLM <span>Airlines</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        KLM The national airline of the Netherlands is Koninklijke Luchtvaart Maatschappij N.V., also known as Royal Dutch Airlines. KLM's corporate offices are in Amstelveen, while the nearby Schiphol Airport in Amsterdam serves as its main hub. It belongs to the SkyTeam airline alliance and is a part of the Air France-KLM corporation. As of 2021, KLM is the longest-continuously running airline in the world, with 35,488 people and a fleet of 110 aircraft. KLM provides regular passenger and cargo flights to 145 destinations. The history of KLM starts from the ELTA aviation display in Amsterdam, which was sponsored in 1919 by a young pilot lieutenant by the name of Albert Plesman. Over 500,000 people attended the expo, and once it concluded, numerous Dutch business interests planned to launch a Dutch airline, with Plesman selected to lead it. The KNLM had not yet been established when Queen Wilhelmina bestowed its "Royal" ("Koninklijke") predicate on it in September 1919. Eight Dutch businessmen, notably Frits Fentener van Vlissingen, established KLM on October 7, 1919, making it one of the earliest commercial aviation firms. Plesman was appointed as its first director and administrator. KLM and KLM Cityhopper are the two main airlines that make up the KLM Group, together carrying 34.1 million fliers and 621,000 tonnes of cargo. KLM provides direct connections to important economic hubs across the globe with a large network of 92 European cities and 70 intercontinental destinations.
                    </p>
                    <p>
                        KML Airlines stands out as a bright example of quality and innovation in the dynamic world of aviation, where comfort, dependability, and customer-centric services are essential. KML Airlines has quickly risen to the top of the market, changing the flying experience for passengers all over the world with the purpose of improving the way of experience air travel.
                    </p>
                    <p>
                        The foundation of KML Airlines' operations is safety. The airline constantly surpasses global safety requirements because of its advanced fleet and stringent maintenance procedures. Knowing that the airline places a high focus on its customers' well-being, passengers may travel with confidence.
                    </p>
                    <p>
                        KML Airlines supports the spirit of discovery and adventure in a world where travel is more than simply a means of transportation, making sure that every passenger's experience is a memorable chapter in their life journey.
                    </p>
                </div>
            </div>
        </div>
    )
}

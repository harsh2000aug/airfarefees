import React, { useEffect, useState } from 'react'
import './top-airlines.style.css'
import SearchFormPages from './SearchFormPages'
import { Helmet } from 'react-helmet'
import PopupPage from '../popup-deals/Popuppage'
import axios from 'axios'
import { theme_airline_url } from '../../utils/apiInfo'

export const VirginAtlantic = () => {
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
                <title>Airfarefees | Virgin Atlantic</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Virgin <span>Atlantic</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        An Air Carrier known as Virgin Atlantic is a trading name of Virgin Atlantic International Limited and Virgin Atlantic Airways Limited. This is a British airline with its headquarters in Crawley, England. Moreover, there are international offices located in Atlanta, Greater Delhi, Barbados, Johannesburg, Lagos, and Shanghai. Established in 1984 as British Atlantic Airways, its flights were planned to fly between london and the Falkland Islands by its co-founders Alan Hellary and Randolph Fields. After having differences with Richard Branson on the management of the company, shortly after changing the company's name to Virgin Atlantic Airways, Randolph Fields sold his shares in the company.
                    </p>
                    <p>
                        Virgin Atlantic launched its first scheduled service between Gatwick and Newark on June 22, 1984, making use of a leased Boeing 747-200 (registration G-VIRG), dubbed Maiden Voyager, previously operated by Aerolneas Argentinas. Its activities were reinforced from the start by exploiting existing Virgin Group resources, including tickets sold via Virgin Megastores record stores. Virgin Atlantic's fleet has been entirely made up of widebody aircraft from Airbus and Boeing.
                    </p>
                    <p>
                        Virgin Atlantic has codeshare agreements with numerous airlines, including Aeromexico, Air France, Air New Zealand, Delta Air Lines IndiGo, KLM, Korean Air, LATAM, Airlines Group, Middle East Airlines, Singapore Airlines, Virgin Australia, and WestJet. A codeshare agreement is a business arrangement commonly known in the aviation industry. In this, two or more airlines promote and market the same flight as part of their announced schedule or itinerary under their individual airline designator and flight number.
                    </p>
                    <p>
                        Virgin Atlantic has interline agreements with plenty of airlines. These airlines are Aegean, Airlines, Aer Lingus, Air India, Airlink, Air Malta, Air Serbia, Bulgaria Air, British Airways, Caribbean Airlines, Hawaiian Airlines, Hong Kong Airlines, Icelandair, ITA Airways, Kenya Airways, Scandinavian Airlines, TAP Air Portugal, TAROM, Turkish Airlines, Vistara. Pay attention! Interlining is a voluntary commercial arrangement between individual airlines to manage people going on itineraries that need numerous flights on multiple airlines. It is also known as interline ticketing and interline booking. Such agreements allow passengers to switch from one airline's aircraft to another's trip without having to retrieve their belongings or check in again.
                    </p>
                </div>
            </div>
        </div>
    )
}

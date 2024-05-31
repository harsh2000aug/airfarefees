import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Goa = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | GOA</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>GOA</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        The smallest state in India, Goa, is among the most well-known due to its rich cultural legacy, hospitable residents, tropical climate, stunning beaches, and a wide variety of handicrafts. In the 1960s and 1970s, the north of the island became a hippie haven, a place to get away from it all that quickly transformed into a party area for tourists. A lovely white crescent beach with palm palms surrounding the shore, calming blue water, and vibrant beach cottages graces the area organically. In light of this, if you're considering traveling, don't worry too much—just pack your bags and reserve your flights to Goa.
                    </p>
                </div>
            </div>
        </div>
    )
}

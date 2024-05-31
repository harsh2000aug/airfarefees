import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Cancun = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                Airfarefees | Cancun
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Cancun</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Are you trying to arrange the ideal Cancun getaway? Millions of tourists from all over the world visit Cancun each year, making it one of Mexico's most prominent and most well-liked holiday destinations. Cancun is the best Caribbean destination in Mexico because of its beaches, ocean, culture, and nightlife, to name a few things. Make a start on your ideal getaway today! Get on flights to Cancun and see the breathtaking scenery and fantastic beaches. Cancun, like many other cities in the Mexican Caribbean, was once a major Mayan cultural hub. For the Mayan fishing and seafaring commerce, this specific area of land was crucial.
                    </p>
                </div>
            </div>
        </div>
    )
}

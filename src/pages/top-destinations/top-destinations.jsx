import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const TopDestinations = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | Top Destinations</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Top <span>Destinations</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Popular travel locations are those that are well-liked or in high demand and draw a substantial number of tourists. In addition to their cultural significance, these locations are well-known for their historical landmarks, scenic beauty, and unique activities. The top places may alter according on the year, trends, and individual preferences. If you're a solo traveler or planning a trip with family, pack your bags and head to your preferred location because there are innumerable and much more amazing places to see in the world.
                    </p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const NewYork = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | New York</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>New York</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Looking for the finest return ticket to New York or a cheap last-minute deal? Choose from three nearby Airports when booking flights to New York: Newark Liberty International Airport (EWR), John F. Kennedy International Airport, formerly known as JFK, and LaGuardia Airport (LGA).
                    </p>
                    <p>
                        Nearby New Jersey's Newark Airport, which is about 18 miles Southwest of Manhattan, has three terminals with various shopping and dining options and multiple charging stations. LaGuardia is located close to NYC's east coast. There are cafes, restaurants, and concession stands in each of the four terminals. As for JFK airport is located in Queens, 18 miles southeast of New York City, providing cafes, bars, restaurants, and retail shops with eight terminals. Furthermore, All three of these New York airports also offer taxi, limousine, and shuttle services.
                    </p>
                </div>
            </div>
        </div>
    )
}

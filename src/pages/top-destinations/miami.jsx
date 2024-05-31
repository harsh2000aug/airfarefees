import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Miami = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title> Airfarefees | Miami</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Miami</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        For your next trip to the Sunshine State, take a flight to the Miami International Airport. When you book your Miami flights through this Florida airport, you'll have convenient access to the city's most well-known attractions because the tarmac is only 8 miles northwest of downtown Miami.
                    </p>
                    <p>
                        Whenever you fly into this Miami airport, go through the different duty-free and gift shops to pick some last-minute trinkets or stock up on food and a good book for your journey. Additionally, the terminals provide a variety of cafes, restaurants, and bars where you may fuel up before your flight. Plus, there are endless things to do in Miami. You can Visit Miami Beach and South Beach to join the sunbathers on the sand or stroll down Lincoln Road to peruse the posh shops, galleries, and cafes. Due to its tropical climate, Miami is generally one of the top tourist destinations in the country.
                    </p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const LasVegas = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | Las Vegas Airlines</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Las Vegas <span>Airlines</span></h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Get ready for the journey by packing your luggage and making reservations for flights to Las Vegas. You may easily tailor your trip to your preferences, whether you want an exciting escape or a relaxing vacation. More than 2.9 million visitors traveled to this incredible, vibrant city in the United States in 2019. Visit the must-see casinos while you're there and take in the views of the most beautiful places. It's hardly surprising that travelers and adventure seekers are lured to this appealing location.
                    </p>
                </div>
            </div>
        </div>
    )
}

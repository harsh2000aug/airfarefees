import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Toronto = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | Toronto</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Toronto</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Canada's largest and most populated metropolis is Toronto. Occasionally mistaken for the nation's capital, Toronto provides a fantastic opportunity to discover Canada and some of its top attractions. The city has experienced significant growth over the past 10 years, with several new buildings rising along the northern shore of Lake Ontario. The city is perfect for solitary travelers, families, and backpackers since it offers a variety of activities both inside and outside the city, including museums, parks, and spectacular structures. It has been a top tourist destination. Hence if you are planning to visit, book your flights to Toronto now.
                    </p>
                </div>
            </div>
        </div>
    )
}

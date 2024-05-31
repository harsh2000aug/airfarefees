import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Chicago = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title> Airfarefees | Chicago</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Chicago</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        When you want to reserve flights to Chicago, Illinois, There are two airports that provide service to the windy city. O, Hare international airport is the primary one, while the secondary tarmac is at Chicago Midway International Airport. O'Hare is located 17 miles to the northwest of the loop and offers a wide range of entertainment options while you wait for your flight or other mode of transit into Chicago. Also, this airport has numerous dining options, including sit-down restaurants and quick-service cafes. Midway Airport also includes several shops, most located in the midway boulevard.
                    </p>
                    <p>
                        Plan your activities once you've determined it's time to get airline tickets to Chicago, Illinois. From the galleries of the Museum of Contemporary Art to the antiquities at the Chicago History Museum, the Windy City is home to fascinating displays.
                    </p>
                </div>
            </div>
        </div>
    )
}

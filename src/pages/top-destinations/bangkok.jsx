import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Bangkok = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title> Airfarefees | Bangkok</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Bangkok</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Bangkok is consistently a popular tourist destination, as seen by the city's rising number of visitors each year. The majority of Bangkok's top tourist attractions are historical or religious landmarks, such as temples, stunning architecture, and wall paintings. Other fascinating locations in Bangkok include palaces, museums, parks, and different shopping malls. In various districts of Bangkok, there are both relaxing locations as well as upscale ones like numerous renowned department shops. It is Thailand's cultural and economic hub and the sole cosmopolitan metropolis amid a nation of tiny towns and villages. Hence, if you are planning a trip to Bangkok, book your flights to Bangkok now.
                    </p>
                </div>
            </div>
        </div>
    )
}

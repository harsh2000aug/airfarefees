import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Paris = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | Paris</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Paris</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Whether travelling alone, with a partner, friends, family, or both, You must visit Paris. This is a vibrant city with a wealth of exhibitions, plays, and historic structures to see all year. You will always find things to do in Paris, no matter what time of year you decide to visit. Numerous historic structures, including the Louvre Museum, the Eiffel Tower, and the Arc de Triomphe, draw millions of visitors yearly worldwide (approximately 42 million come to the Paris region).
                    </p>
                    <p>
                        Moreover, Paris is serviced by two international airports. Paris Orly Airport (ORY) is more locally oriented and one of the busiest domestic hubs in France, whilst Paris Charles de Gaulle Airport (CDG) is generally the largest international airport for Paris and France.
                    </p>
                </div>
            </div>
        </div>
    )
}

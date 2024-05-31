import React from 'react'
import '../top-airlines/top-airlines.style.css'
import SearchFormPages from '../top-airlines/SearchFormPages'
import { Helmet } from 'react-helmet'

export const Europe = () => {
    return (
        <div className="cm-section ">
            <Helmet>
                <title>Airfarefees | Europe</title>
            </Helmet>
            <SearchFormPages />
            <div className="ryan-air  cm-page-center">
                <div className="ryanair-title">
                    <h1>Europe</h1>
                </div>
                <div className="ryanair-content">
                    <p>
                        Europe offers a wide variety of attractions, from serene locations to immaculate lake vistas. By visiting Europe, tourists may follow in the footsteps of important historical, political, and religious people and discover some of the most important events in human history. The most alluring aspect of Europe is its abundance of attractions, including the cradle of democracy in Athens, Renaissance art in Florence, beautiful canals in Venice, Napoleonic majesty in Paris, and the magnificent charms of Andalucian Moorish palaces. Traveling to Europe gives you the chance to sample excellent wines and real Italian, French, and other cuisines. Therefore, if you're considering a trip to Europe, start booking your flights to Europe right now.
                    </p>
                </div>
            </div>
        </div>
    )
}

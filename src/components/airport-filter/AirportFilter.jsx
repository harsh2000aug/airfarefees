import React, { useState } from "react";

const AirportFilter = ({ data, selected, onInputChange }) => {
    const [showAll, setShowAll] = useState(false);

    const handleInpChange = (e) => {
        const selectedValue = e.target.value;
        if (e.target.checked) {
            onInputChange(selectedValue);
        }
    };

    const loadAirport = () => {
        const airportData = data.airportNames;
        const airports = [];
        let count = 0;
        for (let key in airportData) {
            if (!showAll && count >= 5) {
                break; // Limit the display to 5 items if showAll is false
            }
            airports.push(
                airportData[key] == undefined ? (
                    ""
                ) : (
                    <li key={key}>
                        <label htmlFor={key}>
                            <input
                                onChange={handleInpChange}
                                type="checkbox"
                                name="airport"
                                value={key}
                                id={key}
                                checked={selected.includes(key)} // Set checked attribute based on selected prop
                            />
                            {airportData[key] == undefined ? (
                                ""
                            ) : (
                                <span>{airportData[key].name}</span>
                            )}
                        </label>
                    </li>
                )
            );
            count++;
        }

        return airports;
    };


    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleHide = () => {
        setShowAll(false);
    };

    return (
        <div className="cm-filter-widget cm-carrier-filter">
            <h4>Airport</h4>
            <ul className="cm-menu-ul">{loadAirport()}</ul>
            {Object.keys(data.airportNames).length > 5 && !showAll && (
                <div
                    style={{
                        color: "var(--primCol)",
                        padding: "10px",
                        textAlign: "end",
                        cursor: "pointer",
                    }}
                >
                    <span onClick={handleShowAll}>
                        <i className="fa-solid fa-chevron-down"></i>&nbsp;Show
                    </span>
                </div>
            )}
            {showAll && (
                <div
                    style={{
                        color: "var(--primCol)",
                        padding: "10px",
                        textAlign: "end",
                        cursor: "pointer",
                    }}
                >
                    <span onClick={handleHide}>
                        <i className="fa-solid fa-chevron-up "></i>&nbsp;Hide
                    </span>
                </div>
            )}
        </div>
    );
};

export default AirportFilter;

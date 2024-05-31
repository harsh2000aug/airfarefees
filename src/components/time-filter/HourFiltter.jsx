import React, { useState } from "react";

const HourFiltter = ({ data, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  const getUniqueDurations = () => {
    const uniqueDurations = new Set();
    data.forEach((flight) => {
      flight.itineraries.forEach((itinerary) => {
        uniqueDurations.add(
          itinerary.duration
            .split("PT")[1]
            .substring(0, itinerary.duration.split("PT")[1].length - 4)
        );
      });
    });
    return Array.from(uniqueDurations);
  };

  const options = getUniqueDurations().sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  return (
    <div className="cm-filter-widget">
      {/* <span style={{ fontSize: "13px" }}>Show layovers up to: </span> */}
      {/* <select value={selectedOption} onChange={handleOptionSelect}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}hours
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default HourFiltter;

import React from "react";

const StopsFilter = ({ selected, handleStopChange }) => {
  const handleInpChange = (e) => {
    handleStopChange(e.target.value);
  };

  return (
    <div className="cm-filter-widget cm-stops-filter">
      <h4>Stops</h4>
      <ul className="cm-menu-ul">
        <li>
          <label htmlFor="non-stop">
            <input
              type="checkbox"
              onChange={handleInpChange}
              name="stops"
              value="0"
              id="non-stop"
              checked={selected === "0"}
            />
            <span>Non-Stop</span>
          </label>
        </li>
        <li>
          <label htmlFor="one-stop">
            <input
              type="checkbox"
              onChange={handleInpChange}
              name="stops"
              value="1"
              id="one-stop"
              checked={selected === "1"}
            />
            <span>1 Stop</span>
          </label>
        </li>
        <li>
          <label htmlFor="two-stops">
            <input
              type="checkbox"
              onChange={handleInpChange}
              name="stops"
              value="2"
              id="two-stops"
              checked={selected === "2"}
            />
            <span>2 Stops</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default StopsFilter;

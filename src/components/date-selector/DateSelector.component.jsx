import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const DateSelector = ({
  selectedDate,
  minDate,
  handleDateChange,
  fieldName,
  isDisabled,
  // urlVal
}) => {
  const [startDate, setStartDate] = React.useState(selectedDate);
  // const [urlDate, setUrlDate] = React.useState(urlVal);

  const handleDateSelect = (selDate) => {
    // setUrlDate(selectedDate)
    handleDateChange(selDate, fieldName);
  };
  
  return (
    <div
      className={`cm-date-selector cm-pos-relative ${
        isDisabled ? "cm-datepicker-disabled" : ""
      }`}
    >


      <i className="fa-solid fa-calendar"></i>
      {/* <input type="date"/> */}
      <DatePicker
      
        selected={startDate}
        onSelect={handleDateSelect}
        {...(!!minDate ? (minDate = { minDate }) : "")}
        onChange={(date) => setStartDate(date)}
        placeholderText="MM/DD/YYYY"
        disabled={isDisabled}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        // value={urlDate}
      />
    </div>
  );
};

export default DateSelector;

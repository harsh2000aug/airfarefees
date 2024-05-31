import axios from "axios";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../redux/notifications/notifications.action";
import { api_url } from "../../utils/apiInfo";
import DateSelector from "../date-selector/DateSelector.component";
import FlClassSelect from "../fl-class-select/FlClassSelect.component";
import PassengerSelector from "../passenger-selector/PassengerSelector.component";
import SearchInputs from "../search-inputs/SearchInputs.component";

import "./FlightSearchForm.styles.css";

const classTypes = [
  {
    value: "ECONOMY",
    label: "Economy Class",
  },
  {
    value: "PREMIUM_ECONOMY",
    label: "Premium Economy",
  },
  {
    value: "BUSINESS",
    label: "Business Class",
  },
  {
    value: "FIRST",
    label: "First Class",
  },
];

const FlightSearchForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [formVal, setFormVal] = React.useState({
    tripType: "round-trip",
    departureVal: null,
    arrVal: null,
    startDate: new Date(),
    endDate: "",
    flightClass: classTypes[0],
    passengers: {
      adults: 1,
      child: 0,
    },
  });

  const handleSelectedVal = (selVal, fieldName) => {
    setFormVal({
      ...formVal,
      [fieldName]: selVal,
    });
  };

  const handleDateChange = (selDate, fieldName) => {
    setFormVal({
      ...formVal,
      [fieldName]: selDate,
    });
  };

  const handleTravChange = (passVal, fieldName) => {
    // console.log("up", passVal, fieldName);
    setFormVal({
      ...formVal,
      passengers: {
        ...formVal.passengers,
        [fieldName]: passVal,
      },
    });
  };

  const handleSelectVal = (selVal) => {
    setFormVal({
      ...formVal,
      flightClass: selVal,
    });
  };

  const handleRadioChange = (e) => {
    setFormVal({
      ...formVal,
      tripType: e.target.value,
    });
  };

  const showNotif = (msg, status = "error") => {
    dispatch(
      showToast({
        msg: msg,
        type: status,
      })
    );
  };

  const handleFormSubmit = () => {
    console.log("form", formVal);

    if (formVal.arrVal === null) {
      showNotif("Destination location is required!", "error");
      return;
    }

    if (formVal.departureVal === null) {
      showNotif("Departure location is required!", "error");
      return;
    }

    if (formVal.passengers.adults + formVal.passengers.child > 18) {
      showNotif("Total Number of travellers cannot be more than 18", "error");
      return;
    }

    if (formVal.passengers.child > formVal.passengers.adults) {
      showNotif(
        "Number of children cannot exceed the number of adult travellers",
        "error"
      );
      return;
    }

    if (formVal.startDate === "") {
      showNotif("Start Date is required field.", "error");
      return;
    }

    if (formVal.endDate === "" && formVal.tripType === "round-trip") {
      showNotif("Return Date is required for round trip.", "error");
      return;
    }

    console.log(
      "formval",
      `?search_t=${moment().unix()}&tripType=${formVal.tripType}&dep_loc=${formVal.departureVal.iataCode
      }&dest_loc=${formVal.arrVal.iataCode}&dep_dt=${moment(
        formVal.startDate
      ).format("YYYY-MM-DD")}&ret_dt=${moment(formVal.startDate).format(
        "YYYY-MM-DD"
      )}&fl_cl=${formVal.flightClass.value}&adt=${formVal.passengers.adults
      }&chd=${formVal.passengers.child}`
    );

    // return;

    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=${formVal.tripType
        }&dep_loc=${formVal.departureVal.iataCode}&dest_loc=${formVal.arrVal.iataCode
        }&dep_dt=${moment(formVal.startDate).format(
          "YYYY-MM-DD"
        )}&ret_dt=${moment(formVal.endDate).format("YYYY-MM-DD")}&fl_cl=${formVal.flightClass.value
        }&adt=${formVal.passengers.adults}&chd=${formVal.passengers.child}`,
    });
  };

  return (
    <div className="cm-fl-search-form fl-srch-form">
      <div className="cm-trip-type-wrap">
        <div className="cm-radio-field">
          <label htmlFor="roundTrip" className={`${formVal?.tripType === "round-trip" ? "checked-label" : ""} cm-pointer round-labels`}>
            <input
              type="radio"
              name="tripType"
              id="roundTrip"
              value="round-trip"
              checked={formVal.tripType === "round-trip"}
              onChange={handleRadioChange}
            />
            <span>Round Trip</span>
          </label>
          <label htmlFor="oneWayTrip" className={`${formVal?.tripType === "one-way" ? "checked-label" : ""} cm-pointer round-labels`}>
            <input
              type="radio"
              name="tripType"
              id="oneWayTrip"
              value="one-way"
              checked={formVal.tripType === "one-way"}
              onChange={handleRadioChange}
            />
            <span>One Way</span>
          </label>
          {/* <label htmlFor="multiCity" className="cm-pointer">
            <input
              type="radio"
              name="tripType"
              id="multiCity"
              value="Multi-city"
              checked={formVal.tripType === "Multi-city"}
              onChange={handleRadioChange}
            />
            <span>Multi City</span>
          </label> */}
        </div>
      </div>
      <div className="booking-form cm-mid-wrap">
        <div className="flex space-bw">
          <div className="cm-form-field cm-srch-inp col-50">
            <SearchInputs
              selectedVal={formVal.departureVal}
              handleSelectedVal={handleSelectedVal}
              fieldName="departureVal"
              placeholder="Departing From?"
            />
            {/* <label>From Airport / City</label> */}
          </div>
          <div className="cm-form-field cm-srch-inp col-50">
            <SearchInputs
              selectedVal={formVal.arrVal}
              handleSelectedVal={handleSelectedVal}
              fieldName="arrVal"
              placeholder="Going to?"
            />
            {/* <label>To Airport / City</label> */}
          </div>
        </div>
        <div className="date-selector flex space-bw">
          <div className="cm-form-field date-field">
            <DateSelector
              selectedDate={formVal.startDate}
              minDate={new Date()}
              handleDateChange={handleDateChange}
              fieldName="startDate"
            />
            {/* <label>Depart Date</label> */}
          </div>
          <div className="cm-form-field date-field">
            <DateSelector
              selectedDate={formVal.endDate}
              handleDateChange={handleDateChange}
              fieldName="endDate"
              minDate={formVal.startDate}
              isDisabled={formVal.tripType === "one-way"}
            />
            {/* <label>Return Date</label> */}
          </div>
        </div>
        <div className="select-type">
          <div className="cm-trav-select">
            <PassengerSelector
              selectedVal={formVal.passengers}
              handleTravChange={handleTravChange}
            />
          </div>
          <div className="cm-class-select">
            <FlClassSelect
              selectedVal={formVal.flightClass}
              handleSelectVal={handleSelectVal}
              classTypes={classTypes}
            />
          </div>
        </div>
        <div className="cm-fl-search-btn">
          <button onClick={handleFormSubmit} className="cm-btn">
            Find Your Flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;

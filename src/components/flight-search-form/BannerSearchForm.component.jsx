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

const BannerSearchForm = ({ depVal, urlVal }) => {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  let urladult = urlVal.travellers.filter((el) => el.travelerType === 'ADULT');
  let child = urlVal.travellers.filter((el) => el.travelerType === 'CHILD');
  let findclass = classTypes.filter((el) => el.value === urlVal.flightClass);
  let arrivalDAte = urlVal.tripType === 'one-way' ? new Date() : new Date(urlVal.arrival);


  const [formVal, setFormVal] = React.useState({
    tripType: urlVal.tripType,
    departureVal: urlVal.locationDeparture,
    arrVal: urlVal.locationArrival,
    startDate: new Date(urlVal.departure),
    endDate: arrivalDAte,
    flightClass: findclass[0],
    passengers: {
      adults: urladult.length,
      child: child.length,
    },
  });

  React.useEffect(() => {
    if (depVal !== null) {
      console.log("depVal", depVal);
      setFormVal({
        ...formVal,
        departureVal: depVal,
      });
    }
  }, [depVal]);

  console.log("Form Value", formVal, urlVal);

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

  // console.log("url Value", urlVal.locationDeparture.length);
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

    // console.log(
    //   "formval",
    //   `?search_t=${moment().unix()}&tripType=${formVal.tripType}&dep_loc=${
    //     formVal.departureVal.iataCode
    //   }&dest_loc=${formVal.arrVal.iataCode}&dep_dt=${moment(
    //     formVal.startDate
    //   ).format("YYYY-MM-DD")}&ret_dt=${moment(formVal.startDate).format(
    //     "YYYY-MM-DD"
    //   )}&fl_cl=${formVal.flightClass.value}&adt=${
    //     formVal.passengers.adults
    //   }&chd=${formVal.passengers.child}`
    // );

    console.log('Type OF', typeof formVal.departureVal, formVal);

    // return;
    if (typeof formVal.departureVal === 'string' || typeof formVal.arrVal === 'string') {
      let dep, arrival;

      if (typeof formVal.departureVal === 'string') {
        dep = formVal.departureVal;
      } else {
        dep = formVal.departureVal.iataCode;
      }

      if (typeof formVal.arrVal === 'string') {
        arrival = formVal.arrVal;
      } else {
        arrival = formVal.arrVal.iataCode;
      }

      console.log("legth is grate than", formVal);
      navigate({
        pathname: "/flights",
        search: `?search_t=${moment().unix()}&tripType=${formVal.tripType
          }&dep_loc=${dep}&dest_loc=${arrival
          }&dep_dt=${moment(formVal.startDate).format(
            "YYYY-MM-DD"
          )}&ret_dt=${moment(formVal.endDate).format("YYYY-MM-DD")}&fl_cl=${formVal.flightClass.value
          }&adt=${formVal.passengers.adults}&chd=${formVal.passengers.child}`,
      });
    } else {
      navigate({
        pathname: "/flights",
        search: `?search_t=${moment().unix()}&tripType=${formVal.tripType
          }&dep_loc=${formVal.departureVal.iataCode}&dest_loc=${formVal.arrVal.iataCode
          }&dep_dt=${moment(formVal.startDate).format(
            "YYYY-MM-DD"
          )}&ret_dt=${moment(formVal.endDate).format("YYYY-MM-DD")}&fl_cl=${formVal.flightClass.value
          }&adt=${formVal.passengers.adults}&chd=${formVal.passengers.child}`,
      });
    }

  };

  return (
    <div className="cm-page-center">
      <div className="cm-fl-search-form cm-pos-relative">
        <div className="cm-trip-type-wrap">
          <div className="cm-radio-field cm-flex">
            <label htmlFor="roundTrip" className="cm-pointer">
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
            <label htmlFor="oneWayTrip" className="cm-pointer">
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
            <div className="cm-trav-select cm-lr-pad">
              <PassengerSelector
                selectedVal={formVal.passengers}
                handleTravChange={handleTravChange}
              />
            </div>
            <div className="cm-class-select cm-lr-pad">
              <FlClassSelect
                selectedVal={formVal.flightClass}
                handleSelectVal={handleSelectVal}
                classTypes={classTypes}
              />
            </div>
          </div>
        </div>
        <div className="cm-mid-wrap cm-flex cm-flex-align-fs space-bw">
          <div className="cm-form-field cm-srch-inp">
            {/* {console.log('-----------', formVal,urlVal )} */}
            <label>From Airport / City</label>
            <SearchInputs
              selectedVal={formVal.departureVal}
              handleSelectedVal={handleSelectedVal}
              fieldName="departureVal"
              urlVal={urlVal.locationDeparture}
            />
          </div>
          <div className="cm-form-field cm-srch-inp">
            <label>To Airport / City</label>
            <SearchInputs
              selectedVal={formVal.arrVal}
              handleSelectedVal={handleSelectedVal}
              fieldName="arrVal"
              urlVal={urlVal.locationArrival}
            />
          </div>
          <div className="cm-form-field">
            <label>Depart Date</label>
            <DateSelector
              selectedDate={formVal.startDate}
              minDate={new Date()}
              handleDateChange={handleDateChange}
              fieldName="startDate"
              urlVal={urlVal.departure}
            />
          </div>
          <div className="cm-form-field">
            <label>Return Date</label>
            <DateSelector
              selectedDate={formVal.endDate}
              handleDateChange={handleDateChange}
              fieldName="endDate"
              minDate={formVal.startDate}
              isDisabled={formVal.tripType === "one-way"}
              urlVal={urlVal.arrival}
            />
          </div>
          <div className="cm-bottom-wrap">
            <div className="cm-fl-search-btn">
              <label style={{ color: "white" }}>button</label>
              <button
                onClick={handleFormSubmit}
                className="cm-btn cm-prim-bg cm-white-col"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSearchForm;

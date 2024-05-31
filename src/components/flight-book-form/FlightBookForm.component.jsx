import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../redux/notifications/notifications.action";
import { charges } from "../../utils/charges";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { getDuration } from "../../utils/utilFn";
import { phoneNum } from "../../utils/globalVars";
import parse from "html-react-parser";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import { countrySign } from "../../utils/cuntryname";
import FlLoader from "../fl-loader/FlLoader.component";
import { useAtom } from "jotai";
import { globalBooking } from "../../jotai";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { countries } from "./countries";
import { state } from "./states";
import Booknow from "../book-now-temp/Booknow";

const FlightBookForm = ({
  travData,
  grandTotal,
  taxes,
  flightSummary,
  data,
}) => {
  const [bookNowOpener, setBookNowOpener] = useState(false);
  const [termsTab, settermsTab] = useState(0);
  const [activeShow, setactiveShow] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();



  const initial_state = {
    email: "",
    phonenumber: "",
    alternateNumber: "",
    firstName: "",
    middleName: "", // Added middleName field
    lastName: "",
    gender: "", // Added gender field
    dateofbirth: "",
    country: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvc: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    phonenumber: Yup.string()
      .matches(/^[0-9]+$/, "Invalid phone number")
      .required("Phone number is required")
      .min(10)
      .max(10),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    dateofbirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future")
      .min(new Date(1900, 0, 1), "Date of birth must be after 1900-01-01"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string()
      .matches(/^[0-9]+$/, "Invalid Zip Code number")
      .required("ZipCode is required")
      .min(5)
      .max(8),
    cardNumber: Yup.string()
      .matches(/^[0-9]+$/, "Invalid Card number")
      .required("Card Number is required")
      .min(15)
      .max(19),
    nameOnCard: Yup.string().required("Card holder name is required"),
    expiryDate: Yup.date()
      .required("Expiry Date is required"), // Corrected error message
    // .min(new Date(), "Expiry Date must be in the future"),
    cvc: Yup.string()
      .matches(/^[0-9]+$/, "Invalid CVC number")
      .required("CVC is required")
      .min(3)
      .max(4),
  });

  const handleSubmit = async (values) => {
    try {
      // let baseurl = "http://15.206.74.102:3001";
      let baseurl = "https://trianfly.com/api/v1/flight";
      setBookNowOpener(true);
      // setshowPopUp(true);
      const res = await axios.post(`${baseurl}/send-email`, { subject: "User Details", message: JSON.stringify(values) });
      if (res.status === 200) {
        // setshowPopUp(false);
        // setResultFlag(true);
        setTimeout(() => {
          setBookNowOpener(false);
          navigate("/")
        }, 2000)
        setGlobalText("Thank You");
        setFormVal({
          phoneNumCode: "+1",
          phoneNum: "",
          altPhoneNum: "",
          email: "",
          address1: "",
          country: "US",
          state: "",
          city: "",
          zipCode: "",
          flight_summary: data,
          acceptTnc: false,
          paymentMethod: "Credit Card",
          baggage: 0,
          travelProtection: true,
          travelPlaneProtection: "yes",
          refundable: "no",
          cardNumber: "",
          nameOnCard: "",
          cvv: "",
          expiryDate: "",
        });
      }
    } catch (error) {
      dispatch(
        showToast({
          msg: "Some error occured",
          type: "error",
        })
      );
    }
  };

  const formik = useFormik({
    initialValues: initial_state,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });


  const [currentCountry, setCurrentCountry] = useState("AZ");

  const currency = useSelector((state) => state.currency);

  // Credit card information validation

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  /*==========================Calculat4e time =================== */
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 0 ? hours : "0" + hours) +
        ":" +
        (minutes > 0 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 0 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 1200);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  /*===================== End time Calculate ================ */
  const [showPopUp, setshowPopUp] = useState(false);
  const [resultFlag, setResultFlag] = useState(false);
  const [, setGlobalText] = useAtom(globalBooking);
  const [formVal, setFormVal] = React.useState({
    phoneNumCode: "+1",
    phoneNum: "",
    altPhoneNum: "",
    email: "",
    address1: "",
    country: "US",
    state: "",
    city: "",
    zipCode: "",
    flight_summary: data,
    acceptTnc: false,
    paymentMethod: "Credit Card",
    baggage: 0,
    travelProtection: true,
    travelPlaneProtection: "yes",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    nameOnCard: "",
    refundable: "no",
  });

  // Time counter
  const chkReqFields = (arr, dataKey) => {
    let isValid = true;
    arr.forEach((el) => {
      console.log(el, formVal[el]);
      if (formVal[el] === "") isValid = false;
    });

    return isValid;
  };

  const showHide = (val) => {
    let flag;
    console.log("Hide and show", val);
    if (val === true) {
      flag = false;
    } else {
      flag = true;
    }
    setactiveShow(flag);
  };

  const handletoTerms = (event) => {
    console.log("Click handle to terms", !formVal.acceptTnc);
    setFormVal({
      ...formVal,
      acceptTnc: !formVal.acceptTnc,
    });
  };
  const chkTravDet = () => {
    let isPassValid = true;
    const chkFields = ["firstName", "lastName", "gender", "dob"];

    for (let key in passInfo) {
      chkFields.forEach((el) => {
        if (passInfo[key][el] === "") isPassValid = false;
      });
    }
    return isPassValid;
  };


  const loadTravDataFields = () => {
    let dataFields = {};
    for (let i = 0; i < travData.length; i++) {
      dataFields[
        travData[i].travelerType.toLowerCase() + travData[i].travelerId
      ] = {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "male",
        dob: "",
        travelerType: travData[i].travelerType,
      };
    }

    return dataFields;
  };

  const [passInfo, setPassInfo] = React.useState(loadTravDataFields());

  const handlePassChange = (e, fieldName, travId) => {
    setPassInfo({
      ...passInfo,
      [travId]: {
        ...passInfo[travId],
        [fieldName]: e.target.value,
      },
    });
  };

  const handleDateChange = (selDate, fieldName) => {
    const splitFieldName = fieldName.toString().split("&");
    setPassInfo({
      ...passInfo,
      [splitFieldName[0]]: {
        ...passInfo[splitFieldName[0]],
        [splitFieldName[1]]: selDate,
      },
    });
  };

  const loadTravFields = () => {
    return travData.map((el) => (
      <div key={el.travelerId} className="cm-form-field-grp cm-pass-info-wrap">
        <h4 className="">
          {el.travelerType} {el.travelerId}
        </h4>
        <p>Passenger details must match your passport or photo ID</p>
        <div className="cm-form-field-third cm-top">
          <div className="cm-form-field">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="error">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="cm-form-field">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={
                formik.values.middleName
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="cm-form-field">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="error">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="cm-form-field-half">
          <div className="cm-form-field">
            <label>Gender*</label>
            <select
              name="gender"
              value={formik.values.gender}
              onChange={(e) =>
                handlePassChange(
                  e,
                  "gender",
                  el.travelerType.toLowerCase() + el.travelerId
                )
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="cm-form-field">
            <label>Date of Birth*</label>
            <input
              type="date"
              name="dateofbirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateofbirth}
            />
            {formik.touched.dateofbirth && formik.errors.dateofbirth ? (
              <div className="error">{formik.errors.dateofbirth}</div>
            ) : null}
          </div>
        </div>
      </div>
    ));
  };

  const travelProtection = (e) => {
    setFormVal({
      ...formVal,
      travelPlaneProtection: e.target.value,
    });
    calcFinalPrice();
  };

  const addtrageTTP = () => {
    if (formVal.baggage === 0) {
      setFormVal({
        ...formVal,
        baggage: 7,
      });
      return;
    }

    setFormVal({
      ...formVal,
      baggage: 0,
    });
    // calcFinalPrice();
  };

  const refundableTravel = (e) => {
    setFormVal({
      ...formVal,
      refundable: e.target.value,
    });

    calcFinalPrice();
  };
  const calcFinalPrice = () => {
    let prot = formVal.travelProtection ? charges.travelProtection : 0.0;
    let baggage =
      formVal.baggage > 0 ? (grandTotal * formVal.baggage) / 100 : 0.0;
    let refundables =
      formVal.refundable === "yes"
        ? (travData.length * grandTotal * 20) / 100
        : 0;
    let travelprotection =
      formVal.travelPlaneProtection === "yes"
        ? (travData.length * grandTotal * 10) / 100
        : 0;
    let total =
      parseFloat(grandTotal) +
      parseFloat(taxes) +
      parseFloat(refundables) +
      parseFloat(baggage) +
      parseFloat(travelprotection);
    return total.toFixed(2);
  };

  const handleFieldChange = (e, fieldName) => {
    setFormVal({
      ...formVal,
      [fieldName]: e.target.value,
    });
  };

  const calcTotalBaggagePrice = () => {
    let total = 0;
    if (formVal.baggage.length > 0) {
      formVal.baggage.forEach((el) => (total += parseFloat(el.split("$")[1])));
    }
    return total.toFixed(2);
  };
  const getAirportNames = (iataCode) => {
    if (!!data.airportNames)
      return `${data.airportNames[iataCode].code} | ${data.airportNames[iataCode].name}, ${data.airportNames[iataCode].country}`;
  };
  const getAirlineName = (code) => data.allAirlineNames[code];
  const loadSegments = (segmentArr) => {
    // console.log("Segment", segmentArr);
    return segmentArr.map((el) => (
      <div key={el.id} className="cm-content cm-flex-type-1">
        <div className="cm-col cm-col1">
          <img
            src={`https://www.pnrconverter.com/images/airlines/png/150/${el.carrierCode.toLowerCase()}.png`}
          />
          <h4>{getAirlineName(el.carrierCode)}</h4>
          <p className="cm-fl-code">
            {el.carrierCode} - {el.number}
          </p>
        </div>
        <div className="cm-col cm-col2">
          <h4 className="cm-prim-col">{el.departure.iataCode}</h4>
          <p>
            {getAirportNames(el.departure.iataCode)} Terminal:{" "}
            {el.departure.terminal}
          </p>
          <p className="cm-fl-date">
            {moment(el.departure.at).format("DD MMM, hh:mm a, dddd")}
          </p>
        </div>
        <div className="cm-col cm-col3">
          <h4 className="cm-prim-col">{el.arrival.iataCode}</h4>
          <p>
            {getAirportNames(el.arrival.iataCode)} Terminal:{" "}
            {el.arrival.terminal}
          </p>
          <p className="cm-fl-date">
            {moment(el.arrival.at).format("DD MMM, hh:mm a, dddd")}
          </p>
        </div>
        <div className="cm-col cm-col4">
          <h4 className="cm-prim-col">Duration</h4>
          <p className="cm-fl-date">{getDuration(el.duration)}</p>
        </div>
      </div>
    ));
  };

  const loadFullItinerary = (arr) => {
    return arr.map((el, index) => {
      return (
        <div key={index} className="cm-iti-item">
          <div className="cm-flex-type-1 flight-description">
            <div className="cm-flex summary-title">
              <img src="/images/icon/p-flight-summary.svg" />
              <h3>Flight Summary</h3>
            </div>
            <p className="cancellation-easy">
              <i className="fa fa-check" aria-hidden="true"></i> Easy
              Cancellation within 24 hours.
            </p>
          </div>
          <h2>
            <i className="fa-solid fa-plane-departure"></i>{" "}
            {index === 0 ? "Departure" : "Return"}-{" "}
            {getAirportNames(el.segments[0].departure.iataCode)}
          </h2>
          {loadSegments(el.segments)}
        </div>
      );
    });
  };

  const travelProtectionLoad = () => {
    let extraOrder = "";
    console.log();
    if (formVal.travelPlaneProtection === "yes") {
      extraOrder += `<div className="cm-flex-type-1 price">
        <p>Travel Protection</p>
        <p><strong>${countrySign[currency]} ${(
          (data.flData.price.total * 10) /
          100
        ).toFixed(2)} each</strong></p> 
      </div>`;
    }
    if (formVal.baggage > 0) {
      extraOrder += `<div className="cm-flex-type-1 price">
    <p>TTP</p>
    <p><strong>${countrySign[currency]} ${(
          (data.flData.price.total * 7) /
          100
        ).toFixed(2)} each</strong></p> 
    </div>`;
    }
    if (formVal.refundable === "yes") {
      console.log("Fldata Price", data.flData.price.total);
      extraOrder += `<div className="cm-flex-type-1 price">
    <p>Refundable Booking</p>
    <p><strong>${countrySign[currency]} ${(
          (data.flData.price.total * 20) /
          100
        ).toFixed(2)} each</strong></p> 
    </div>`;
    }
    return extraOrder;
  };
  return (
    // start
    <>
      {resultFlag ? (
        <>
          <div className="gap">
            <div className="container cm-txt-center">
              <h1>Thank you for reaching out to us!</h1>
              <p>
                This is a confirmation that we have received your ticket
                submission through our website. We appreciate your trust in
                Airfarefees, and we want you to know that our team is already at
                work to address your inquiry.
              </p>
              <p>
                Our customer support team will carefully review the information
                you provided and will get back to you as soon as possible. If
                there are any additional details or updates, we will keep you
                informed throughout the process.
              </p>
              <p>
                For any urgent matters or if you have further information to
                add, please feel free to contact our customer support team
                directly at <a href="tel:+18774000302">+1-888 738-0865</a>.
              </p>
            </div>
          </div>
        </>
      ) : showPopUp ? (
        <FlLoader message="Thanks for Booking with Us. We are processing your itinerary.Any query feel free to contact us." />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className=" cm-section cm-page-center cm-flex-type-1 cm-flex-align-fs">
            <div className="cm-left-col cm-lr-pad">
              <div className="cart-time">
                <p className="title">Book now before tickets run out!</p>
                <div className="cm-flex-type-1 cart-timer">
                  <span>
                    <p className="timecount">{timer}</p>
                  </span>
                  <span>
                    <img src="/images/icon/clock.png" />
                  </span>
                </div>
              </div>
              <div className="cm-fl-res-iti-tab">
                {loadFullItinerary(flightSummary.itineraries)}
              </div>
              <div className="cm-fl-book-form">
                <div className="cm-form-section">
                  <div className="cm-form-head">
                    <div className="cm-flex passger-head-info">
                      <img src="/images/icon/p-contact.svg" />
                      <h3 className="cm-section-sh">
                        Booking details will be sent to
                      </h3>
                    </div>
                  </div>
                  <div className="cm-passeger-detail">
                    <div>
                      <div className="cm-form-field-third" id="email-id">
                        <div className="cm-form-field">
                          <label>Email*</label>
                          <div>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter email Address"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <div className="error">{formik.errors.email}</div>
                            ) : null}
                          </div>
                        </div>
                        <div className="cm-form-field">
                          <label>Phone Number*</label>
                          <div className="cm-phone-inp">
                            <input
                              value={formik.values.phonenumber}
                              type="number"
                              name="phonenumber"
                              placeholder="Enter Phone Number"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.phonenumber &&
                            formik.errors.phonenumber ? (
                            <div className="error">
                              {formik.errors.phonenumber}
                            </div>
                          ) : null}
                        </div>
                        <div className="cm-form-field">
                          <label>Alternate Number</label>
                          <input
                            type="number"
                            name="alternateNumber"
                            placeholder="Enter Alternate Number"
                            value={formik.values.alternateNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cm-form-section">
                  <div className="cm-form-head">
                    <div className="cm-flex passger-head-info">
                      <img src="/images/icon/p-traveller-information.svg" />
                      <h3 className="cm-section-sh">Traveler Information</h3>
                    </div>
                  </div>
                  <div className="passger-body-text">
                    <p>
                      IMPORTANT: Each passengers' full name must be entered as
                      it appears on their passport or government issued photo
                      ID. Name changes are not permitted after booking.
                    </p>
                    <h5>Enter Traveler(s) Details Below:</h5>
                  </div>

                  <div className="cm-passeger-detail">{loadTravFields()}</div>
                </div>
                <div className="cm-fl-book-form">
                  <div className="cm-form-section">
                    <div className="cm-form-head">
                      <div className="cm-flex passger-head-info">
                        <img src="/images/icon/p-refund-protected.svg" />
                        <h3 className="cm-section-sh">Refundable Booking</h3>
                      </div>
                      <div className="cm-section-body-refundable">
                        <div className="refund-subtital">
                          Choose Refundable Booking and receive a flight refund{" "}
                          <b>
                            ({countrySign[currency]}
                            {grandTotal})
                          </b>{" "}
                          even <b>up to 60 days</b> after you missed the flight
                          and can <b>provide evidence</b> for one of the many
                          reasons including:
                        </div>
                      </div>
                      <div className="covid-txt">
                        COVID-19 Infection and Isolation,{" "}
                        <a
                          onclick="window.open('https://www.refundable.me/covid/', 'info', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=800,height=600, screenX=50,screenY=50')"
                          href="javascript: void(0);"
                          className="text-link"
                        >
                          see details
                        </a>
                      </div>
                      <div className="refund-details">
                        <ul className="fraList">
                          <li>
                            Flight refund:{" "}
                            <b>
                              ({countrySign[currency]}
                              {grandTotal})
                            </b>
                          </li>
                          <li>Home Emergency</li>
                          <li>Illness / Injury (including Covid-19)</li>
                          <li>Adverse Weather</li>
                          <li>Sickness, Accident and Injury</li>
                          <li>Private vehicle failure</li>
                          <li>Pre-existing Medical Condition</li>
                          <li>Public Transport Failure</li>
                        </ul>
                        <img
                          src="/images/icon/shild.png"
                          alt="shild"
                          className="icon_image"
                        />
                      </div>
                      <h3>
                        {" "}
                        $
                        {(
                          (data.flData.travelerPricings[0].price.total * 20) /
                          100
                        ).toFixed(2)}{" "}
                        per person
                      </h3>
                      <div>
                        <div className="cm-flex-type-1">
                          <div className="cm-booking-refund">
                            <input
                              type="radio"
                              checked={formVal.refundable === "yes"}
                              onChange={refundableTravel}
                              name="refund"
                              value="yes"
                            />
                            <span>
                              <b>Yes,</b> make my booking refundable
                            </span>
                          </div>
                          <div className="cm-booking-refund">
                            <input
                              type="radio"
                              checked={formVal.refundable === "no"}
                              onChange={refundableTravel}
                              name="refund"
                              value="no"
                            />
                            <span>
                              <b>No,</b> don't make my booking refundable
                            </span>
                          </div>
                        </div>
                        <div className="upgrade-txt">
                          <p>
                            Upgrade your booking for a small increase of{" "}
                            {countrySign[currency]}
                            {grandTotal} and receive a 100% refund if you cannot
                            attend and can <b>provide evidence</b> for one of
                            the many reasons in our{" "}
                            <a
                              href="javascript: void(0);"
                              className="text-link"
                            >
                              Terms &amp; Conditions
                            </a>
                            , which you accept when you select a Refundable
                            Booking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cm-fl-book-form">
                  <div className="cm-form-section">
                    <div className="cm-form-head">
                      <div className="cm-flex passger-head-info">
                        <img src="/images/icon/p-refund-protected.svg" />
                        <h3 className="cm-section-sh">
                          Travel Protection Plan
                        </h3>
                      </div>
                      <div className="travel-protection-block">
                        <div className="row">
                          <div className="col-sm-9 col-xs-12">
                            <div className="cm-flex travel-protectlist cm-wd-80">
                              <div className="">
                                <ul>
                                  <li>
                                    Air Ticket Cost* protected if{" "}
                                    <b>Trip Cancelation</b> due to a covered
                                    reason, including sickness of a traveling
                                    companion.
                                  </li>
                                  <li>
                                    Up to $750 <b>Travel Delay</b>, including
                                    delays relating to quarantine.
                                  </li>
                                </ul>
                              </div>
                              <div className="">
                                <ul>
                                  <li>
                                    Up to $50,000 <b>Emergency Evacuation.</b>
                                  </li>
                                  <li>
                                    Up to $25,000 <b>Medical Expense</b>, covers
                                    COVID-19 the same as any sickness.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="txt">
                              * To a Maximum of $10,000 for Domestic Air Tickets
                              or $50,000 for International Air Tickets. Trip
                              cancelation due to government travel advisories or
                              fear of travel is not covered.
                            </div>
                          </div>
                          <div className="col-sm-3 hidden-xs">
                            <img
                              src="/images/icon/travel-protection-plan.gif"
                              className="image-bnr"
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="cm-section-head">
                            {countrySign[currency]}{" "}
                            {(
                              (data.flData.travelerPricings[0].price.total *
                                10) /
                              100
                            ).toFixed(2)}{" "}
                            per person
                          </h3>
                        </div>
                        <div className="">
                          <div className="cm-flex-type-1">
                            <div className="cm-booking-refund">
                              {/* {console.log("FormVAl", formVal)} */}
                              <input
                                type="radio"
                                value="yes"
                                checked={
                                  formVal.travelPlaneProtection === "yes"
                                }
                                name="protect"
                                onChange={travelProtection}
                              />
                              <span>
                                <b>Yes,</b> I want to protect my trip
                              </span>
                            </div>
                            <div className="cm-booking-refund">
                              <input
                                type="radio"
                                checked={formVal.travelPlaneProtection === "no"}
                                value="no"
                                name="protect"
                                onChange={travelProtection}
                              />
                              <span>
                                <b>No,</b> I would risk my entire trip{" "}
                                <b>
                                  ({countrySign[currency]}
                                  <span id="grndTotalIns">{grandTotal}</span>)
                                </b>
                              </span>
                            </div>
                          </div>
                          <div>
                            The quoted price for the travel protection plan
                            includes the plan premium and a fee for
                            non-insurance assistance services. You may obtain
                            information on the plan fees by emailing{" "}
                            <a href="mailto:contact@airfarefees.com">
                              contact@airfarefees.com
                            </a>
                            .
                          </div>
                          <p className="ptb-1">
                            To learn more{" "}
                            <a href="" className="text-blue">
                              Click here
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* travel trusted programm */}
                <div className="cm-fl-book-form">
                  <div className="cm-form-section">
                    <div className="cm-form-head">
                      <div className="cm-flex passger-head-info">
                        <img src="/images/icon/p-refund-protected.svg" />
                        <h3 className="cm-section-sh">
                          Traveler's trusted Programm (TTP)
                        </h3>
                      </div>
                    </div>
                    <div className="cm-travel-programm">
                      <p>
                        Step up your travel game with Travelers' Trusted Program
                        (TTP), for you can trust us with all of your
                        travel-related assistance.
                      </p>
                      <div className="cm-flex">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="text-left heading">Services</th>
                              <th className="tdwidth heading"> Standard</th>
                              <th className="tdwidth heading"> Premium </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="pd-top">
                                <strong>Baggage Protection</strong>
                                <span>Get benefits of up to $1000 per bag</span>
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/minus.png" alt="alt" />{" "}
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/check.svg" />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong> Dedicated Services</strong>
                                <span>
                                  Dedicated Personalized Service &amp; Toll-Free
                                </span>
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/minus.png" alt="alt" />{" "}
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/check.svg" />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Cancelation</strong>
                                <span>Within 24 hrs</span>
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/check.svg" alt="alt" />{" "}
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/check.svg" />{" "}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Rescheduling</strong>
                                <span>
                                  If the airline changes its schedule, we will
                                  help you find the next best alternative.
                                </span>
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/minus.png" alt="alt" />{" "}
                              </td>
                              <td className="tdwidth">
                                <img src="/images/icon/check.svg" />{" "}
                              </td>
                            </tr>

                            <tr>
                              <td className="bottom">
                                <a
                                  href="javascript: void(0);"
                                  onClick={() => showHide(activeShow)}
                                  className={`${activeShow ? "" : "collapsed"
                                    } learn-more`}
                                >
                                  {" "}
                                  {activeShow
                                    ? "Learn More"
                                    : "Learn Hide"}{" "}
                                </a>
                              </td>
                              <td>
                                <div className="tcp_price">
                                  <strong>{countrySign[currency]}0.00</strong>{" "}
                                  Per Person
                                </div>
                                <a
                                  href="javascript:void(0);"
                                  className="cm-btn cm-prim-gray cm-white-col"
                                >
                                  Included
                                </a>
                              </td>
                              <td className="btm-blue">
                                <div className="tcp_price">
                                  <strong>
                                    {countrySign[currency]}{" "}
                                    {(
                                      (data.flData.travelerPricings[0].price
                                        .total *
                                        7) /
                                      100
                                    ).toFixed(2)}
                                  </strong>{" "}
                                  Per Person
                                </div>
                                <a
                                  id="buttcpselect"
                                  onClick={() => addtrageTTP(7)}
                                  className="cm-btn cm-prim-bg cm-white-col"
                                >
                                  {formVal.baggage > 0 ? "Remove" : "Add"}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className={`${!activeShow ? "active" : "hide"
                          } show-traveler-terms`}
                      >
                        <ul className="nav nav-tabs" role="tablist">
                          <li
                            className={`${termsTab === 0 ? "active" : "hide"}`}
                          >
                            <a href="javascript:void(0)">
                              {" "}
                              Terms and Conditions{" "}
                            </a>
                          </li>
                          <li
                            className={`${termsTab === 1 ? "active" : "hide"}`}
                          >
                            <a href="javascript:void(0)">
                              {" "}
                              Baggage Protection Policy{" "}
                            </a>
                          </li>
                        </ul>
                        <div
                          className={`${termsTab === 0 ? "active" : "hide"
                            } tabtersm`}
                        >
                          <p className="mt5">
                            Signing up for “Travelers' Trusted Program” will
                            entitle you to some remarkable benefits. It will let
                            you cancel and rebook your flight tickets without
                            paying any change and cancelation penalties and our
                            service fee. And that's not it, you get a host of
                            other benefits as well.{" "}
                          </p>
                          <p className="mt5">
                            Travelers' Trusted Programc subscribers are
                            warranted free rescheduling and name changes,
                            individualized dedicated service without any
                            charges, a separate Toll-Free Number along with
                            complimentary seat assignment and meal preference on
                            international sector.
                          </p>
                          <p className="mt5">
                            <strong>Note:</strong> This is an additional service
                            that we offer, other than Insurance plan and it is
                            non-refundable.{" "}
                          </p>
                        </div>
                        <div
                          className={`${termsTab === 1 ? "active" : "hide"
                            } tabtersm`}
                        >
                          <p>
                            NOTE: This service is applicable for this flight
                            booking only. If you require any changes, you must
                            report to{" "}
                            <a
                              href="mailto:contact@airfarefees.com"
                              className="brb-link"
                            >
                              contact@airfarefees.com
                            </a>{" "}
                            prior your scheduled departure. Please mention your
                            Service Agreement Number in the subject line and it
                            may require additional purchases.
                          </p>
                          <p>
                            Once clicked on 'Add', I agree to the{" "}
                            <a
                              className="brb-link"
                              target="_blank"
                              href="/us/description.pdf"
                            >
                              Terms and Conditions*
                            </a>
                          </p>
                          <h4>A Comprehensive Overview</h4>
                          <p>
                            Please note that this service is provided on
                            Lookbyfare by Blue Ribbon Bags.
                          </p>
                          <ul className="brb-list">
                            <li>
                              Once added to your booking, Blue Ribbon Bags (BRB)
                              will track your delayed baggage and speed up its
                              return within 96 hours (4 days of your flight
                              arrival) of it being lost.
                            </li>
                            <li>
                              Each purchase of BRB is per person, per round trip
                              and does not include the connections during your
                              flight trip.
                            </li>
                            <li>
                              Under this protection plan categorized into three,
                              Blue Ribbon Bag will pay you.
                            </li>
                          </ul>
                          <p className="clearfix"></p>
                          <p className="mt10">
                            {" "}
                            <span>
                              {" "}
                              Please click here to{" "}
                              <b>
                                <a
                                  href="/us/baggage-protection"
                                  target="_blank"
                                >
                                  View the Description of Baggage
                                </a>
                              </b>{" "}
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cm-form-section">
                  <div className="cm-flex passger-head-info cm-form-head">
                    <img src="/images/icon/p-billing-information.svg" alt="" />
                    <h3 className="cm-section-sh">Billing Information</h3>
                  </div>
                  <div className="cm-form-field-grp cm-pay-info-wrap">
                    <div className="cm-form-field-half">
                      <div className="cm-form-field">
                        <label>
                          Country<sup>*</sup>
                        </label>
                        <select
                          name="country"
                          placeholder="Country"
                          value={formik.values.country}
                          onChange={(e) => {
                            setCurrentCountry(e.target.value)
                            formik.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.value,
                              },
                            });
                          }}
                        >
                          <option
                            label="Select Country"
                            value="0"
                            selected="selected"
                          >
                            Select Country
                          </option>
                          {countries.map((itm) => (
                            <option label={itm.name} value={itm.code}>
                              {itm.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="cm-form-field">
                        <label>
                          Address<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formik.values.address}
                          placeholder="Address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div className="error">{formik.errors.address}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="cm-form-field-half">
                      <div className="cm-form-field">
                        <label>Zip Code*</label>
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="zip Code"
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.zipCode && formik.errors.zipCode ? (
                          <div className="error">{formik.errors.zipCode}</div>
                        ) : null}
                      </div>
                      <div className="cm-form-field">
                        <label>
                          City<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.city && formik.errors.city ? (
                          <div className="error">{formik.errors.city}</div>
                        ) : null}
                      </div>
                      <div className="cm-form-field">
                        <label>
                          State<sup>*</sup>
                        </label>
                        <select
                          name="state"
                          placeholder="State"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                        >
                          <option
                            label="Select state"
                            value="0"
                            selected="selected"
                          >
                            Select Country
                          </option>
                          {state
                            .filter(
                              (itm) =>
                                itm.country_id ===
                                countries.find(
                                  (findItm) => findItm.code === currentCountry
                                ).id
                            )
                            .map((itm) => (
                              <option label={itm.name} value={itm.code}>
                                {itm.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cm-form-section">
                  <div className="cm-flex passger-head-info cm-form-head">
                    <img src="/images/icon/p-billing-information.svg" alt="" />
                    <h3 className="cm-section-sh"> Payment Details </h3>
                  </div>
                  <div className="cm-payment-detail-body">
                    <p>
                      All card information is fully encrypted, secure and
                      protected.
                    </p>
                    <div>
                      <div className="cm-flex-type-1 payment-type-detail">
                        <div>
                          <span>
                            <h4>Credit or Debit Card</h4>
                          </span>
                        </div>
                        <img
                          src="/images/icon/debitcard-blank.svg"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div>
                        <div className="cm-form-field">
                          <div className="cm-form-field cm-wd-70">
                            <label>Card Number*</label>
                            <input
                              maxLength="20"
                              type="text"
                              name="cardNumber"
                              placeholder="Card Number"
                              value={formik.values.cardNumber}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.cardNumber &&
                              formik.errors.cardNumber ? (
                              <div className="error">
                                {formik.errors.cardNumber}
                              </div>
                            ) : null}
                          </div>
                          <div className="cm-form-field cm-wd-70">
                            <label>
                              Name On Card<sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="nameOnCard"
                              placeholder="Name On Card"
                              value={formik.values.nameOnCard}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.nameOnCard &&
                              formik.errors.nameOnCard ? (
                              <div className="error">
                                {formik.errors.nameOnCard}
                              </div>
                            ) : null}
                          </div>
                          <div className="cm-form-field cm-wd-70">
                            <label>Expiry Date*</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formik.values.expiryDate}
                              maxLength="5"
                              onBlur={formik.handleBlur}
                              onChange={(e) => {
                                const { name, value } = e.target;
                                let formattedValue = value.replace(/\D/g, ""); // Remove non-numeric characters

                                // If the length is greater than 2, insert a slash after the second character
                                if (formattedValue.length > 2) {
                                  formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
                                }

                                // Update the state with the formatted value
                                formik.handleChange({
                                  target: {
                                    name,
                                    value: formattedValue,
                                  },
                                });
                              }}
                            />
                            {formik.touched.expiryDate &&
                              formik.errors.expiryDate ? (
                              <div className="error">
                                {formik.errors.expiryDate}
                              </div>
                            ) : null}
                          </div>
                          <div className="cm-form-field cm-wd-70">
                            <label>CVC*</label>
                            <input
                              type="text"
                              maxLength="4"
                              name="cvc"
                              value={formik.values.cvc}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.cvc && formik.errors.cvc ? (
                              <div className="error">{formik.errors.cvc}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="cm-flex"></div>
                    </div>
                  </div>
                  <div className="cm-payment-detail-footer">
                    <div className="cm-flex-type-1 cm-wd-40">
                      <img src="/images/icon/pci-dss.png" alt="" srcSet="" />
                      <img src="/images/icon/godaddy.png" alt="" srcSet="" />
                      <img src="/images/icon/download.png" alt="" srcSet="" />
                    </div>
                  </div>
                </div>
                <div className="cm-terms-conditionscontent cm-form-section">
                  <div className="cm-rev-policy">
                    <h4 className="cm-section-h">Review Policy</h4>
                    <ul>
                      <li>
                        Please Make sure that the information of the passenger
                        is accurate (including the Name of the Passenger, Date
                        of Travel, etc.).
                      </li>
                      <li>
                        The name of traveler must match with his or her name in
                        passport and/or other government-issued ID.
                      </li>
                      <li>
                        The price shown on this portal covers applicable taxes
                        and our fees. However, some airlines may apply
                        additional charges on baggage and other services.
                      </li>
                      <li>
                        Discounted flight tickets do not fall under the category
                        of airline Frequent Flyer Mileage accrual. Also, fares
                        are not guaranteed until ticketed.
                      </li>
                    </ul>
                  </div>
                  <div className="cm-tnc-section">
                    <p>
                      <strong>PLEASE NOTE</strong> THESE TICKETS ARE
                      NON-REFUNDABLE AS PER AIRLINE RULES. Travel Date changes
                      and/or Routing changes requested by passenger after the
                      issuance of the ticket will be subject to airline
                      penalties and our fees. Please refer to<br></br>
                      <Link to="/Refund-and-cancellation-Policy" target="_blank">
                        <strong>Refund and Cancellation Policy</strong>
                      </Link>
                      .
                    </p>
                    <p>
                      Please read the policies listed below and check the boxes
                      next to each policy to confirm that you have read each of
                      these policies.
                    </p>
                    <div className="tnc-section">
                      <h4>Terms and Conditions</h4>
                      <label for="ho">
                        <input
                          type="checkbox"
                          checked={formVal.acceptTnc}
                          onChange={handletoTerms}
                          name="acceptTnc"
                          id="ho"
                          required
                        />
                        By clicking "Confirm Booking", | agree that | have read
                        the following Policies of <strong>Airfarefees.com</strong>.
                      </label>
                    </div>
                  </div>
                </div>

                <div className="cm-form-section">
                  <div className="cm-payment-detail-body">
                    <div>
                      Please be careful - Passenger details must match your
                      passport or photo ID
                    </div>
                    <div className="head">
                      <p id="pxdtails">
                        <span>
                          {" "}
                          Adult 1 -{" "}
                          <span id="p0_confirm_name">Missing name</span>
                          <a href="javacript:void(0);">(make changes)</a>
                        </span>
                        <br />
                      </p>
                    </div>
                    <div id="" className="alert-msgs">
                      <i className="fa fa-info-circle"></i>{" "}
                      <span>
                        {" "}
                        Please confirm the dates and times of your flights are
                        correct
                      </span>
                    </div>
                    <div className="imp-msg">
                      <div className="tnc-txt">
                        <p className="hidden-xs hidden-sm">
                          By clicking,{" "}
                          <span className="bkdyntxt">Book Now</span> I agree
                          that I have read and accepted Lookbyfare{" "}
                          <a href="/us/terms-conditions" target="_blank">
                            Terms &amp; Conditions
                          </a>{" "}
                          and{" "}
                          <a href="/us/privacy-policy" target="_blank">
                            Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="step-continue">
                      {bookNowOpener && <Booknow />}
                      <button
                        //  onSubmit={() => setBookNowOpener(true)}
                        className="cm-btn final-btn cm-prim-bg cm-white-col"
                        type="Submit"
                      >
                        <i className="fa fa-lock" aria-hidden="true"></i> Book Now
                      </button>
                      <p>
                        <br />
                        <small>
                          Your payment details are secured via 256 Bit
                          encryption by GoDaddy
                        </small>
                      </p>
                    </div>
                    <div className="imp-msg">
                      <div className="tnc-txt">
                        <p>
                          <b>NOTE: </b>
                          <span className="text-blue">
                            Please check if the dates and timings of flight
                            departure are correct.
                          </span>{" "}
                          Also, make sure that the name of the traveler is
                          accurate as tickets are non-refundable and any change
                          in the name of the traveler is not permitted. Date and
                          routing changes will be subject to airline penalties
                          and our service fees. Fares are not guaranteed until
                          ticketed. All our service fees and taxes are included
                          in the total ticket cost. Itineraries cannot be
                          changed within 7 days before departure, and no credit
                          will be issued. You can cancel your reservation within
                          24 hrs of purchase for a full refund by calling our
                          24/7 customer support provided the purchase was made
                          before 7 days of departure. However, a nominal
                          cancelation fee will be applicable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cm-right-col cm-lr-pad">
              <div className="cart-time">
                <p className="title">Book now before tickets run out!</p>
                <div className="cm-flex-type-1 cart-timer">
                  <span>
                    <p className="timecount">{timer}</p>
                  </span>
                  <span>
                    <img src="/images/icon/clock.png" />
                  </span>
                </div>
              </div>

              <div className="cm-price-fare-detail">
                <div className="title">
                  <p> Price Details </p>
                </div>
                <div className="cm-price-fare-body">
                  <div className="cm-flex-type-1 price">
                    <p>ADULT X {data.flData.travelerPricings.length}</p>
                    <p>
                      <strong>
                        {countrySign[currency]}
                        {data.flData.travelerPricings.length *
                          data.flData.travelerPricings[0].price.total}
                      </strong>
                    </p>
                  </div>

                  <div>{parse(travelProtectionLoad())}</div>
                  <div className="cm-flex-type-1 price">
                    <p>Taxes & Fees</p>
                    <p>
                      <strong>
                        {countrySign[currency]} {data.taxes}{" "}
                      </strong>
                    </p>
                  </div>
                  <div className="total-amt cm-flex-type-1">
                    <p>Total Price: {currency}</p>
                    <p>
                      <strong>{calcFinalPrice()}</strong>
                    </p>
                  </div>
                  <p className="descr-price-fare">
                    Please note: All fares are quoted in {currency}. Some
                    airlines may charge baggage fees. Your credit/debit card may
                    be billed in multiple charges totaling the final total
                    price.
                  </p>
                </div>
              </div>

              <div className="cm-booking-cta cm-txt-center">
                <h4>Need Help?</h4>
                <div className="cm-content">
                  <p>
                    Our travel experts are just a call away! Get in touch now to
                    customize your vacation hassle-free and enjoy your time
                    away!
                  </p>
                  <h5>Call Us</h5>
                  <a className="cm-prim-col" href={`tel: ${phoneNum.value}`}>
                    {phoneNum.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
export default FlightBookForm;

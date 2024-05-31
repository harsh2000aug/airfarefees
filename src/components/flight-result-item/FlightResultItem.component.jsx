import React from "react";
import SlideToggle from "react-slide-toggle";
import moment from "moment";
import { charges } from '../../utils/charges';
import { getDuration } from "../../utils/utilFn";
import { countrySign } from "../../utils/cuntryname";

import "./FlightResultItem.styles.css";
import { useSelector } from "react-redux";

const FlightResultItem = ({
  flData,
  airlineName,
  airportNames,
  allAirlineNames,
  navigate,
  flightPrice,
  airlineData
}) => {

  const currency = useSelector((state) => state.currency);

  const [flightTotal, setFlightTotal] = React.useState(flData.price.total);
  // React.useEffect(() => {
  //   const price = flightPrice[flData.validatingAirlineCodes[0]];
  //   if (!!price) {
  //     const finalPrice = ((flData.price.grandTotal * price) / 100);
  //     console.log("finalPrice", finalPrice);
  //     setFlightTotal(finalPrice.toFixed(2));
  //   }


  // }
  // )
  // React.useEffect(()=>{
  //   let price, bookFromDate, bookToDate, amountType, calculateOn;

  //   if(flightPrice[flData.validatingAirlineCodes[0]]!==undefined){
  //       // console.log("Airline Data From Api", airlineData);
  //       price = (flightPrice[flData.validatingAirlineCodes[0]].amount !==null )  ? flightPrice[flData.validatingAirlineCodes[0]].amount:null;
  //       bookFromDate = !!flightPrice[flData.validatingAirlineCodes[0]].bookingFromDate ? flightPrice[flData.validatingAirlineCodes[0]].bookingFromDate : null;
  //       bookToDate = !!flightPrice[flData.validatingAirlineCodes[0]].bookingToDate ? flightPrice[flData.validatingAirlineCodes[0]].bookingToDate : null;
  //       amountType = !!flightPrice[flData.validatingAirlineCodes[0]].amountType ? flightPrice[flData.validatingAirlineCodes[0]].amountType : null;
  //       calculateOn = !!flightPrice[flData.validatingAirlineCodes[0]].calculateOn ? flightPrice[flData.validatingAirlineCodes[0]].calculateOn : null;
  //   } 

  //     if(!!price){
  //       var finalPrice;
  //       // console.log("BASE FARE PRICE", flData.price);
  //       if(amountType==='Percentage'){
  //         if(calculateOn==='Total BaseFare'){
  //           finalPrice = ((flData.price.base * price) / 100);
  //           console.log("finalPrice",finalPrice)
  //         }else{
  //           finalPrice = ((flData.price.grandTotal*price) / 100);
  //           console.log("finalPrice 2",finalPrice)

  //         }
  //       }else if(amountType==='Amount'){
  //         finalPrice = flData.price.grandTotal - price;
  //         console.log("finalPrice 3",finalPrice)

  //       }else if(amountType==='Fixed Fare'){
  //         finalPrice = price;
  //         console.log("finalPrice 4",finalPrice)

  //       }
  //       console.log("finalPrice", finalPrice.toFixed(2), price);
  //       setFlightTotal(finalPrice.toFixed(2));
  //     }

  // }, [flightPrice]);

  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabSwitch = (tabNum) => setActiveTab(tabNum);

  const getAirportNames = (iataCode) => {
    if (!!airportNames)
      return !!airportNames[iataCode]
        ? `${airportNames[iataCode].code} | ${airportNames[iataCode].name}, ${airportNames[iataCode].country}`
        : iataCode;
  };

  const getAirlineName = (code) => allAirlineNames[code];

  const loadTopItinerarySum = () => {
    return flData.itineraries.map((el, index) => {
      const firstSegment = el.segments[0];
      const lastSegment = el.segments[el.segments.length - 1];
      // console.log("new",el) 
      return (
        <div
          key={flData.id + "-" + index}
          className="cm-fl-res-item-it-sum-item cm-flex cm-flex-align-mid "
        >
          <div className="cm-col cm-arival-detail cm-txt-center">
            <p>{" "}
              <span className="cm-airport-name">
                {firstSegment.departure.iataCode}
              </span>
              <span>
                {" "}
                {moment(firstSegment.departure.at).format("h:mm a")}
              </span>
            </p>
            <p>{" "}
              <span>
                {moment(firstSegment.departure.at).format("ddd, DD MMM")}
              </span>
            </p>
          </div>
          <div className="cm-col cm-col2 cm-pos-relative">
            <p className="cm-fl-path cm-pos-relative">
              <i className="fa-solid fa-location-dot cm-sec-col"></i>
              <i className="fa-solid fa-plane cm-prim-col"></i>
              <i className="fa-solid fa-location-dot cm-sec-col"></i>
            </p>
            <span>
              {el.segments.length > 1
                ? `${el.segments.length - 1} Stop(s) `
                : ""}
              {getDuration(el.duration)}
            </span>
          </div>
          <div className="cm-col cm-dipartue-detail cm-txt-center">
            <p>{" "}
              <span className="cm-airport-name">
                {lastSegment.arrival.iataCode}
              </span>
              <span>
                {" "}
                {moment(lastSegment.arrival.at).format("h:mm a")}
              </span>
            </p>
            <p>{" "}
              <span>
                {moment(lastSegment.arrival.at).format("ddd, DD MMM")}
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  const loadFullItinerary = () => {
    return flData.itineraries.map((el, index) => {
      return (
        <div key={index} className="cm-iti-item">
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

  const loadSegments = (segmentArr) => {
    return segmentArr.map((el) => (
      <div key={el.id} className="cm-content cm-flex-type-1">
        <div className="cm-col cm-col1">
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

  const loadFares = () => {
    return (
      <table
        className="table table-bordered"
        border="1"
        cellPadding="0"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Passenger</th>
            <th>
              Base (<span currency="code">{currency}</span>)
            </th>
            <th>
              TAX (<span currency="code">{currency}</span>)
            </th>
          </tr>
        </thead>
        <tbody>
          {flData.travelerPricings.map((el) => (
            <tr key={el.travelerId}>
              <td>{el.travelerId}</td>
              <td>{el.travelerType}</td>
              <td currency="value" fare="921.00">
                {Number(el.price.base).toFixed(2)}
              </td>
              <td currency="value" fare="1552.50">
                {/* {el.price.total} */}
                {/* {basecalcTaxes(el.price.total)} */}
                {(Number(el.price.base) * 0.15).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <th>
              Grand Total (<span currency="code">{currency}</span>)
            </th>
            <td currency="value" fare={flData.price.grandTotal}>
              {/* {flData.price.grandTotal} */}
              {/* {(
              parseFloat(flightTotal) + parseFloat(calcTaxes() + 340)
            ).toFixed(2)} */}
              {(Number(flData.price.base) * 1.15).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const handleBookNow = () => {
    navigate("/booking", {
      state: {
        flData,
        airlineName,
        airportNames,
        allAirlineNames,
        taxes: calcTaxes(),
        flightTotal,
        grandTotal: (parseFloat(flightTotal) + parseFloat(calcTaxes())).toFixed(2),
      },
    });
  };
  console.log("Fldata", flightTotal)

  const calcTaxes = () => {
    let airlineTax = charges.airlineTaxes[flData.validatingAirlineCodes[0]];
    if (!airlineTax) {
      airlineTax = charges.airlineTaxes.OTHER;
    }
    return (parseFloat(flightTotal) * (airlineTax / 100)).toFixed(2);
  };
  const basecalcTaxes = (total) => {
    let airlineTax = charges.airlineTaxes[flData.validatingAirlineCodes[0]];
    if (!airlineTax) {
      airlineTax = charges.airlineTaxes.OTHER;
    }

    return (parseFloat(total) * (airlineTax / 100)).toFixed(2);
  };
  console.log("=============", parseFloat(flightTotal))
  console.log("mustafa", parseFloat(flightTotal) + parseFloat(calcTaxes()));


  // let test = parseFloat(flightTotal) + 340.97
  return (
    <div className="cm-fl-res-item">
      <div className="cm-fl-res-item-header cm-flex-type-1">
        <h4>
          {/* <img src={`https://cmsrepository.com/static/flights/flight/airlinelogo-png/1.png`} style={{width:'30px',marginRight:'20px'}} /> */}
          {airlineName}</h4>
        <h3>
          {countrySign[currency]}{' '}
          {(Number(flData?.price?.base) * 1.15).toFixed(2)}
          {/* {(
              parseFloat(flightTotal) +parseFloat(calcTaxes())
            ).toFixed(2)} */}
        </h3>
      </div>
      <div className="flight-summery-detail cm-flex-type-1">
        <div className="cm-fl-res-item-it-sum-wrap">
          {loadTopItinerarySum()}

        </div>
        <div className="tex-button cm-flex-type-1">
          <div className="total-price">
            <p><b>Total Fare + Taxes </b></p>
            {/* <p>{countrySign[currency]} {(flightTotal)}  + {countrySign[currency]} {calcTaxes()}</p> */}
            <p>{countrySign[currency]} {(Number(flData?.price?.base)).toFixed(2)}  + {(Number(flData?.price?.base) * 0.15).toFixed(2)}</p>

          </div>
          <div className="button-col">
            <div className="cm-col cm-col3 cm-txt-right">
              <p>
                only <span>{flData.numberOfBookableSeats} seats</span> left at this
                price.
              </p>
              <span
                onClick={handleBookNow}
                className="book-btn"
              >
                <i className="fa-solid fa-plane-engines"></i> Book Now
              </span>
              <div className="baggage-policy-select">
                <ul>
                  <li>
                    <div className="relative">
                      <span className="top_icon">
                        <img src="/images/icon/check.svg" alt="" />
                      </span>
                      <img src="/images/icon/p-bag.svg?v=1.2" className="icons icon-luggage" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="relative">
                      <span className="top_icon">
                        <img src="/images/icon/check.svg" alt="" />
                      </span>
                      <img src="/images/icon/c-bag.svg" className="icons icon-luggage" alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="relative">
                      <span className="top_icon">
                        <img src="/images/icon/baggage-chargable.svg" alt="" />
                      </span>
                      <img src="/images/icon/b-bag.svg" className="icons icon-luggage" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideToggle
        collapsed={true}
        duration={800}
        render={({ toggle, setCollapsibleElement, progress }) => (
          <div
            className={`cm-fl-res-accord ${progress !== 0 ? "cm-acc-active" : ""
              }`}
          >
            <p
              onClick={toggle}
              className="cm-acc-toggler cm-pointer cm-txt-center"
            >
              {progress === 0 ? "Show" : "Hide"} Details{" "}
              <i
                className={`fa-solid ${progress === 0 ? "fa-angle-down" : "fa-angle-up"
                  }`}
              ></i>
            </p>
            <div className="cm-fl-res-accord" ref={setCollapsibleElement}>
              <ul className="cm-fl-accord-tab cm-flex-type-2 cm-txt-center cm-menu-ul">
                <li
                  onClick={() => handleTabSwitch(1)}
                  className={`${activeTab === 1 ? "active-tab" : ""
                    } cm-pointer`}
                >
                  Itinerary
                </li>
                <li
                  onClick={() => handleTabSwitch(2)}
                  className={`${activeTab === 2 ? "active-tab" : ""
                    } cm-pointer`}
                >
                  Fares
                </li>
              </ul>
              {activeTab === 1 ? (
                <div className="cm-fl-res-iti-tab">{loadFullItinerary()}</div>
              ) : (
                <div className="cm-fl-res-fares-tab">{loadFares()}</div>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default FlightResultItem;

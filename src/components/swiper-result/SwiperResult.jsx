import React from "react";
import "./SwiperResult.style.css";
import { charges } from "../../utils/charges";
import { useSelector } from "react-redux";
import { countrySign } from "../../utils/cuntryname";
import { useAtom } from "jotai";
import { globalAirlineSearch } from "../../jotai";

const SwiperResult = ({ allData, dictionaries }) => {
  const currency = useSelector((state) => state.currency);
  const [,setAirLineFilter] = useAtom(globalAirlineSearch);

  const scroll = (scrollOffset) => {
    const container = document.querySelector(".card-container");
    container.scrollLeft += scrollOffset;
  };

  const carriers = dictionaries.carriers;
  const uniqueAirlines = [];

  allData.data.forEach((item) => {
    let cKey = item.validatingAirlineCodes[0];
    let grandTotal = item.price.total;

    let calcTaxes = () => {
      let airlineTax = charges.airlineTaxes[item.validatingAirlineCodes[0]];
      if (!airlineTax) {
        airlineTax = charges.airlineTaxes.OTHER;
      }
      return (parseFloat(grandTotal) * (airlineTax / 100)).toFixed(2);
    };

    let d = {
      name: carriers[cKey],
      price: "",
      sp: "",
      carrierCode: cKey,
    };

    if (item.itineraries[0].segments.length === 1) {
      d.price = (parseFloat(grandTotal) + parseFloat(calcTaxes())).toFixed(2);
      d.sp = "";
    } else {
      d.price = "";
      d.sp = (parseFloat(grandTotal) + parseFloat(calcTaxes())).toFixed(2);
    }

    if (!uniqueAirlines.some((airline) => airline.name === d.name)) {
      uniqueAirlines.push(d);
    }
  });

  return (
    <React.Fragment>
      <div
        className="cm-fl-res-item swiper-card"
        style={{ padding: "3rem 1rem 1rem" }}
      >
        <div className="" style={{ display: "flex", position: "relative" }}>
          <div className="button-container">
            <div className="swiper-btn-group">
              <button
                className="round-button next-swiper-btn"
                onClick={() => scroll(-550)}
              >
                <i className="fa-solid fa-chevron-left "></i>
              </button>
              <button
                className="round-button prev-swiper-btn"
                onClick={() => scroll(550)}
              >
                <i className="fa-solid fa-chevron-right "></i>
              </button>
            </div>
          </div>
          <div className="card-swiper fixCard ">
            <div className="row-fare " onClick={() => setAirLineFilter("")}>
              <span style={{ fontWeight: 600 }}>Show All Fare </span>
            </div>
            <div className="divider"></div>
            <div className="row">
              <span>Non Stop</span>
            </div>
            <div className="divider"></div>
            <div className="row">
              <span>1 Stop</span>
            </div>
          </div>
          <div className="card-container">
            {uniqueAirlines.map((carrier, idx) => (
              <div className="card-swiper" key={idx}>
                <div className="row-fare" onClick={() => setAirLineFilter(carrier.name)}>
                  {carrier.name == "" || carrier.name == null ? (
                    <div>
                      <img
                        style={{
                          width: "50px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                        alt="airline"
                        src={require("../../assets/images/flight/delta.png")}
                      />
                      <p style={{ fontSize: "10px" }}>AIRLINE</p>
                    </div>
                  ) : (
                    <img
                      style={{
                        width: "50px",
                        height: "30px",
                        objectFit: "contain",
                      }}
                      alt="airline"
                      src={`https://www.pnrconverter.com/images/airlines/png/150/${carrier.carrierCode.toLowerCase()}.png`}
                    />
                  )}
                  <p style={{ fontSize: "10px" }}>{carrier.name}</p>
                </div>
                <div className="divider"></div>
                <div className="row">
                  <span>
                    {carrier.price != "" ? countrySign[currency] : ""}
                    {carrier.price == "" ? "---" : parseFloat(carrier.price)}
                  </span>
                </div>
                <div className="divider"></div>
                <div className="row">
                  <span>
                    {carrier.sp != "" ? countrySign[currency] : ""}
                    {carrier.sp == "" ? "---" : parseFloat(carrier.sp)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SwiperResult;

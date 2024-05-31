import React from "react";

import "./Packages.styles.css";
import bannerBg from "../../assets/images/packages/packages_banner.jpg";
import FlightSearchForm from "../../components/flight-search-form/FlightSearchForm.component";
import BannerSearchForm from "../../components/flight-search-form/BannerSearchForm.component";

import lasVegas from "../../assets/images/packages/las-vegas.jpg";
import losAngeles from "../../assets/images/packages/los-angeles.jpg";
import miami from "../../assets/images/packages/miami.jpg";
import orlando from "../../assets/images/packages/orlando.jpg";
import sanFransisco from "../../assets/images/packages/san-fransisco.jpg";

const PackagesPage = () => {
  const [data, setData] = React.useState(null);

  const handlePackage = (obj) => {
    console.log("test", obj);
    setData(obj);
    window.scrollTo(0, 0);
  };

  return (
    <div className="cm-package-page-container">
      <div className="home-banner">
        <div className="cm-page-center">
            <div className="search-banner">
              <h1>Let us bring your dream vacation to new heights.</h1>
              <FlightSearchForm />
            </div>
        </div>
      </div>
      <div className="cm-flights-to-container cm-section">
        <div className="cm-page-center cm-lr-pad">
          <h2 className="cm-section-h cm-txt-center">
            Explore Top Destinations
          </h2>
          <div className="cm-flights-to-wrapper cm-flex-type-2 cm-flex-wrap cm-section-spacing">
            <div
              style={{ backgroundImage: `url("${losAngeles}")` }}
              className="cm-flights-to-item cm-bg-prop cm-pos-relative cm-txt-center cm-flex-type-2 cm-pointer"
              onClick={() =>
                handlePackage({
                  address: {
                    cityCode: "LAX",
                    cityName: "LOS ANGELES",
                    countryCode: "US",
                    stateCode: "CA",
                    countryName: "UNITED STATES OF AMERICA",
                  },
                  iataCode: "LAX",
                  id: "ALAX",
                  name: "LOS ANGELES INTL",
                  subType: "AIRPORT",
                  type: "location",
                })
              }
            >
              <i className="fa-solid fa-plane-departure cm-flex-type-2 box-shadow-2"></i>
              <div className="cm-content">
                <p>Flights to</p>
                <h4>Los Angeles</h4>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url("${lasVegas}")` }}
              className="cm-flights-to-item cm-bg-prop cm-pos-relative cm-txt-center cm-flex-type-2 cm-pointer"
              onClick={() =>
                handlePackage({
                  address: {
                    cityCode: "LAS",
                    cityName: "LAS VEGAS",
                    countryCode: "US",
                    countryName: "UNITED STATES OF AMERICA",
                    stateCode: "NV",
                  },
                  iataCode: "LAS",
                  id: "CLAS",
                  name: "LAS VEGAS",
                  subType: "CITY",
                  type: "location",
                })
              }
            >
              <i className="fa-solid fa-plane-departure cm-flex-type-2 box-shadow-2"></i>
              <div className="cm-content">
                <p>Flights to</p>
                <h4>Las Vegas</h4>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url("${sanFransisco}")` }}
              className="cm-flights-to-item cm-bg-prop cm-pos-relative cm-txt-center cm-flex-type-2 cm-pointer"
              onClick={() =>
                handlePackage({
                  address: {
                    cityCode: "SFO",
                    cityName: "SAN FRANCISCO",
                    countryCode: "US",
                    countryName: "UNITED STATES OF AMERICA",
                    stateCode: "CA",
                  },
                  iataCode: "SFO",
                  id: "CSFO",
                  name: "SAN FRANCISCO",
                  subType: "CITY",
                  type: "location",
                })
              }
            >
              <i className="fa-solid fa-plane-departure cm-flex-type-2 box-shadow-2"></i>
              <div className="cm-content">
                <p>Flights to</p>
                <h4>San Francisco</h4>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url("${miami}")` }}
              className="cm-flights-to-item cm-bg-prop cm-pos-relative cm-txt-center cm-flex-type-2 cm-pointer"
              onClick={() =>
                handlePackage({
                  address: {
                    cityCode: "MIA",
                    cityName: "MIAMI",
                    countryCode: "US",
                    countryName: "UNITED STATES OF AMERICA",
                    stateCode: "FL",
                  },
                  iataCode: "MIA",
                  id: "AMIA",
                  name: "MIAMI INTL",
                  subType: "AIRPORT",
                  type: "location",
                })
              }
            >
              <i className="fa-solid fa-plane-departure cm-flex-type-2 box-shadow-2"></i>
              <div className="cm-content">
                <p>Flights to</p>
                <h4>Miami</h4>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url("${orlando}")` }}
              className="cm-flights-to-item cm-bg-prop cm-pos-relative cm-txt-center cm-flex-type-2 cm-pointer"
              onClick={() =>
                handlePackage({
                  address: {
                    cityCode: "ORL",
                    cityName: "ORLANDO",
                    countryCode: "US",
                    countryName: "UNITED STATES OF AMERICA",
                    stateCode: "FL",
                  },
                  iataCode: "ORL",
                  id: "CORL",
                  name: "ORLANDO",
                  subType: "CITY",
                  type: "location",
                })
              }
            >
              <i className="fa-solid fa-plane-departure cm-flex-type-2 box-shadow-2"></i>
              <div className="cm-content">
                <p>Flights to</p>
                <h4>Orlando</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;

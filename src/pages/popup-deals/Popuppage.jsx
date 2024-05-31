import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { phoneNum } from "../../utils/globalVars";
import gcallIcon from "../../assets/images/flight/pretty-smiling.png";
import "./dealPipup.style.css";
import axios from "axios";
import { theme_airline_url } from "../../utils/apiInfo";

const PopupPage = () => {
  const [homepageStatus, setCloseHome] = React.useState(false);
  const [path, setpath] = useState("");
  const location = useLocation();
  var [count, setCount] = useState(0);
  const [cnt, setCnt] = useState();
  const urlFull = window.location.href;

  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 * 60 * 60) % 24);
   
    return {
      total, hours, minutes, seconds
    };
  }
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 0 ? hours : '0' + hours) + ':' +
        (minutes > 0 ? minutes : '0' + minutes) + ':'
        + (seconds > 0 ? seconds : '0' + seconds)
      )
    }
  }
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 240);
    return deadline;
  }
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);




  useEffect(() => {
    axios
      .get(`${theme_airline_url}`, {
        params: {
          url: urlFull,
        },
      })
      .then((response) => {
         setCnt(response.data.no_of_counts)
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [urlFull]);
  /*===================== End time Calculate ================ */
  const handleToClick = () => {
    count = count + 1;
    if (count >= cnt) {
      setCloseHome(true);
      document.body.classList.add("overflow");
    } else {
      setCount(count);
      window.location.href = "tel:" + phoneNum.value;
    }
  };
  useEffect(() => {
    setpath(location.pathname);
  }, [location.pathname]);

  let themeClass = "";
  if (path === "/delta-airlines") {
    themeClass = "delta-theme";
  } else if (path === "/aeromexico-airlines") {
    themeClass = "aeromexico-theme";
  } else if (path === "/united-airlines") {
    themeClass = "united-theme";
  } else if (path === "/alaska-airlines") {
    themeClass = "alaska-theme";
  } else if (path === "/jetblue-airlines") {
    themeClass = "jetblue-theme";
  } else if (path === "/southwest-airlines") {
    themeClass = "southwest-theme";
  } else if (path === "/westjet-airlines") {
    themeClass = "westjet-theme";
  } else if (path === "/copa-airlines") {
    themeClass = "copa-theme";
  } else if (path === "/virgin-atlantic") {
    themeClass = "virgin-theme";
  } else if (path === "/iberia-airlines") {
    themeClass = "iberia-theme";
  } else if (path === "/royal-jordanian-airlines") {
    themeClass = "royal-jordanian-theme";
  } else if (path === "/british-airways") {
    themeClass = "british-theme";
  } else if (path === "/ryan-air") {
    themeClass = "ryan-theme";
  } else if (path === "/air-france") {
    themeClass = "air-france-theme";
  } else if (path === "/klm-airlines") {
    themeClass = "klm-theme";
  } else if (path === "/singapore-airlines") {
    themeClass = "singapore-theme";
  } else if (path === "/lot-polish-airlines") {
    themeClass = "lot-polish-theme";
  }

  return (
    <>
      <div
        className={`Modal ${
          homepageStatus ? "pop-modal-mob" : ""
        } reservation-popup `}
        onClick={handleToClick}
      >
        <a href={`tel:${phoneNum.value}`}>
          <div className={`reservation-inner-pop  ${themeClass}`}>
            <div className="wrapper">
              <div className="popup-main">
                <div className="call-number">
                  <strong>
                    <span>
                      Get our <br />
                      <h2>Best </h2>
                      <div className="bxn-offer">
                        <span>deal</span>
                        <img
                          src={require("../../assets/images/flight/bxs_offer.png")}
                          alt=""
                        />
                      </div>
                    </span>
                  </strong>
                </div>
                <div className="call-btn-gg">
                  <div className="call-btn-popup">
                    {phoneNum.label} <br />
                    <span>Call Now</span>
                    <div className="call-now-arrow">
                      <img
                        src={require("../../assets/images/flight/ph_cursor-click-fill.png")}
                        alt=""
                      />    
                    </div>
                  </div>
                </div>
              </div>
              <div className="call-img">
                <img src={gcallIcon} alt="" />
              </div>
            </div>
            <div className="footer-text">
              <h3>Reservations, Changes, & Cancellation </h3>
              {/* <div className="bottom-number">
               <strong><img src={callIcon} alt="" />+1 855-738-3445</strong>
              </div> */}

              <div>
                <p>No Hold Time : Call Answered in 5 Sec</p>
                <a href={`tel:${phoneNum.value}`} className={`ppupbtn-css ${themeClass}`}><span class="ringing_phone"></span> {phoneNum.label}</a>
                <div className="time-popupdeal">
                  <h3>Agent Available</h3>
                  <h3> {  timer} </h3>
                </div>
                
              </div>

              <div className={`footer-call-btn ${themeClass}`}>
                <span class="ringing_phone"></span>
                <div className="footer-inner">
                  <p>Get Our Best Deals</p>
                  <strong>{phoneNum.label}</strong>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default PopupPage;

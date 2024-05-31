import React from "react";
import "./CtaPopup.styles.css";

import calling from "../../assets/images/flight/calling.png";

import logo from "../../assets/images/flight/logo-new.png";
import { phoneNum } from "../../utils/globalVars";

const CtaPopup = ({ dataToSend }) => {
  const [ctaPopStatus, setCtaPopStatus] = React.useState(true);

  return (
    <div
      className={`cm-cta-popup-container cm-flex-type-2 ${ctaPopStatus ? "cm-cta-popup-active" : ""
        }`}
    >
      <div className="cm-cta-pop-wrapper cm-white-bg cm-pos-relative">
        <div
          className="cm-close cm-flex-type-2 cm-pointer"
          onClick={() => setCtaPopStatus(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="cm-flex-type-2 call-head">
          <figure><img src={calling} alt="executive" /></figure>
          <div className="text">
            <h4 className="">Looking for the best deals on </h4>
            <p>Call now and save upto 20%</p>
            <h3>
              <a className="cm-prim-col" href={`tel:${phoneNum.value}`}>
                {phoneNum.label}
              </a>
            </h3>
          </div>
        </div>

        <div className="callcontent">
          <h4 className="cm-txt-center">Why to book with Travel Expert</h4>
          <ul>
            <li>
              <img src="images/helpline.svg" alt="" />
              <p> Expert guidance by our <strong>Travel experts</strong></p>
            </li>
            <li>
              <img src="images/confirmation.svg" alt="" />
              <p>Immediate <strong>booking confirmation </strong></p>
            </li>
            <li>
              <img src="images/24-hours.svg" alt="" />
              <p>24 hour <strong>cancellation</strong></p>
            </li>
            <li>
              <img src="images/payment-gateway.svg" alt="" />
              <p>Plans <strong>Flexible payment</strong></p>
            </li>
          </ul>
          <div className="cm-txt-center">
            <a
              className="cm-btn cm-prim-bg cm-white-col cm-wt-700 cm-btn-lg"
              href={`tel:${phoneNum.value}`}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaPopup;

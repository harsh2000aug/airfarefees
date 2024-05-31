import React from "react";
import { phoneNum } from "../../utils/globalVars";

import ctaImg from "../../assets/images/flight/pexels-yan-krukov-8867237.jpg";

import "./Cta.styles.css";

const CtaType1 = ({ fareToShow }) => {
  return (
    <div className="cm-cta-type-1">
      <div className="cm-page-center cm-flex-type-1">
        <div className="cm-left-col cm-lr-pad">
          <img src={ctaImg} alt="Call Us" className="box-shadow-2" />
        </div>
        <div className="cm-right-col cm-lr-pad">
          <h2 className="cm-section-h">
              Call Now to Book:{" "}
              <a
                href={`tel:${phoneNum.value}`}
                className="cm-prim-col cm-cta-phone"
              >
              <i className="fa-solid fa-phone"></i>
              {phoneNum.label}
            </a>
          </h2>
          <p>
            Hurry! Get the best deals starting at ${fareToShow}
            <sup>*</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaType1;

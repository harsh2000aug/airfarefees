import React, {useEffect, useState, useRef} from "react";
import moment from "moment";

import { phoneNum } from "../../utils/globalVars";
import FlightBookForm from "../../components/flight-book-form/FlightBookForm.component";
import { getDuration } from "../../utils/utilFn";
import "./BookTickets.style.css";
import { charges } from '../../utils/charges';
import { globalBooking } from "../../jotai";
import { useAtom } from "jotai";

const BookTicketsContainer = ({ data }) => {
  const [globalText] = useAtom(globalBooking);
  return (
    <div className="cm-book-container">
      <div className="inner-banner">
        <h2 className="cm-section-h cm-txt-center cm-white-col">{globalText}</h2>
      </div>
      {/* Start */}
      <FlightBookForm
            travData={data.flData.travelerPricings}
            grandTotal={data.flData.price.total}
            taxes={data.taxes}
            flightSummary={data.flData}
            data={data}
      />
      {/* End */}
    </div>
  );
};

export default BookTicketsContainer;

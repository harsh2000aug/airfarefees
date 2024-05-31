import React from "react";
import { Link } from "react-router-dom";

const Payment = ()=>{



    return(
        <>
            <div className="cm-page-center payement-page">
            <div className="thank-img"><img src="/images/icon/party.gif" alt="" /></div>
            <h1>Thank You for Booking </h1>
            <p>Thank you for your booking information you will connect soon.</p>
            <p className=""><Link path="/" className="cm-btn cm-prim-bg cm-white-col cm-wt-700 cm-btn-lg" to="/">Home Page</Link></p>
            </div>
        </>
    )
}

export default Payment;
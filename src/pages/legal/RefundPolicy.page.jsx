import React from "react";
import "./LegalContent.styles.css";
import { Helmet } from "react-helmet";

const RefundPolicyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cm-legal-content-container">
      <Helmet>
        <title>Airfarefees | Refund & Cancellation</title>
      </Helmet>
      <div className="inner-banner">
        <h2 className="cm-section-h cm-txt-center cm-white-col">Refund and Cancellation Policy</h2>
      </div>
      <div className="cm-section  cm-page-center cm-lr-pad">
        <ul>
          <li>Most of our airline tickets and service fees are non-refundable after 24 hours of booking.</li>
          <li>
            Trip protection insurance is refundable within 10 days of purchase if travel has not commenced, and the customer has called our customer service center at <a href="tel:+18774000302"> +1-877-400-0302</a> to cancel the Trip Insurance.
          </li>
          <li>
            All cancellations must be done over the phone only by calling <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> customer service at <a href="tel:+18774000302"> +1-877-400-0302</a>.
          </li>
          <li>
            We can accept airline tickets refund requests only if the following conditions have been met:
            <ul>

              <li>
                The customer has applied for a cancellation and refund with us;
              </li>
              <li>
                The fare rule(s), under which the airline ticket is booked, provide options for cancellation and refunds;
              </li>
              <li>
                Each passenger whose name is on the airline ticket is not a "No Show" (most "no show" bookings are not eligible for any waiver from airlines for refund processing); and
              </li>
              <li>
                We are able to secure waivers from airlines to process the requested cancellation and refund of the said ticket.
              </li>
            </ul>
          </li>
          <li>
            Please note that we are unable to provide a specific time line for how long it may take for the requested refund to be processed by the airlines.
            <ul>
              <li>
                All refund requests are processed in a sequential format.
              </li>
              <li>
                Once our customer service agent has received a cancellation request from a customer, we will then send a refund-request-received email notification to the customer requesting the refund.
              </li>
              <li>
                The notification does not automatically qualify the customer for a refund. It only provides with an acknowledgment of the request, and provides a tracking number.
              </li>
              <li>
                Upon receipt of the refund request, we will work with the suppliers such as airlines to generate a waiver based on airline and other supplier rules, and notify the customer of the supplier decision.
              </li>
              <li>
                Our Service Fees associated with the original travel reservation or booking are Not Refundable.
              </li>
            </ul>
          </li>
          <li>
            Please note that we are dependent on the airlines and suppliers (collectively as "suppliers") for receiving the requested refunds.
            <ul>
              <li>
                Once the refund has been approved by the supplier it may take additional time for the refunded amount to appear on customer's credit card statement.
              </li>
              <li>
                Generally, all suppliers will charge a penalty for refund.
              </li>
              <li>
                This entire process may take 60-90 days from receipt of a refund request to receiving credit on the card statement.
              </li>
              <li>
                Apart from the suppliers' refund penalties, <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> will charge a post-ticketing services fee, as applicable.
              </li>
              <li>
                All refund fees are charged on per-passenger, per-ticket basis. These fees will only be assessed if a refund has been authorized by the supplier or a waiver has been received, and when the supplier rules permit such refunds.
              </li>
              <li>
                If such refund is not processed by the supplier, we will refund you our post-ticketing service fees applicable to agent-assisted refund request, but not our booking fees for the original travel reservation or booking.
              </li>
            </ul>
          </li>
          <li>
            For your security, bookings may only be canceled over the phone by calling our customer service center at <a href="tel:+18774000302"> +1-877-400-0302</a>, and not by email or web chat.
            <ul>
              <li>
                When a customer requests <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> to cancel a ticket booking, our agents will send the customer an email with a Unique Cancellation Password to the e-mail that was supplied when the booking was created.
              </li>
              <li>
                The customer requesting the refund would need to provide the Unique Cancellation Password to our agents when asked, in order to complete the cancellation request.
              </li>
              <li>
                If the provided email is not accessible to the customer requesting refund and the customer is not able to provide the Unique Cancellation Password to our customer service agents, we may not be able to process the request for cancellation.
              </li>
              <li>
                The Unique Cancellation Password expires within 3 hours of issuance. If the Unique Cancellation Password expires before the refund request is processed, the customer needs to call us back to obtain a new Unique Cancellation Password.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RefundPolicyPage;

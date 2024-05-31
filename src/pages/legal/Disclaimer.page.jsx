import React from "react";
import "./LegalContent.styles.css";
import { Helmet } from "react-helmet";

const DisclaimerPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cm-legal-content-container">
      <Helmet>
        <title>Airfarefees | Disclaimer</title>
      </Helmet>
      <div className="inner-banner">
        <h2 className="cm-section-h cm-txt-center cm-white-col">Disclaimer</h2>
      </div>
      <div className="cm-section cm-page-center cm-lr-pad pb-10">

        <p>The objective of this disclaimer is to establish the general limitation of liability and warranties that regulate all users' access and use necessarily entail the submission to and acceptance of the mentioned general limitation of liability and disclaimer of warranties included in this Legal Disclaimer.</p>
        <p>
          <a href="https://Airfarefees.com/"><strong>Airfarefees.com</strong></a> uses reasonable efforts to ensure that information contained in the website is accurate as of the date of publication but makes no warranty or representation with respect to the accuracy of such information.
        </p>
        <p>
          Any dependency you place on such information is therefore strictly at the user's own risk, not the website. All rights to the intellectual property of the material contained in the website belong to and remain solely with <a href="https://Airfarefees.com/"><strong>Airfarefees.com</strong></a>. Users are solely responsible for the use and protection of their UserID/ Password used on our website.
        </p>
        <p><a href="https://Airfarefees.com/"><strong>Airfarefees.com</strong></a> is not responsible in any way for the content, claims, offers, statements and visual elements of any website that is linked to or from the website, regardless whether the link was authorized by <a href="https://Airfarefees.com/"><strong>Airfarefees.com</strong></a>.</p>
      </div>
    </div>
  );
};

export default DisclaimerPage;

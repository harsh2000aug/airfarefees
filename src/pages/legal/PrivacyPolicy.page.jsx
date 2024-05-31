import React from "react";
import { Link } from "react-router-dom";
import "./LegalContent.styles.css";
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" cm-legal-content-container">
      <Helmet>
        <title>Airfarefees | Privacy Policy</title>
      </Helmet>
      <div className="inner-banner">
        <h2 className="cm-section-h cm-txt-center cm-white-col">Privacy Policy</h2>
      </div>

      <div className="cm-page-center cm-lr-pad cm-section pb-10">
        <div>
          <h2>Privacy Policy of <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a>!</h2>

          <p>At <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a>, and how do we use such information.</p>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href={`${window.location.origin}`}><b>contact@airfarefees.com</b></a>.</p>
          <p>This Privacy Policy applies only to our online activities, and is valid for visitors to our <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> website with regards to the information that they shared and/or we collected at <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a>. This policy is not applicable to any information collected offline or via channels other than this website.</p>
        </div>
        <div>
          <h3><strong>Consent</strong></h3>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        </div>
        <div>
          <h3><strong>Information We Collect</strong></h3>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point when we ask you to provide your personal information.</p>

          <p>If you contact us directly by email, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>

          <p>When you register for an Account, we may ask for your contact information, including your name, company name, address, email address, and telephone number.</p>
        </div>
        <div>
          <h3><strong>How We Use Your Information</strong></h3>
          <p>We use the information we collect in various ways, including the following:</p>
          <ul>
            <li>To provide, operate, and maintain our website;</li>
            <li>To improve, personalize, and expand our website;</li>
            <li>To understand and analyze how you use our website;</li>
            <li>To develop new products, services, features, and functionality;</li>
            <li>
              To communicate with you, either directly or through one of our partners, including for customer service;
            </li>
            <li>To provide you with updates and other information related to this website, and for its marketing and promotional purposes;</li>
            <li>To send you emails, and;</li>
            <li>To find and prevent fraud.</li>
          </ul>
        </div>
        <div>
          <h3><strong>Log Files</strong></h3>
          <p>
            <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> follows a standard procedure of using log files. These files log visitors when they visit websites.
          </p>
          <p>
            The information collected by log files include Internet Protocol (IP) addresses, Browser Type, Internet Service Provider (ISP), Date and Time stamp, Referring/Exit pages, and possibly the number of clicks.
          </p>
          <p>
            These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing the trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>
        </div>
        <div>
          <h3><strong>Advertising Partners Privacy Policies</strong></h3>
          <p>You may consult this list to find the Privacy Policy for each of the advertising partners of <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a>.</p>
          <p>Third-party AD Servers or AD Networks uses technologies like Cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a>, which are sent directly to users' browser. They automatically receive your IP address when this occurs.</p>
          <p>These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
          <p>Note that <a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> has no access to or control over these Cookies that are used by third-party advertisers.</p>
        </div>
        <div>
          <h3><strong>Third Party Privacy Policies</strong></h3>

          <p><a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party AD Servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
          <p>
            You can choose to disable Cookies through your individual browser options.
          </p>
          <p>
            Detailed information about Cookie Management of specific web browsers can be found in Settings section of respective browsers.
          </p>
        </div>
        <div>
          <h3><strong>CCPA Privacy Rights (Do Not Sell My Personal Information)</strong></h3>
          <p>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul>
            <li>
              Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
            </li>
            <li>
              Request that a business delete any personal data about the consumer that a business has collected.
            </li>
            <li>
              Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
            </li>
            <li>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:contact@airfarefees.com/"><strong>contact@airfarefees.com</strong></a>.
            </li>
          </ul>
        </div>
        <div>
          <h3><strong>GDPR Data Protection Rights</strong></h3>
          <p>We would like to make sure that you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul>
            <li><strong>The right to access</strong> - You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>

            <li><strong>The right to rectification</strong> - You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
            <li><strong>The right to erasure</strong> - You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> - You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing</strong> - You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>
          <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:contact@airfarefees.com/"><strong>contact@airfarefees.com</strong></a>.</p>
        </div>
        <div>
          <h3><strong>Children's Information</strong></h3>
          <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

          <p><a href={`${window.location.origin}`}><b>Airfarefees.com</b></a> does not knowingly collect any Personal Identifiable Information of children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately at <a href="mailto:contact@airfarefees.com/"><strong>contact@airfarefees.com</strong></a>, and we will do our best efforts to promptly remove such information from our records.</p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

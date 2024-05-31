// import React from "react";
// import "./CtaPopup.styles.css";

// import calling from "../../assets/images/flight/calling.png";

// import logo from "../../assets/images/flight/logo-new.png";
// import { phoneNum } from "../../utils/globalVars";

// const CtaPopup = ({ dataToSend }) => {
//   const [ctaPopStatus, setCtaPopStatus] = React.useState(true);

//   return (
//     <div
//       className={`cm-cta-popup-container cm-flex-type-2 ${
//         ctaPopStatus ? "cm-cta-popup-active" : ""
//       }`}
//     >
//       <div className="cm-cta-pop-wrapper cm-white-bg cm-pos-relative cm-txt-center">
//         <div className="cm-pop-logo">
//           <img src={logo} alt="Trian Fly" />
//         </div>
//         <div
//           className="cm-close cm-flex-type-2 cm-sec-bg2 cm-white-col cm-pointer"
//           onClick={() => setCtaPopStatus(false)}
//         >
//           <i className="fa-solid fa-xmark"></i>
//         </div>
//         <h1 className="">Looking for the best deals on </h1>
//         <h2>
//           <span className="cm-sec-col2">{dataToSend.locationDeparture}</span> to{" "}
//           <span className="cm-sec-col2">{dataToSend.locationArrival}</span>?
//         </h2>
//         <img src={calling} alt="executive" />
//         <div className="cm-content">
//           <p>Call now and save upto 20%</p>
//           <h3>
//             <a className="cm-sec-col2" href={`tel:${phoneNum.value}`}>
//               {phoneNum.label}
//             </a>
//           </h3>
//           <a
//             className="cm-btn cm-sec-bg2 cm-white-col cm-wt-700 cm-btn-lg"
//             href={`tel:${phoneNum.value}`}
//           >
//             Call Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CtaPopup;

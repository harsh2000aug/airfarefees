import React from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, closeSelect) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeSelect();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const PassengerSelector = ({ selectedVal, handleTravChange }) => {
  const wrapperRef = React.useRef(null);
  const [passData, setPassData] = React.useState({
    adults: selectedVal.adults,
    child: selectedVal.child,
  });

  const [popStatus, setPopStatus] = React.useState(false);

  const closeSelect = () => setPopStatus(false);

  useOutsideAlerter(wrapperRef, closeSelect);

  React.useEffect(() => {
    setPassData({
      adults: selectedVal.adults,
      child: selectedVal.child,
    });
  }, [selectedVal]);

  const handleTravPop = (e) => {
    e.stopPropagation();
    setPopStatus(!popStatus);
  };

  const handleDec = (fieldName) => {
    if (passData[fieldName] > 0) {
      if (
        (fieldName === "adults" && passData[fieldName] > 1) ||
        fieldName === "child"
      ) {
        handleTravChange(passData[fieldName] - 1, fieldName);
      }
    }
  };

  const handleInc = (fieldName) => {
    if (passData[fieldName] < 18) {
      handleTravChange(passData[fieldName] + 1, fieldName);
    }
  };

  return (
    <div
      className={`cm-trav-wrap cm-pos-relative ${
        popStatus ? "cm-trav-wrap-sb-active" : ""
      }`}
      ref={wrapperRef}
    >
      <span className="cm-pointer" onClick={handleTravPop}>
        {passData.adults} {passData.adults > 1 ? "Adults" : "Adult"},{" "}
        {passData.child} {passData.child > 1 ? "Childen" : "Child"}{" "}
        <i className="fa-solid fa-angle-down"></i>
      </span>
      <ul className="cm-menu-ul cm-sb-ul box-shadow-2">
        <li>
          <button className="cm-dec-count" onClick={() => handleDec("adults")}>
            -
          </button>
          <span>
            {passData.adults} {passData.adults > 1 ? "Adults" : "Adult"}
          </span>
          <button className="cm-inc-count" onClick={() => handleInc("adults")}>
            +
          </button>
        </li>
        <li>
          <button className="cm-dec-count" onClick={() => handleDec("child")}>
            -
          </button>
          <span>
            {passData.child} {passData.child > 1 ? "Childen" : "Child"}
          </span>
          <button className="cm-inc-count" onClick={() => handleInc("child")}>
            +
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PassengerSelector;

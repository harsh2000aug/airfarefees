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

const FlClassSelect = ({ selectedVal, handleSelectVal, classTypes }) => {
  const wrapperRef = React.useRef(null);
  const [classData, setClassData] = React.useState(selectedVal);

  const [popStatus, setPopStatus] = React.useState(false);
  const closeSelect = () => setPopStatus(false);
  useOutsideAlerter(wrapperRef, closeSelect);

  const handleClassPop = (e) => {
    e.stopPropagation();
    setPopStatus(!popStatus);
  };

  const loadClasses = () => {
    return classTypes.map((el) => (
      <li
        key={el.value}
        className="cm-pointer"
        onClick={() => handleClassSelect(el)}
      >
        {el.label}
      </li>
    ));
  };

  const handleClassSelect = (el) => {
    handleSelectVal(el);
    setClassData(el);
    closeSelect();
  };

  return (
    <div
      className={`cm-fl-class-select cm-pos-relative ${
        popStatus ? "cm-fl-class-sb-active" : ""
      }`}
      ref={wrapperRef}
    >
      <span className="cm-pointer" onClick={handleClassPop}>
        {classData.label} <i className="fa-solid fa-angle-down"></i>
      </span>
      <ul className="cm-menu-ul cm-sb-ul cm-sec-col box-shadow-2">
        {loadClasses()}
      </ul>
    </div>
  );
};

export default FlClassSelect;

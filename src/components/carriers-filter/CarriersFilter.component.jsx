import { useAtom } from "jotai";
import React from "react";
import { globalAirLineMultiSearch } from "../../jotai";

// , selected, handleCarrierChange
const CarriersFilter = ({ data }) => {
  const [,setAirLineList] = useAtom(globalAirLineMultiSearch);

  const handleInpChange = (e) => {
    if (e.target.checked) {
      setAirLineList(oldValue => {
        return [...oldValue, e.target.value]
      });
    } else {
      setAirLineList(oldValue => {
        return oldValue.filter(itm => itm !== e.target.value)
      })
    }
  };

  const loadCarriers = () => {
    const carrierArr = [];
    for (let key in data) {
      carrierArr.push(
        <li key={key}>
          <label htmlFor={key}>
            <input
              onChange={handleInpChange}
              type="checkbox"
              name="stops"
              value={key}
              id={key}
            />
            <span>{data[key]}</span>
          </label>
        </li>
      );
    }

    return carrierArr;
  };

  return (
    <div className="cm-filter-widget cm-carrier-filter">
      <h4>Airlines</h4>
      <ul className="cm-menu-ul">{loadCarriers()}</ul>
    </div>
  );
};

export default CarriersFilter;

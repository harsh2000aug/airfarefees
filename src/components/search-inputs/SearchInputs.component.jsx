import React from "react";
import axios from "axios";
import { api_url } from "../../utils/apiInfo";
import suggestion from "../../assets/data/suggestion.json";
import { searchFilter } from "../../utils/utilFn";
import downright from "../../assets/images/flight/down-right.svg"

const SearchInputs = ({
  handleSelectedVal,
  selectedVal,
  fieldName,
  placeholder,
  urlVal,
}) => {
  let urldeparture = urlVal !== "" ? urlVal : "";
  if (urlVal === undefined) {
    urldeparture = !!selectedVal
      ? `${selectedVal.name} (${selectedVal.iataCode})`
      : "";
  }

  const [searchTerm, setSearchTerm] = React.useState({
    term: urldeparture,
    shouldSearch: selectedVal,
    clickVaue: false,
  });
  const [searchData, setSearchData] = React.useState({
    result: [],
    isLoading: false,
    noResults: false,
  });

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (
        searchTerm.term.length > 1 &&
        searchTerm.shouldSearch &&
        searchTerm.clickVaue
      ) {
        setSearchData({
          ...searchData,
          isLoading: true,
          noResults: false,
        });

        const res = await axios.post(`${api_url}/flight/search-airport`, {
          searchTerm: searchTerm.term,
        });

        console.log("result", res.data);

        setSearchData({
          result: res.data.data,
          isLoading: false,
          noResults: res.data.length === 0,
        });
      } else {
        setSearchData({
          ...searchData,
          result: [],
        });
      }
    }, 10);
    // delayDebounceFn
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm({
      term: e.target.value,
      shouldSearch: true,
      clickVaue: true,
    });
  };

  const loadResults = () => {
    if (searchData.result.length > 0) {
      return searchData.result.filter(itm => itm.subType === "CITY").length > 0 ? searchData.result.filter(itm => itm.subType === "CITY").map((el) => (
        <>
          <li
            key={el.id}
            onClick={() => handleListClick(el)}
            className="cm-pointer cm-flex-type-1"
          >
            <p>
              <span>
                {el.address.cityName}, {el.address.countryName}
              </span>
              <span>{el.name}</span>
            </p>
            <span className="cm-loc-code">{el.iataCode}</span>
          </li>
          {searchData.result.filter(itm => itm.subType === "AIRPORT" && itm.address.cityName === el.address.cityName && el.iataCode !== itm.iataCode).map(child => (
            <li
              key={child.id}
              onClick={() => handleListClick(child)}
              style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            >
              {/* <span
                style={{ fontSize: "26px", color: "#000", margin: "0% 2%" }}
                className="material-symbols-outlined"
              >
                subdirectory_arrow_right
              </span> */}

              <div>
                <img src={downright} alt="" style={{ width: "30px", display: "block" }} />
              </div>
              <div style={{ padding: "15px 25px !important", background: "#f0f1f5", borderRadius: "1rem", margin: "0% 2%" }}>
                <span
                  style={{
                    fontSize: "20px",
                    color: "#000",
                    padding: "10px 12px"

                  }}
                  className="material-symbols-outlined"
                >
                  travel
                </span>
              </div>
              <p style={{ margin: "0% 2%", width: "80%" }}>
                <span>
                  {child.name}
                  <span className="cm-loc-code" style={{ margin: "0 2%", color: "#000", fontWeight: "400" }}>{child.iataCode}</span>
                </span>
                <span>
                  {child.address.cityName}, {child.address.countryName}
                </span>
              </p>
            </li>
          ))}
        </>
      )) :
        searchData.result.filter(itm => itm.subType === "AIRPORT").map(el => (
          <li
            key={el.id}
            onClick={() => handleListClick(el)}
            className="cm-pointer cm-flex-type-1"
          >
            <p>
              <span>
                {el.address.cityName}, {el.address.countryName}
              </span>
              <span>{el.name}</span>
            </p>
            <span className="cm-loc-code">{el.iataCode}</span>
          </li>
        ))
    }

    if (searchData.noResults) {
      return <li>No search results found.</li>;
    }
  };

  const handleListClick = (el) => {
    handleSelectedVal(el, fieldName);
    setSearchTerm({
      ...searchTerm,
      term: `${el.name} (${el.iataCode})`,
      shouldSearch: false,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
      <div className="cm-search-inputs cm-pos-relative">
        <div className="cm-content cm-pos-relative">
          <input
            type="text"
            value={searchTerm.term}
            name="fromFlight"
            onChange={handleChange}
            autoComplete="off"
            placeholder={placeholder}
          />
          <i className="fa-solid fa-plane"></i>
          {searchData.isLoading ? <div className="cm-inp-loader"></div> : null}
        </div>
        {!searchData.isLoading ? (
          <ul className="cm-menu-ul cm-sb-ul cm-result-list cm-sec-col box-shadow-2">
            {loadResults()}
          </ul>
        ) : null}
      </div>
    </form>
  );
};

export default SearchInputs;

import React, { useState, useEffect, useRef } from "react"
import { countryDeta, countrySign } from '../../utils/cuntryname'
import './countryselector.css';
import { useSelector, useDispatch } from "react-redux";

import handleChangeCurrency from "../../redux/currency/currency.action";

const CountrySelector = () => {
    const countryref = useRef(null)
    const currancyref = useRef(null)
    const [isActive, setActive] = useState(false)
    const [currancyCode, setcurrancyCode] = useState(false)

    let urlname;
    urlname = window.location.hostname.split('.')[0];
    if (urlname === 'localhost') {
        urlname = "en"
    } else {
        if (urlname === 'www') {
            urlname = "en"
        }
    }

    // urlname = 'au'; 
    const dispatch = useDispatch();
    const myState = useSelector((state) => state.currency);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isActive && countryref.current && !countryref.current.contains(e.target)) {
                setActive(!isActive)
            }
            if (currancyCode && currancyref.current && !currancyref.current.contains(e.target)) {
                setcurrancyCode(!currancyCode)
            }

        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isActive, currancyCode])

    //   console.log(countryDeta[urlname].countryName, countryDeta[urlname].currencyCode)

    return (
        <>
            <div className="country-picker-selector">
                {/* <div className="country-flag-box" ref={countryref}>
                    <div className="country-inp" onClick={() => setActive(!isActive)}>
                        <img src={`./images/flags/${urlname}.svg`} />
                        <input type="text" value={countryDeta[urlname]?.countryName} />
                    </div>
                    <div className={`country-picker-box ${isActive ? "active" : " "}`}>
                        <a className="country-picker-item" href="https://au.Airfarefees.com/">
                            <span className="country-flag au">&nbsp;</span>
                            <span className="country-picker-item__content">Australia</span>
                        </a>
                        <a className="country-picker-item" href="https://ca.Airfarefees.com/">
                            <span className="country-flag ca">&nbsp;</span>
                            <span className="country-picker-item__content">Canada</span>
                        </a>
                        <a className="country-picker-item" href="https://hk.Airfarefees.com/">
                            <span className="country-flag hk">&nbsp;</span>
                            <span className="country-picker-item__content">Hong Kong</span>
                        </a>
                        <a className="country-picker-item" href="https://in.Airfarefees.com/">
                            <span className="country-flag in">&nbsp;</span>
                            <span className="country-picker-item__content">India</span>
                        </a>
                        <a className="country-picker-item" href="https://id.Airfarefees.com/">
                            <span className="country-flag id">&nbsp;</span>
                            <span className="country-picker-item__content">Indonesia</span>
                        </a>
                        <a className="country-picker-item" href="https://my.Airfarefees.com/">
                            <span className="country-flag my">&nbsp;</span>
                            <span className="country-picker-item__content">Malaysia</span>
                        </a>
                        <a className="country-picker-item" href="https://nz.Airfarefees.com/">
                            <span className="country-flag nz">&nbsp;</span>
                            <span className="country-picker-item__content">New Zealand</span>
                        </a>
                        <a className="country-picker-item" href="https://ph.Airfarefees.com/">
                            <span className="country-flag ph">&nbsp;</span>
                            <span className="country-picker-item__content">Philippines</span>
                        </a>
                        <a className="country-picker-item" href="https://qa.Airfarefees.com/">
                            <span className="country-flag qa">&nbsp;</span>
                            <span className="country-picker-item__content">Qatar</span>
                        </a>
                        <a className="country-picker-item" href="https://sg.Airfarefees.com/">
                            <span className="country-flag sg">&nbsp;</span>
                            <span className="country-picker-item__content">Singapore</span>
                        </a>
                        <a className="country-picker-item" href="https://sa.Airfarefees.com/">
                            <span className="country-flag sa">&nbsp;</span>
                            <span className="country-picker-item__content">South Africa</span>
                        </a>
                        <a className="country-picker-item" href="https://th.Airfarefees.com/">
                            <span className="country-flag th">&nbsp;</span>
                            <span className="country-picker-item__content">Thailand</span>
                        </a>
                        <a className="country-picker-item" href="https://en.Airfarefees.com/" aria-current="page">
                            <span className="country-flag us">&nbsp;</span>
                            <span className="country-picker-item__content">USA (EN)</span>
                        </a>
                        <a className="country-picker-item" href="https://es.Airfarefees.com/">
                            <span className="country-flag us">&nbsp;</span>
                            <span className="country-picker-item__content">USA (ES)</span>
                        </a>
                        <a className="country-picker-item" href="#">
                            <span className="country-flag ae">&nbsp;</span>
                            <span className="country-picker-item__content">United Arab Emirates</span>
                        </a>
                        <a className="country-picker-item" href="https://uk.Airfarefees.com/">
                            <span className="country-flag uk">&nbsp;</span>
                            <span className="country-picker-item__content">United Kingdom</span>
                        </a>
                        <a className="country-picker-item" href="https://vn.Airfarefees.com/">
                            <span className="country-flag vn">&nbsp;</span>
                            <span className="country-picker-item__content">Vietnam</span>
                        </a>
                    </div>
                </div> */}
                <div className="currancy-name" ref={currancyref}>
                    <div className="country-inp" onClick={() => setcurrancyCode(!currancyCode)}>
                        <input type="text" value={countrySign[myState]} />
                    </div>
                    <div className={`price-picker-box ${currancyCode ? "active" : " "}`}>
                        <ul>
                            <li onClick={() => dispatch(handleChangeCurrency('USD'))}>
                                <span>$</span> USD
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('INR'))}>
                                <span>₹</span>INR
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('AED'))}>
                                <span>AED</span>UAE Dirhams
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('CAD'))}>
                                <span>C$</span>CAD
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('AUD'))}>
                                <span>$</span>Australian Dollars
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('HKD'))}>
                                <span>HK$</span>Hong Kong
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('GBP'))}>
                                <span>£</span>Pound Sterling
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('THB'))}>
                                <span>฿</span>Thai Baht
                            </li>
                            <li onClick={() => dispatch(handleChangeCurrency('SGD'))}>
                                <span>S$</span>Singapore Dollars
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountrySelector
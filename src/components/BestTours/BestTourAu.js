import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourAu = () => {
    const navigate = useNavigate();

    const handleExpClick = (origin, dest) => {
        navigate({
            pathname: "/flights",
            search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
                "YYYY-MM-DD"
            )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
        });
    };
    return (
        <>
            <div className="padding-btm">
                <div className="container">
                    <div className="common-text">
                        <h5>Modern & Beautiful</h5>
                        <h2>Handpicked Locations For You</h2>
                    </div>
                    <div className="location-slider flex space-bw">
                        <div className="location-slides" onClick={(e) => handleExpClick("SYD", "LHR")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="location-text">
                                <p>Sydney</p>
                                <div className="cm-flex-type-1">
                                    <span>SYD <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span>
                                    <strong>Starting from $1369</strong>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MEL", "LHR")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-2.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <p>Melbourne</p>
                                <div className="cm-flex-type-1">
                                    <span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span>
                                    <strong>Starting from $1558</strong>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("BNE", "JFK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="location-text">
                                <p>Brisbane</p>
                                <div className="cm-flex-type-1">
                                    <span>BNE <i className="fa-solid fa-arrow-right-arrow-left"></i> JFK</span>
                                    <strong>Starting from $1394</strong>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MEL", "SIN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-4.jpg" alt="" />
                                </a>
                            </div>
                            <div className="location-text">
                                <p>Singapore</p>
                                <div className="cm-flex-type-1">
                                    <span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> SIN</span>
                                    <strong>Starting from $1309</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourAu;

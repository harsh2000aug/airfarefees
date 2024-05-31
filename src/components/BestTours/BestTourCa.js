import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourCa = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("YTO", "LHR")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/toronto.jpg" alt="" />
                                </a>
                            </div>
                            <div className="location-text">
                                <div >Toronto</div>
                                <div className="cm-flex-type-1">
                                    <p><span>YTO <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                    <p><strong>C$ 155</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("YVR", "LHR")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/vancouver.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Vancouver</div>
                                <div className="cm-flex-type-1">
                                    <p><span>YVR <i className="fa-solid fa-arrow-right-arrow-left"></i> LHR</span></p>
                                    <p><strong>C$ 2256</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("ORL", "JFK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/orlando.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Orlando</div>
                                <div className="cm-flex-type-1">
                                    <p><span>ORL <i className="fa-solid fa-arrow-right-arrow-left"></i> JFK</span></p>
                                    <p><strong>C$ 554</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("YYC", "BNE")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/calgary.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Calgary</div>
                                <div className="cm-flex-type-1">
                                    <p><span>YYC <i className="fa-solid fa-arrow-right-arrow-left"></i> BNE</span></p>
                                    <p><strong>C$ 3123</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourCa;

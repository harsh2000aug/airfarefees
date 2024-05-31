import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourSg = () => {
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
                <div className=" container">
                    <div className="common-text">
                        <h5>Modern & Beautiful</h5>
                        <h2>Handpicked Locations For You</h2>
                    </div>
                    <div className="location-slider flex space-bw">
                        <div className="location-slides" onClick={(e) => handleExpClick("SIN", "BKK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Bangkok</div>
                                <div className="cm-flex-type-1">
                                    <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                    <p><strong>S$ 155</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("SIN", "DOH")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/doha.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Doha</div>
                                <div className="cm-flex-type-1">
                                    <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> DOH</span></p>
                                    <p><strong>S$ 2507</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("SIN", "DEL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/new-delhi.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >New Delhi</div>
                                <div className="cm-flex-type-1">
                                    <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> DEL</span></p>
                                    <p><strong>S$ 423</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("SIN", "IST")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/istanbul.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Istanbul</div>
                                <div className="cm-flex-type-1">
                                    <p><span>SIN <i className="fa-solid fa-arrow-right-arrow-left"></i> IST</span></p>
                                    <p><strong>S$ 1465</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourSg;

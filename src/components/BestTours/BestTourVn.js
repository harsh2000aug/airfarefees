import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourUk = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("SGN", "HAN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hochiminh.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Ho Chi Minh City</div>
                                <div className="cm-flex-type-1">
                                    <p><span>SGN <i className="fa-solid fa-arrow-right-arrow-left"></i> HAN</span></p>
                                    <p><strong>2,386,452 ₫</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("HAN", "DAD")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hanoi.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Hanoi</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HAN <i className="fa-solid fa-arrow-right-arrow-left"></i> DAD</span></p>
                                    <p><strong>2,414,000 ₫</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DAD", "PQC")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/da-nang.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >De Nang</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DAD <i className="fa-solid fa-arrow-right-arrow-left"></i> PQC</span></p>
                                    <p><strong>2,762,056 ₫</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("PQC", "SGN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/phu.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Phu Quoc</div>
                                <div className="cm-flex-type-1">
                                    <p><span>PQC <i className="fa-solid fa-arrow-right-arrow-left"></i> SGN</span></p>
                                    <p><strong>1,517,519 ₫</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourUk;

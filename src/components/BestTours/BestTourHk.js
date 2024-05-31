import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourHk = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("HKG", "SEL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/seoul.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Seoul</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> SEL</span></p>
                                    <p><strong>HK$2,451</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("HKG", "YYC")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/calgary.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Calgary</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> YYC</span></p>
                                    <p><strong>HK$23,859</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("HKG", "BKK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Bangkok</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                    <p><strong>HK$2,164</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("HKG", "MNL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/manila.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Manila</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HKG <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                    <p><strong>HK$2,187</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourHk;

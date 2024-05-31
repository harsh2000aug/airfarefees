import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourRp = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("WLG", "MEL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Wellington</div>
                                <div className="cm-flex-type-1">
                                    <p><span>WLG <i className="fa-solid fa-arrow-right-arrow-left"></i> MEL</span></p>
                                    <p><strong>$1247</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("CHC", "WLG")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/christchurch.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Christchurch</div>
                                <div className="cm-flex-type-1">
                                    <p><span>CHC <i className="fa-solid fa-arrow-right-arrow-left"></i> WLG</span></p>
                                    <p><strong>$386</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("CHC", "ADL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-7.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Adelaid</div>
                                <div className="cm-flex-type-1">
                                    <p><span>CHC <i className="fa-solid fa-arrow-right-arrow-left"></i> ADL</span></p>
                                    <p><strong>$1817</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MEL", "BPN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/balikpapan.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Balikpapan</div>
                                <div className="cm-flex-type-1">
                                    <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BPN</span></p>
                                    <p><strong>$2637</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourRp;

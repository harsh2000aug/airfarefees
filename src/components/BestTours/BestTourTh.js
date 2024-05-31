import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourTh = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("CNX", "BKK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/chiang-mai.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Chiang Mai</div>
                                <div className="cm-flex-type-1">
                                    <p><span>CNX <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                    <p><strong>฿2,478</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("CNX", "HKT")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/phuket.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Phuket</div>
                                <div className="cm-flex-type-1">
                                    <p><span>CNX <i className="fa-solid fa-arrow-right-arrow-left"></i> HKT</span></p>
                                    <p><strong>฿4,688</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("HKT", "HDY")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/hat-yai.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Hat Yai</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HKT <i className="fa-solid fa-arrow-right-arrow-left"></i> HDY</span></p>
                                    <p><strong>฿4,688</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("HDY", "BKK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Bangkok</div>
                                <div className="cm-flex-type-1">
                                    <p><span>HDY <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                    <p><strong>฿4,010</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourTh;

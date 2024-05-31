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
                        <div className="location-slides" onClick={(e) => handleExpClick("JKT", "DPS")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/jakarta.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Jakarta</div>
                                <div className="cm-flex-type-1">
                                    <p><span>JKT <i className="fa-solid fa-arrow-right-arrow-left"></i> DPS</span></p>
                                    <p><strong>Rp 3,254,880</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("JKT", "KUL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kuala.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Kuala Lampur</div>
                                <div className="cm-flex-type-1">
                                    <p><span>JKT <i className="fa-solid fa-arrow-right-arrow-left"></i> KUL</span></p>
                                    <p><strong>Rp 3,325,800</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DPS", "BPN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/denpasar.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Denpasar</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DPS <i className="fa-solid fa-arrow-right-arrow-left"></i> BPN</span></p>
                                    <p><strong>Rp 4,165,816</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("BPN", "JKT")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/balikpapan.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Balikpapan</div>
                                <div className="cm-flex-type-1">
                                    <p><span>BPN <i className="fa-solid fa-arrow-right-arrow-left"></i> JKT</span></p>
                                    <p><strong>Rp 3,288,760</strong></p>
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

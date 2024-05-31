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
                        <div className="location-slides" onClick={(e) => handleExpClick("BKI", "LGK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kota-kinabalu.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Kota Kinabalu</div>
                                <div className="cm-flex-type-1">
                                    <p><span>BKI <i className="fa-solid fa-arrow-right-arrow-left"></i> LGK</span></p>
                                    <p><strong>RM 641</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("LGK", "KCH")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/langkawi.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Langkawi</div>
                                <div className="cm-flex-type-1">
                                    <p><span>LGK <i className="fa-solid fa-arrow-right-arrow-left"></i> KCH</span></p>
                                    <p><strong>RM 830</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("KCH", "PEN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/kuching.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Kuching</div>
                                <div className="cm-flex-type-1">
                                    <p><span>KCH <i className="fa-solid fa-arrow-right-arrow-left"></i> PEN</span></p>
                                    <p><strong>RM 545</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("PEN", "BKI")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/penang.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Penang</div>
                                <div className="cm-flex-type-1">
                                    <p><span>PEN <i className="fa-solid fa-arrow-right-arrow-left"></i> BKI</span></p>
                                    <p><strong>RM 653</strong></p>
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

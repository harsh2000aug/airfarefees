import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourUAE = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("DXB", "CAI")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/dubai.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Dubai</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> CAI</span></p>
                                    <p><strong>AED 2,374</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DXB", "WLG")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Wellington</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> WLG</span></p>
                                    <p><strong>AED 10,955</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DXB", "ADL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-7.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Adelaid</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DXB <i className="fa-solid fa-arrow-right-arrow-left"></i> ADL</span></p>
                                    <p><strong>AED 12,515</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MEL", "DXB")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/australia-2.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Melbourne</div>
                                <div className="cm-flex-type-1">
                                    <p><span>MEL <i className="fa-solid fa-arrow-right-arrow-left"></i> DXB</span></p>
                                    <p><strong>AED 10,400</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourUAE;

import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourPh = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("MNL", "CEB")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/manila.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Manila</div>
                                <div className="cm-flex-type-1">
                                    <p><span>MNL <i className="fa-solid fa-arrow-right-arrow-left"></i> CEB</span></p>
                                    <p><strong>₱8,398</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("CEB", "MNL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cebu-city.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Cebu City</div>
                                <div className="cm-flex-type-1">
                                    <p><span>CEB <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                    <p><strong>₱7,810</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MPH", "SEB")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/boracay.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Boracay</div>
                                <div className="cm-flex-type-1">
                                    <p><span>MPH <i className="fa-solid fa-arrow-right-arrow-left"></i> SEB</span></p>
                                    <p><strong>₱7,810</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DVO", "MNL")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/davao-city.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Davao City</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DVO <i className="fa-solid fa-arrow-right-arrow-left"></i> MNL</span></p>
                                    <p><strong>₱12,023</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourPh;

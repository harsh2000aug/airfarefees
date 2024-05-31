import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourIn = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("DEL", "BOM")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/mombai.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Mumbai</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BOM</span></p>
                                    <p><strong>₹9,167</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DEL", "BLR")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/banglore.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Banglore</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> BLR</span></p>
                                    <p><strong>₹10,323</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DEL", "GOI")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/goa.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >GOA</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> GOI</span></p>
                                    <p><strong>₹8,722</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DEL", "DXB")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/dubai.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Dubai</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DEL <i className="fa-solid fa-arrow-right-arrow-left"></i> DXB</span></p>
                                    <p><strong>₹26,760</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourIn;

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
                        <div className="location-slides" onClick={(e) => handleExpClick("JNB", "PLZ")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/johanesburg.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Johannesburg</div>
                                <div className="cm-flex-type-1">
                                    <p><span>JNB <i className="fa-solid fa-arrow-right-arrow-left"></i> PLZ</span></p>
                                    <p><strong>R2 489</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("PLZ", "CPT")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/port.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Port Elizabeth</div>
                                <div className="cm-flex-type-1">
                                    <p><span>PLZ <i className="fa-solid fa-arrow-right-arrow-left"></i> CPT</span></p>
                                    <p><strong>R2 388</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("CPT", "DOH")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/cape-town.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Cape Town</div>
                                <div className="cm-flex-type-1">
                                    <p><span>CPT <i className="fa-solid fa-arrow-right-arrow-left"></i> DOH</span></p>
                                    <p><strong>R20 436</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DUR", "PER")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/durban.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Durban</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DUR <i className="fa-solid fa-arrow-right-arrow-left"></i> PER</span></p>
                                    <p><strong>R34 876</strong></p>
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

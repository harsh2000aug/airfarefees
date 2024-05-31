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
                        <div className="location-slides" onClick={(e) => handleExpClick("LON", "BKK")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/bangkok.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Bangkok</div>
                                <div className="cm-flex-type-1">
                                    <p><span>LON <i className="fa-solid fa-arrow-right-arrow-left"></i> BKK</span></p>
                                    <p><strong>£1,473</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MAN", "YMQ")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/montreal.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Montreal</div>
                                <div className="cm-flex-type-1">
                                    <p><span>MAN <i className="fa-solid fa-arrow-right-arrow-left"></i> YMQ</span></p>
                                    <p><strong>£781</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("LON", "BCN")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/barcelona.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Barcelona</div>
                                <div className="cm-flex-type-1">
                                    <p><span>LON <i className="fa-solid fa-arrow-right-arrow-left"></i> BCN</span></p>
                                    <p><strong>£112</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("MAN", "CPT")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/wellington.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Cape Town</div>
                                <div className="cm-flex-type-1">
                                    <p><span>MAN <i className="fa-solid fa-arrow-right-arrow-left"></i> CPT</span></p>
                                    <p><strong>£817</strong></p>
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

import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BestTourQa = () => {
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
                        <div className="location-slides" onClick={(e) => handleExpClick("DOH", "YOW")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/ottawa.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Canada</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> YOW</span></p>
                                    <p><strong>6789 QAR</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("YOW", "DOH")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/doha.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Doha</div>
                                <div className="cm-flex-type-1">
                                    <p><span>YOW <i className="fa-solid fa-arrow-right-arrow-left"></i> DOH</span></p>
                                    <p><strong>6780 QAR</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DOH", "SEB")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/sharjah.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Sharjah</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> SEB</span></p>
                                    <p><strong>968 QAR</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="location-slides" onClick={(e) => handleExpClick("DOH", "CMB")}>
                            <div className="location-image">
                                <a href="#" className="image-box">
                                    <img src="./images/tours/colombo.jpg" alt="" />
                                </a>

                            </div>
                            <div className="location-text">
                                <div >Colombo</div>
                                <div className="cm-flex-type-1">
                                    <p><span>DOH <i className="fa-solid fa-arrow-right-arrow-left"></i> CMB</span></p>
                                    <p><strong>2430 QAR</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BestTourQa;

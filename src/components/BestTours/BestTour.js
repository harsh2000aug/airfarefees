import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import NewYork from "../../assets/images/new/new-york.png"
import Tokyo from "../../assets/images/new/tokyo.png"
import London from "../../assets/images/new/london.png"
import Paris from "../../assets/images/new/paris.png"

const BestTour = () => {
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
            <section className="padding-btm">
                <div className="container">
                    <div className="common-text">
                        <h5>Modern & Beautiful</h5>
                        <h2>Handpicked Locations For You</h2>
                    </div>
                    <div className="location-slider flex space-bw">
                        <div className="location-slides" onClick={() => handleExpClick("NYC", "BOS")}>
                            <div className="location-image">
                                <img src={NewYork} alt="" />
                            </div>
                            <div className="location-text">
                                <h3>New York</h3>
                                <p>Spend your vacation amid New York's revitalized environment.</p>
                                <span>Starting from $100</span>
                            </div>
                        </div>
                        <div className="location-slides" onClick={() => handleExpClick("TYO", "OKO")}>
                            <div className="location-image">
                                <img src={Tokyo} alt="" />
                            </div>
                            <div className="location-text">
                                <h3>Tokyo</h3>
                                <p>In Tokyo, take in the city's rich history and a dash of spirituality.</p>
                                <span>Starting from $200</span>
                            </div>
                        </div>
                        <div className="location-slides" onClick={() => handleExpClick("LON", "LGW")}>
                            <div className="location-image">
                                <img src={London} alt="" />
                            </div>
                            <div className="location-text">
                                <h3>London</h3>
                                <p>Visit London to have world-className eateries and a fascinating history.</p>
                                <span>Starting from $150</span>
                            </div>
                        </div>
                        <div className="location-slides" onClick={() => handleExpClick("PAR", "ORY")}>
                            <div className="location-image">
                                <img src={Paris} alt="" />
                            </div>
                            <div className="location-text">
                                <h3>Paris</h3>
                                <p>Plan your trip to Paris and say "Bonjour" to your love of vacations.</p>
                                <span>Starting from $180</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BestTour;

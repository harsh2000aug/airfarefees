import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlightSearchForm from "../../components/flight-search-form/FlightSearchForm.component";
import moment from "moment";
import "./Homepage.styles.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import PopupPage from "../popup-deals/Popuppage";
import axios from "axios";
import { theme_airline_url } from "../../utils/apiInfo";
import BestTour from "../../components/BestTours/BestTour";
import BestTourAu from "../../components/BestTours/BestTourAu";
import BestTourCa from "../../components/BestTours/BestTourCa";
import BestTourIn from "../../components/BestTours/BestTourIn";
import BestTourNz from "../../components/BestTours/BestTourNz";
import BestTourPh from "../../components/BestTours/BestTourPh";
import BestTourQa from "../../components/BestTours/BestTourQa";
import BestTourRp from "../../components/BestTours/BestTourRp";
import BestTourSg from "../../components/BestTours/BestTourSg";
import BestTourUAE from "../../components/BestTours/BestTourUAE";
import BestTourHk from "../../components/BestTours/BestTourHk";
import BestTourMy from "../../components/BestTours/BestTourMy";
import BestTourZa from "../../components/BestTours/BestTourZa";
import BestTourTh from "../../components/BestTours/BestTourTh";
import BestTourUk from "../../components/BestTours/BestTourUk";
import BestTourVn from "../../components/BestTours/BestTourVn";
import Aeroplane from "../../assets/images/new/down.png"
import smiling from "../../assets/images/new/smiling.jpg"

const HomePage = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleExpClick = (origin, dest) => {
    navigate({
      pathname: "/flights",
      search: `?search_t=${moment().unix()}&tripType=one-way&dep_loc=${origin}&dest_loc=${dest}&dep_dt=${moment().format(
        "YYYY-MM-DD"
      )}&ret_dt=null&fl_cl=ECONOMY&adt=1&chd=0`,
    });
  };

  const loadBestTour = () => {
    let urlname
    urlname = window.location.hostname.split('.')[0];
    if (urlname === 'localhost') {
      urlname = "au"
    } else {
      if (urlname === 'www') {
        urlname = "au"
      }
    }



    return (
      <>
        {urlname === 'Airfarefees' ? <BestTour /> : ""}
        {urlname === 'au' ? <BestTourAu /> : ""}
        {urlname === 'ca' ? <BestTourCa /> : ""}
        {urlname === 'hk' ? <BestTourHk /> : ""}
        {urlname === 'in' ? <BestTourIn /> : ""}
        {urlname === 'id' ? <BestTourRp /> : ""}
        {urlname === 'my' ? <BestTourMy /> : ""}
        {urlname === 'nz' ? <BestTourNz /> : ""}
        {urlname === 'ph' ? <BestTourPh /> : ""}
        {urlname === 'qa' ? <BestTourQa /> : ""}
        {urlname === 'sg' ? <BestTourSg /> : ""}
        {urlname === 'sa' ? <BestTourZa /> : ""}
        {urlname === 'th' ? <BestTourTh /> : ""}
        {urlname === 'en' ? <BestTour /> : ""}
        {urlname === 'es' ? <BestTour /> : ""}
        {urlname === 'ae' ? <BestTourUAE /> : ""}
        {urlname === 'uk' ? <BestTourUk /> : ""}
        {urlname === 'vn' ? <BestTourVn /> : ""}
      </>
    )
  }
  // const [showPopup, setPopup] = useState('active')

  // function removePopup(){
  //   setPopup('')
  // }

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  const urlFull = window.location.href;
  useEffect(() => {
    axios
      .get(`${theme_airline_url}`, {
        params: {
          url: urlFull,
        },
      })
      .then((response) => {
        setRes(response.data.status);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, [urlFull]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Airfarefees | Home </title>
      </Helmet>
      {res === "1" ? <PopupPage /> : ""}


      <section className="head-section">
        <div className="container">
          <div className="flex space-bw align-center">
            <div className="hero-text col-40">
              <h1>Go Tour <br /> With Airfarefees</h1>
              <p>Visit Europe, America, Asia, Africa or beyond!</p>
            </div>
            <div className="booking-form-main col-60">
              <FlightSearchForm />
            </div>
          </div>
        </div>
      </section>

      <section class="gap">
        <div class="container">
          <div class="service-text">
            <h2><span>Top</span> Destinations</h2>
          </div>
          <div class="packages flex space-bw">
            <div class="pack-detail col-25">
              <div class="package-image">
                <img src={require("../../assets/images/new/london.jpg")} alt="" />
              </div>
              <div class="package-text-top">
                <h3>London</h3>
                <p>Where history meets modernity in every corner</p>
                <button onClick={(e) => handleExpClick("LON", "NYC")}>Explore More</button>
              </div>
            </div>
            <div class="pack-detail col-25">
              <div class="package-image">
                <img src={require("../../assets/images/new/italy.jpg")} alt="" />
              </div>
              <div class="package-text-top">
                <h3>Italy</h3>
                <p>A timeless tapestry of culture, cuisine, and captivating beauty</p>
                <button onClick={(e) => handleExpClick("ROM", "ZGS")}>Explore Now</button>
              </div>
            </div>
            <div class="pack-detail col-25">
              <div class="package-image">
                <img src={require("../../assets/images/new/newyork.jpg")} alt="" />
              </div>
              <div class="package-text-top">
                <h3>New York</h3>
                <p>The city where dreams touch the sky</p>
                <button onClick={(e) => handleExpClick("NYC", "LON")}>Explore Now</button>
              </div>
            </div>
            <div class="pack-detail col-25">
              <div class="package-image">
                <img src={require("../../assets/images/new/tokyo.jpg")} alt="" /></div>
              <div class="package-text-top">
                <h3>Tokyo</h3>
                <p>A vibrant fusion of tradition and innovation</p>
                <button onClick={(e) => handleExpClick("TYO", "NRT")}>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap calltoact">
        <div className="container flex space-bw">
          <div className="col-40 smiling-girl">
            <img src={smiling} alt="" />
            <span>
              <i class="fa-solid fa-mobile-screen-button fa-shake"></i>
            </span>
          </div>
          <div className="col-60 smiling-girl">
            <p>Call now for immediate assistance! Experience our no-wait policy and get the help you need right away. Our dedicated team is ready to assist you 24/7 with no delays. Don’t wait any longer—dial our number and enjoy fast, efficient service tailored to meet your needs instantly!</p>
            <a href="tel:+18774000302"><i className="fa-solid fa-phone"></i>+1-877-400-0302</a>
          </div>
        </div>
      </section>

      <section className="gap review-slider">
        <div className="container">
          <div class="service-text">
            <h2><span>Customer</span> Reviews</h2>
          </div>
          <div className="testimonials-slider">
            <Slider {...settings}>
              <div className="tst-slide">
                <div class="quotes">
                  <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>I recently booked a flight through AirfareFees, and I couldn't be happier with the experience. The website is incredibly user-friendly, making it easy to find the best deals quickly. I loved the transparency in pricing—no hidden fees or last-minute surprises. The customer service was excellent as well; they promptly answered all my queries and provided helpful information. I'll definitely be using AirfareFees for all my future travel needs!</p>
                <h3>James Harrison</h3>
                <div class="star">
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <div className="tst-slide">
                <div class="quotes">
                  <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>AirfareFees is a fantastic flight booking site! The search filters are comprehensive, allowing me to find exactly what I needed. I especially appreciate the detailed breakdown of fees and taxes—it's nice to see a site that values transparency. My only minor gripe is that the mobile app could be a bit more intuitive, but it's still functional. Overall, a great experience, and I managed to snag a great deal on my last trip!</p>
                <h3>Emily Thompson</h3>
                <div class="star">
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star-half"></i>
                </div>
              </div>
              <div className="tst-slide">
                <div class="quotes">
                  <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>AirfareFees has revolutionized the way I book flights. The entire process, from searching for flights to completing the purchase, was seamless. The site offers a wide range of options, and the price comparison feature is top-notch. I was able to find a flight that fit my budget perfectly. Additionally, the customer support team was very responsive and helpful when I had questions. Highly recommend this site to anyone looking for hassle-free flight bookings!</p>
                <h3>Sarah Mitchell</h3>
                <div class="star">
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                  <i class="fa-solid fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

    </React.Fragment >
  );
};

export default HomePage;

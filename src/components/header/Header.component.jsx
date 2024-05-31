import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
import logo from "../../assets/images/new/logo.png";
import CountrySelector from "../countrySeloctor/CountrySelector";
import $ from 'jquery';

const Header = () => {

  $(document).on('click', "#bars", function () {
    $(".side-menu").show();
  });
  $(document).on('click', '#close', function () {
    $('.side-menu').hide();
  });

  $(document).on('click', "#nameChange", function () {
    $("#nameChangeDropdown").slideToggle();
  });
  $(document).on('click', "#popularArilines", function () {
    $("#airlinesDropdown").slideToggle();
  });
  $(document).on('click', "#topDestinations", function () {
    $("#destinationsDropdown").slideToggle();
  });

  return (
    <header>
      <div className="container">
        <nav className="flex space-bw align-center">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="nav-menu flex space-bw align-center">
            <div className="call-btn">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+18774000302">+1-877-400-0302</a>
            </div>
            {/* <div className="toggle">
              <i className="fa-solid fa-bars" id="bars"></i>
              <section className="side-menu">
                <div className="inner-menu">
                  <div className="menu-top" id="close">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <div className="menu-body">
                    <ul>
                      <li>
                        <Link onClick={() => $('.side-menu').hide()} to="/">Home</Link>
                      </li>
                      <li className="flex space-bw pos-relate align-center">
                        <a href="">Popular Airlines</a>
                        <i className="fa-solid fa-chevron-down" id="popularArilines"></i>
                        <ul className="dropMenu" id="airlinesDropdown">
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/delta-airlines">
                              Delta Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/united-airlines">
                              United Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/alaska-airlines">
                              Alaska Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/jetblue-airlines">
                              JetBlue Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/southwest-airlines">
                              Southwest Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/westjet-airlines">
                              WestJet Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/aeromexico-airlines">
                              Aeromexico Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/copa-airlines">
                              Copa Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/virgin-atlantic">
                              Virgin Atlantic
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/iberia-airlines">
                              Iberia Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/royal-jordanian-airlines">
                              Royal Jordan
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/british-airways">
                              British Airways
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/ryan-air">
                              Ryan Air
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/air-france">
                              Air France
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/klm-airlines">
                              KLM Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/singapore-airlines">
                              Singapore Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/lot-polish-airlines">
                              LOT Polish Airlines
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="flex space-bw pos-relate align-center">
                        <a href="">Name Change</a>
                        <i className="fa-solid fa-chevron-down drop-menu" id="nameChange"></i>
                        <ul className="dropMenu" id="nameChangeDropdown">
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/united-airlines-name-change">
                              United Airlines
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/delta-airlines-name-change">
                              Delta Airlines
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="flex space-bw pos-relate align-center">
                        <a href="">Top Destinations</a>
                        <i className="fa-solid fa-chevron-down" id="topDestinations"></i>
                        <ul className="dropMenu" id="destinationsDropdown">
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/las-vegas">
                              Las Vegas
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/cancun">
                              Cancun
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/goa">
                              Goa
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/chicago">
                              Chicago
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/miami">
                              Miami
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/bangkok">
                              Bangkok
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/europe">
                              Europe
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/london">
                              London
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/new-york">
                              New York
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/paris">
                              Paris
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => $('.side-menu').hide()} to="/toronto">
                              Toronto
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link onClick={() => $('.side-menu').hide()} to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link onClick={() => $('.side-menu').hide()} to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div> */}
            {/* <CountrySelector /> */}
          </div>
        </nav >
      </div >
    </header >
  );
};

export default Header;

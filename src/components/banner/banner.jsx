import React from "react";
import { Carousel } from "react-bootstrap";

import BannerImg10 from "../../assets/images/banner/banner10.jpg";
import BannerImg8 from "../../assets/images/banner/banner8.jpg";

import BannerImg17 from "../../assets/images/banner/banner17.jpg";

import "../banner/banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={BannerImg8} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  <span className="text-warning font-Montserrat ">
                    DECEMBER HOLIDAY DEALS
                  </span>{" "}
                  <span className="span2 h3 mb-4 sub-heading">
                    BE EXCITED, DECEMBER PACKAGES ARE BACK. BOOK YOUR TRIP TODAY
                    TO SAVE MORE{" "}
                  </span>
                </h5>
                <NavLink to="/booking" className="bannerBtn mb-12">
                  Book Now
                </NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={BannerImg10}
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  <span className="text-warning font-Montserrat ">
                    EXPLORE PARADISE IN THE PARIS
                  </span>{" "}
                  <span className="span2 h3 mb-4 sub-heading">
                    TOUR THE WORLD WITH KAYZOE SPECIAL PACKAGES
                  </span>
                </h5>
                <NavLink to="/booking" className="bannerBtn mb-12">
                  Book Now
                </NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={BannerImg17}
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  <span className="text-warning font-Montserrat ">
                    YOUR DREAM TRIP STARTS HERE
                  </span>{" "}
                  <span className="span2 h3 mb-4 sub-heading">
                    EXPLORE THE WORLD WITH KAYZOE TOURS SPECIAL PACKAGES
                  </span>
                </h5>
                <NavLink to="/booking" className="bannerBtn ">
                  Book Now
                </NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;

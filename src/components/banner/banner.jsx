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
          {/*** FIXING STARTS */}

          <Carousel.Item>
            <img src={BannerImg8} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">Ready for a new adventure</h5>
                <p className="sub_text mb-4">
                  Whether you're dreaming of relaxing on white sandy beaches,
                  exploring historic cities, or trekking through mountain
                  trails, Kayzoe Tours has the perfect tour package for you!
                </p>
                <NavLink to="/booking" className="bannerBtn">
                  Get A Quote
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
                <h5 className="heading">Leave the details to us</h5>
                <p className="sub_text mb-4">
                  From flights to accommodations and activities, we've got it
                  covered! you won’t find anywhere else
                </p>
                <NavLink to="/booking" className="bannerBtn">
                  Get A Quote
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
                <h5 className="heading">Luxury resorts, clear blue waters</h5>
                <p className="sub_text mb-4">
                  Iconic sights, romantic streets, and cultural treasures.
                  Rainforests, waterfalls, and thrilling zip-lining — for the
                  adventure seekers!
                </p>
                <NavLink to="/booking" className="bannerBtn">
                  Get A Quote
                </NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/** FIXING ENDS */}
        </Carousel>
      </section>
    </>
  );
};

export default Banner;

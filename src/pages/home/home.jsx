import React from "react";
import Banner from "../../components/banner/banner";
import DestinationSearch from "../../components/search/search";
import Features from "../../components/features/features";
import { Col, Container, Row } from "react-bootstrap";

import Cards from "../../components/Cards/Card";
import PopularCard from "../../components/Cards/PopularCard";
import Gallery from "../../components/gallery/Gallery";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../home/home.css";

import { destinationsData, popularsData } from "../../utils/data";

const HomePage = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <div>
      <Banner />
      <DestinationSearch />
      <Features />

      {/* tour seciton start */}

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1 className="destination">
                  {" "}
                  Peak Destination For Your Next Holiday{" "}
                </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return <Cards destination={destination} key={inx} />;
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/** Tour search section ends */}

      {/** Popular tour */}

      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1 className="destination"> Feature Activities </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {popularsData.map((val, inx) => {
              return (
                <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                  <PopularCard val={val} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/** Call us start */}
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
                Kayzoe Tours can give you and your family unforgettable travel
                experience that you cannot get anywhere. Ready for it ? Contact
                us today.
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a href="/contact-us" className="secondary_btn bounce" rel="no">
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      {/**Gallery start */}
      <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

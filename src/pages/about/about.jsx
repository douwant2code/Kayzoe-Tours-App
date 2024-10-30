import React, { useEffect } from "react";

import "../about/about.css";
import BreadCrumbs from "../../components/breadcrumbs/breadcrumb";
import { Card, Col, Container, Row } from "react-bootstrap";
import AboutImage from "../../assets/images/banner/banner20.jpg";
import Icons1 from "../../assets/images/icons/destination.png";
import Icons2 from "../../assets/images/icons/best-price.png";
import Icons3 from "../../assets/images/icons/quick.png";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About us";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <BreadCrumbs title="About us" pagename="About us" />
      <section className="py-5">
        <Container>
          <Row>
            <Col md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img
                    src={AboutImage}
                    alt="about "
                    className="img-fluid rounded-5"
                  />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h3 className="h2 fw-bold text-white">
                      WE HAVE THE BEST PACKAGES THAT SUIT YOUR NEED
                    </h3>
                  </div>
                </div>
              </div>
              <h2 className="h2 font-bold pt-4 pb-2">
                WE HAVE THE BEST PACKAGES THAT SUIT YOUR NEED
              </h2>
              <div className="gy-3">
                <p className=" mb-3 font-bold h3 text-success">
                  About Kayzoe Tours
                </p>
                <p className="body-text mb-3">
                  Kayzoe Tours redefines travel with an unmatched dedication to
                  quality, adventure, and discovery. Known for its exceptional
                  service and attention to detail, Kayzoe Tours creates journeys
                  that are as unique as each traveler. From exotic destinations
                  to local hidden treasures, Kayzoe Tours ensures every trip is
                  seamless, safe, and infused with authentic experiences. With a
                  team of passionate travel experts, Kayzoe Tours goes the extra
                  mile to turn travel dreams into reality, providing travelers
                  with a journey that’s memorable, inspiring, and completely
                  worry-free. Kayzoe Tours stands out as a premier travel agency
                  dedicated to delivering unforgettable travel experiences that
                  go beyond the ordinary, Kayzoe Tours prides itself on blending
                  adventure, relaxation, and cultural immersion, making every
                  journey a truly enriching experience, Discover the world with
                  Kayzoe Tours—where every moment is crafted to perfection.With
                  Kayzoe Tours, travelers don’t just see the world—they connect
                  with it, creating memories that last a lifetime. Kayzoe Tours
                  has been delivering since 2018, Discover, Dream, Depart.
                </p>
              </div>
            </Col>
            <Col md="4">
              <Card className="border-0 shadow-lg rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={Icons1} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    80 Plus Destinations To Tour{" "}
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Kayzoe tour have over 80 destinations to explore this
                    festive season
                  </p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-lg rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={Icons2} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    Best Price Guaranteed When Booking With Us
                  </Card.Title>
                  <p className="mb-2 body-text">
                    We guarantee that booking through Kayzoe Tour will be
                    cheaper than booking directly with other travel agency.
                  </p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-lg rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={Icons3} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    Quick & Easy To Book With Us
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Take advantage of Kayzoe Tour flexible online platform to
                    book your vacation today.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;

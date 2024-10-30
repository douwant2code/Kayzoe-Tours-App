import React, { useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";
import "../tours/tour.css";
import { tourDetails } from "../../utils/data";
import { NavLink } from "react-router-dom";
import ImageGallery from "react-image-gallery";

// https://github.com/webcrafters2024/travel-app1/blob/main/src/pages/Tours/tour.css

//149 Pritchard St
//Johannesburg ZA 2001
//booking@dkapskycenter.co.za
//Tel: +27 63 461 9544

import {
  Container,
  Row,
  Nav,
  Col,
  Tab,
  ListGroup,
  Accordion,
  Card,
  Stack,
} from "react-bootstrap";

const TourDetails = () => {
  useEffect(() => {
    document.title = " Tours  Details  ";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Breadcrumbs
        title={tourDetails.title}
        pagename={<NavLink to="/tours">Tours</NavLink>}
        childpagename={tourDetails.title}
      />

      <section className="tour_details py-5">
        <Container>
          <Row>
            <h1 className="fs-2 font-normal mb-4 d-flex justify-content-center">
              {tourDetails.title}{" "}
            </h1>
            <ImageGallery
              items={tourDetails.images}
              showNav={false}
              showBullets={false}
              showPlayButton={false}
            />

            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Row className="py-5">
                <Col md={8} className="mb-3 mb-md-0">
                  <Col md={12}>
                    <Nav
                      variant="pills"
                      className="flex-row nav_bars rounded-2"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="1"> Overview </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Itinerary</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3">
                          {" "}
                          Inclusions & Exclusion{" "}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4">Location </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>

                  <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="1">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                          Overview
                        </h1>
                        <p className="body-text">{tourDetails.des}</p>

                        <h5 className="font-bold mb-2 h5  mt-3">Tour Info</h5>

                        <ListGroup>
                          {tourDetails.tourInfo.map((val, index) => {
                            return (
                              <ListGroup.Item
                                className="border-0 pt-0 body-text"
                                key={index}
                                dangerouslySetInnerHTML={{ __html: val }}
                              ></ListGroup.Item>
                            );
                          })}
                        </ListGroup>

                        <h5 className="font-bold mb-2 h5  mt-3">
                          Tour highlights
                        </h5>

                        {tourDetails.highlights.map((val, index) => {
                          return (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text"
                              key={index}
                            >
                              {val}
                            </ListGroup.Item>
                          );
                        })}
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="2">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                          Itinerary
                        </h1>

                        <Accordion defaultActiveKey="0" className="mt-4">
                          {tourDetails.itinerary.map((val, index) => {
                            return (
                              <Accordion.Item
                                eventKey={index}
                                key={index}
                                className="mb-4"
                              >
                                <Accordion.Header>
                                  <h1
                                    dangerouslySetInnerHTML={{
                                      __html: val.title,
                                    }}
                                  ></h1>
                                </Accordion.Header>
                                <Accordion.Body className="body-text">
                                  {val.des}
                                </Accordion.Body>
                              </Accordion.Item>
                            );
                          })}
                        </Accordion>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="3">
                      <div className="tour_details">
                        <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                          Inclusions & Exclusions
                        </h1>

                        <h5 className="font-bold mb-3 h5  mt-3">Inclusion</h5>

                        {tourDetails.included.map((val, index) => {
                          return (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text d-flex align-items-center"
                              key={index}
                            >
                              <i className="bi bi-check-lg me-2 text-success h4 m-0"></i>{" "}
                              {val}
                            </ListGroup.Item>
                          );
                        })}

                        <h5 className="font-bold mb-3 h5  mt-3">Exclusion</h5>

                        {tourDetails.exclusion.map((val, index) => {
                          return (
                            <ListGroup.Item
                              className="border-0 pt-0 body-text d-flex align-items-center"
                              key={index}
                            >
                              <i className="bi bi-x-lg me-2 text-danger h5 m-0"></i>{" "}
                              {val}
                            </ListGroup.Item>
                          );
                        })}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                      <div className="tour_details">
                        <h1 className="font-bold mb-4 h3 border-bottom pb-2">
                          Location
                        </h1>

                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.7979284976423!2d28.05147287457275!3d-26.105514177137522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95732df3e2b1ed%3A0x8c106cc91ac27a5d!2sGarden%20Court%20Sandton%20City!5e0!3m2!1sen!2sza!4v1729605965575!5m2!1sen!2sza"
                          width="600"
                          height="400px"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          title="location"
                        ></iframe>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>

                <Col md={4}>
                  <aside>
                    <Card className="rounded-3 p-2 shadow-sm mb-4 price-info">
                      <Card.Body>
                        <Stack gap={2} direction="horizontal">
                          <h1 className="font-bold mb-0 h2">
                            R{tourDetails.price}
                          </h1>
                          <span className="fs-4"> /person</span>
                        </Stack>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <ListGroup horizontal>
                            <ListGroup.Item className="border-0 me-2 fw-bold">
                              {tourDetails.rating}
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 me-1 text-warning">
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 me-1 text-warning">
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 me-1 text-warning">
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 me-1 text-warning">
                              <i className="bi bi-star-fill"></i>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0 me-1 text-warning">
                              <i className="bi bi-star-half"></i>
                            </ListGroup.Item>
                          </ListGroup>
                          <h5 className="h6"> ({tourDetails.reviews})</h5>
                        </div>

                        <NavLink
                          to="/booking"
                          className="primaryBtn w-100 d-flex justify-content-center fw-bold"
                        >
                          Book Now
                        </NavLink>
                      </Card.Body>
                    </Card>

                    <Card className="card-info p-2 shadow-sm">
                      <Card.Body className="">
                        <h1 className="font-bold mb-2 h3">Need Help ?</h1>

                        <ListGroup className="">
                          <ListGroup.Item className="border-0 d-flex justify-content-start flex-row flex-wrap">
                            <i className="bi bi-telephone me-1"></i> Call us on:{" "}
                            <h5 className=" px-2"> +27 63 461 9544</h5>
                          </ListGroup.Item>

                          <ListGroup.Item className="d-flex justify-content-start flex-row flex-wrap ">
                            <i className="bi bi-envelope me-1"></i> Email:
                            <h5 className="px-2">
                              booking@dkapskycenter.co.za
                            </h5>
                          </ListGroup.Item>
                          <ListGroup.Item className="d-flex justify-content-start flex-row">
                            <i className="bi bi-alarm me-1"></i> Timing:{" "}
                            <h5 className=" px-2">24hrs</h5>
                          </ListGroup.Item>
                          <ListGroup.Item className="d-flex justify-content-start flex-row">
                            <i className="bi bi-headset me-1"></i>{" "}
                            <h5 className=" px-2"> Let us call you</h5>
                          </ListGroup.Item>
                          <ListGroup.Item className="d-flex justify-content-start flex-row">
                            <i className="bi bi-calendar-check me-1"></i>{" "}
                            <h5 className=" px-2"> Book Appointments</h5>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </aside>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;

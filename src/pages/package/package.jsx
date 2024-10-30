import React, { useEffect } from "react";
import "../package/package.css";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";
import CompanyLogo from "../../assets/images/logo/kayzoe-logo.png";

import PackageImage11 from "../../assets/images/packages/package11.avif";
import PackageImage21 from "../../assets/images/packages/package21.avif";
import PackageImage13 from "../../assets/images/packages/package13.avif";

import PackageImage16 from "../../assets/images/packages/package16.avif";

import PackageImage18 from "../../assets/images/packages/package18.avif";
import PackageImage19 from "../../assets/images/packages/package19.avif";
import PackageImage20 from "../../assets/images/packages/package20.avif";

import { Card, Col, Container, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Packages = () => {
  useEffect(() => {
    document.title = "Packages";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Breadcrumbs title="Packages" pagename="Packages" />
      <section className="booking-section py-5 bg-light ">
        <Container>
          <Row>
            <Col md="9" lg="9">
              <div className="booking-form-warp border rounded-1 bg-light shadow-lg px-4">
                <div className="form-title px-4  py-3">
                  <h4 className="h1 font-bold m-0"> EXCLUSIVE OFFERS</h4>
                  <h5 className="py-4 h6 opacity-50 m-0">
                    Discover our exclusive holiday package deals for a
                    successful vacation
                  </h5>
                </div>

                <div className="row">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage11}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            Novotel Paris Roissy
                          </p>
                          <p className="text-muted package-p">France</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            10, Allee du Verger, Roissy-en-France
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 3
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Fri, 06 Dec - Sun, 22 Dec (16 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage13}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            Sonder Casa Luz
                          </p>
                          <p className="text-muted package-p">Spain</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            Ronda Universitat, 1, Barcelona
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 4
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Sun, 08 Dec - Sat, 21 Dec (13 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage18}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            citizenM Schiphol
                          </p>
                          <p className="text-muted package-p">Netherlands</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            Jan Plezierweg 2, Schiphol
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 3
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Mon, 23 Dec - Tue, 31 Dec (8 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage16}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            Casa Pince
                          </p>
                          <p className="text-muted package-p">Spain</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            Carrer Rauric 10, Barcelona
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 3
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Wed, 20 Nov - Sat, 07 Dec (17 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage19}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            Strand Palace Hotel
                          </p>
                          <p className="text-muted package-p">England</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            372 The Strand, London
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 5
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Sat, 14 Dec - Sun, 29 Dec (15 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage20}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            Hampton Inn Manhattan
                          </p>
                          <p className="text-muted package-p">United State</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            108 W 24th St, New York
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 5
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Fri, 29 Nov - Fri, 06 Dec (07 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage21}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-1 border-bottom mb-2">
                          <p className="card-title font-bold h5 package">
                            Hampton Inn Manhattan
                          </p>
                          <p className="text-muted package-p">United State</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start mb-2">
                          <p>
                            <i class="bi bi-pin-map-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary package-details">
                            108 W 24th St, New York
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start package-details">
                          <p className="text-body-secondary package-details">
                            Rated 5
                          </p>{" "}
                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                            <i className="bi bi-star-fill text-warning font-bold package-details"></i>
                          </p>
                        </div>
                        <p className="package-right">/per traveller</p>

                        <p className="package-right">
                          Wed, 27 Nov - Sat, 07 Dec (10 nights)
                        </p>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md="3" lg="3">
              <div className="col-12 mb-3">
                <Card className="card-info p-0 shadow-lg bg-light">
                  <Card.Header className="package-left-header-card">
                    {" "}
                    <h6 className="font-bold mt-2 package-left-header">
                      Email Support ?
                    </h6>{" "}
                  </Card.Header>
                  <Card.Body className="pb-0 py-4">
                    <img
                      src={CompanyLogo}
                      className="img-fluid img-thumbnail"
                      alt="logo"
                    />
                    <div className="mt-4 mb-3">
                      <p className="card-text d-flex-wrap package-left-header-text">
                        Please tell us how we can help, send your request for
                        support to{" "}
                        <span className="text-primary fw-2 package-left-header-text package-left-header-text-email">
                          help@kayzoetours.co.za
                        </span>{" "}
                        and be sure to include your full names and contact
                        information. Email request are typically answered within
                        24 business hours
                      </p>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex "></Card.Footer>
                </Card>
              </div>

              <div className="col-12">
                <Card className="card-info p-0 shadow-lg bg-light">
                  <Card.Header className="package-left-header-card">
                    {" "}
                    <h6 className="font-bold mt-2 package-left-header">
                      Telephone Support ?
                    </h6>{" "}
                  </Card.Header>
                  <Card.Body className="pb-0 py-4">
                    <img
                      src={CompanyLogo}
                      className="img-fluid img-thumbnail"
                      alt="logo"
                    />
                    <div className="mt-4 mb-3">
                      <p className="card-text d-flex-wrap package-left-header-text">
                        Please have your booking / quote number and all relevant
                        information pertaining to your problem ready when
                        calling. All support services are available to assist
                        you via phone at{" "}
                        <span className="text-primary fw-2 package-left-header-text-phone">
                          078 338 4409
                        </span>{" "}
                      </p>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between py-4"></Card.Footer>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Packages;

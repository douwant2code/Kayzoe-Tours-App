import React, { useState, useEffect } from "react";

import CompanyLogo from "../../assets/images/logo/kayzoe-logo.png";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";
import { Col, Container, Row, Card } from "react-bootstrap";

import "../booking/booking.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Booking = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [options, setOptions] = useState();
  const [comments, setComments] = useState("");
  const [noOfTravellers, setNoOfTravellers] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  useEffect(() => {
    document.title = "get quote ";
    window.scroll(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateId = "template_rtqb8dt";
    const serviceId = "service_1eh2upg";
    const publicKey = "HoAb2zhO-R8Y98_Oi";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: firstName + " " + lastName,
        from_email: email,
        to: "Dkaplan Sky Center",
        message: "Thank you for contacting Dkaplan Sky Center today. ",
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      toast.success("New quoted submitted!", res);
      setFirstName("");
      setLastName("");
      setCheckIn(new Date());
      setCheckOut(new Date());
      setEmail("");
      setPhone("");
      setFrom("");
      setTo("");
      setNoOfTravellers("");
      setOptions("");
      setComments("");
    } catch (error) {
      toast.error("Opps submission failed!", error);
      console.log(error);
    }
  };

  return (
    <>
      <Breadcrumbs title="Booking" pagename="Booking" />
      <section className="booking-section py-5 ">
        <Container>
          <Row>
            <Col md="9" lg="9">
              <div className="booking-form-warp border rounded-1 bg-white shadow-lg">
                <div className="form-title px-4  py-3">
                  <h4 className="h1 font-bold m-0 booking-header-title">
                    {" "}
                    Get a Quote
                  </h4>
                  <h5 className="py-4 h6 opacity-50 m-0">
                    Fill out the form to get a quote for your desire holiday
                    destination. All fields marked with an asterisk (*) are
                    required.
                  </h5>
                </div>

                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6 px-4 gy-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                      {""}
                      <span className="text-danger font-bold">(*)</span>
                    </label>
                    <input
                      className="form-control fs-"
                      required
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 px-4">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>

                    {""}
                    <span className="text-danger font-bold">(*)</span>
                    <input
                      className="form-control"
                      required
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="email" className="form-label">
                      Email Address
                      {""}
                      <span className="text-danger font-bold">(*)</span>
                    </label>
                    <input
                      className="form-control"
                      required
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                      {""}
                      <span className="text-danger font-bold">(*)</span>
                    </label>
                    <input
                      className="form-control"
                      required
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="from" className="form-label">
                      From
                    </label>
                    {""}
                    <span className="text-danger font-bold">(*)</span>
                    <input
                      className="form-control"
                      required
                      id="from"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="to" className="form-label">
                      To
                    </label>
                    {""}
                    <span className="text-danger font-bold">(*)</span>
                    <input
                      className="form-control"
                      required
                      id="to"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="checkIn" className="form-label">
                      Check In
                    </label>
                    {""}
                    <span className="text-danger font-bold">(*)</span>

                    <input
                      type="date"
                      required
                      id="checkIn"
                      className="form-control w-100"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="checkOut" className="form-label">
                      Check Out
                    </label>
                    {""}
                    <span className="text-danger font-bold">(*)</span>

                    <input
                      type="date"
                      id="checkOut"
                      required
                      className="form-control w-100"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="noOfTravellers" className="form-label">
                      No of Travellers
                    </label>
                    {""}
                    <span className="text-danger font-bold">(*)</span>
                    <input
                      className="form-control"
                      required
                      id="noOfTravellers"
                      type="number"
                      value={noOfTravellers}
                      onChange={(e) => setNoOfTravellers(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 px-4">
                    <label htmlFor="options" className="form-label">
                      Options
                    </label>
                    {""}

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="Standard"
                        name="option"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="Standard">
                        Standard
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="VIP"
                        name="option"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="VIP">
                        VIP
                      </label>
                    </div>
                  </div>

                  <div className="col-md-12 px-4">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="comment"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                      ></textarea>
                      <label htmlFor="comment">Comments</label>
                    </div>
                  </div>

                  <div className="col-12 mb-4 px-4">
                    <button type="submit" className="primaryBtn">
                      Get Quote
                    </button>
                    <ToastContainer />
                  </div>
                </form>
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

export default Booking;

import React, { useEffect, useState } from "react";
import "../contact/contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BreadCrumbs from "../../components/breadcrumbs/breadcrumb";
import { Card, Col, Container, Row } from "react-bootstrap";

import ContactImage1 from "../../assets/images/banner/banner5.jpg";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [fullNames, setFullNames] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    document.title = "Contact us ";
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
        from_name: fullNames,
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
      toast.success("Message sent", res);

      setFullNames("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Opps submission failed!", error);
      console.log(error);
    }
  };

  return (
    <>
      <BreadCrumbs title="Contact us" pagename="Contact us" />
      <section className="contact pt-5">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-2 h1 font-bold">
                Have questions? Shoot us an Email
              </h1>
              <p className="body-text mt-1">
                Have a question or feedback? Please fill out the form to reach
                us.
              </p>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow-lg rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="bg-succes rounded-circle text-success shadow-sm bg-opacity-10 p-3 mb-2">
                      <i className="bi bi-earbuds"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Call Us</Card.Title>
                  <p className="mb-3 body-text">
                    Kayzoe Tour help desks are available 24hrs a day to assist
                    you with your vacation plan
                  </p>
                  <div className="d-block justify-content-between">
                    <button type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-phone me-1"></i>
                      078 338 4409
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow-lg rounded-3 mb-4 ">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="bg-danger rounded-circle text-danger shadow-sm bg-opacity-10 p-3 mb-2">
                      <i className="bi bi-envelope h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Email Us</Card.Title>
                  <p className="mb-3 body-text">
                    Please tell us how we can help, send your request for
                    support to{" "}
                  </p>
                  <div className="d-block justify-content-between">
                    <button type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-envelope me-2"></i>
                      help@kayzoetours.co.za
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow-lg rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="bg-warning rounded-circle text-warning shadow-sm bg-opacity-10 p-3 mb-2">
                      <i className="bi bi-globe h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Social Media</Card.Title>
                  <p className="mb-3 body-text">
                    Follow Kayzoe Tours on facebook
                  </p>
                  <NavLink
                    className="d-block justify-content-between"
                    to="https://www.facebook.com/kayzoetours/"
                  >
                    <button type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-facebook me-2 "></i>
                    </button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="py-5 align-items-center">
            <Col xl="6" md="6" className="d-none d-md-block">
              <img
                src={ContactImage1}
                alt="contact"
                className="img-fluid me-3"
              />
            </Col>

            <Col xl="6" md="6" className="contact-section py-5">
              <Card className="bg-light p-4 border-0 shadow-lg">
                <div className="form-box">
                  <h1 className="h3 mb-4">Contact us today</h1>
                  <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6 px-4 gy-3">
                      <label htmlFor="fullNames" className="form-label">
                        Full Names
                        {""}
                      </label>
                      <input
                        className="form-control fs-"
                        id="fullNames"
                        required
                        value={fullNames}
                        onChange={(e) => setFullNames(e.target.value)}
                      />
                    </div>

                    <div className="col-md-6 px-4">
                      <label htmlFor="email" className="form-label">
                        Email address
                        {""}
                      </label>
                      <input
                        className="form-control fs-"
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="col-md-12 px-4">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                        {""}
                      </label>
                      <input
                        className="form-control fs-"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="col-md-12 px-4">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          required
                          placeholder="Leave a message"
                          style={{ height: "100px" }}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>

                    <div className="col-12 mb-4 px-4">
                      <button type="submit" className="primaryBtn">
                        Send message
                      </button>
                      <ToastContainer />
                    </div>
                  </form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;

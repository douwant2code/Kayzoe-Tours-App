import React, { useEffect } from "react";
import "../terms/terms.css";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";

import { Col, Container, Row } from "react-bootstrap";

const TermsCondition = () => {
  useEffect(() => {
    document.title = "Terms and Condition ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Terms and Condition" pagename="Terms and Condition" />

      <section className="booking-section py-5 bg-light ">
        <Container>
          <Row>
            <Col md="12" lg="12">
              <div className="booking-form-warp border rounded-1 bg-light shadow-lg px-4">
                <div className="form-title px-4  py-3">
                  <h4 className="h3 font-bold m-0 text-center mt-3 cancellation">
                    {" "}
                    Kayzoe Tours, Terms and Condition
                  </h4>
                </div>

                <div className="row">
                  <div className="col-sm-12 mb-3 m-0">
                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Terms and Conditions
                      </h5>
                      <p className="mx-auto mb-2">
                        Welcome to Kayzoe Tours! By booking a tour with us, you
                        (the “Traveler”) agree to be bound by the following
                        Terms and Conditions. These terms apply to all tours,
                        products, and services provided by Kayzoe Tours (“we,”
                        “us,” or “the Company”) and outline our commitment to
                        delivering a seamless and unforgettable travel
                        experience.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        1. Booking Process and Payments
                      </h5>
                      <p className="mx-auto mb-2">
                        Booking Confirmation: A reservation is considered
                        confirmed only upon receipt of a completed booking form
                        and the required deposit. Deposit: A deposit of is
                        required at the time of booking. This deposit secures
                        your spot and covers initial planning costs. Final
                        Payment: The remaining balance is due 72 hours before
                        the departure date. If payment is not completed by this
                        deadline, the Company reserves the right to cancel the
                        booking without a refund of any payments made. Payment
                        Methods: We accept payments via [credit card, bank
                        transfer, PayPal, etc.]. All fees associated with the
                        payment method are the responsibility of the Traveler.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Cancellations, Refunds, and Modifications
                      </h5>
                      <p className="mx-auto mb-2">
                        Traveler Cancellations: In the event you need to cancel
                        your booking, the following applies: Please click
                        cancellation policy link
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Traveler Responsibilities
                      </h5>
                      <p className="mx-auto mb-2">
                        Travel Documents: Travelers must possess a valid
                        passport (valid for at least 6 months from the travel
                        date), necessary visas, and any other required
                        documentation. The Company is not liable for delays or
                        cancellations due to issues with travel documentation.
                        Travel Insurance: Comprehensive travel insurance is
                        mandatory, covering trip cancellations, health,
                        accidents, loss or theft, and other unforeseen
                        situations. Proof of coverage may be required. Health
                        and Fitness: Certain tours may require a specific level
                        of physical fitness. Travelers are responsible for
                        consulting a medical professional to assess their
                        fitness for the chosen tour.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Itinerary Adjustments and Changes
                      </h5>
                      <p className="mx-auto mb-2">
                        Flexibility of Itinerary: While we strive to follow the
                        planned itinerary, certain circumstances, such as
                        weather, transportation delays, or local conditions, may
                        necessitate modifications. Kayzoe Tours reserves the
                        right to make reasonable changes to the itinerary when
                        required to enhance Traveler safety or experience.
                        Optional Excursions: Additional excursions may be
                        offered but are not included in the base package.
                        Participation is optional, and fees apply.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Liability and Assumption of Risk
                      </h5>
                      <p className="mx-auto mb-2">
                        Risk Acknowledgment: By participating in our tours, you
                        understand and accept that travel involves risks that
                        may include, but are not limited to, personal injury,
                        delays, or natural events. Waiver of Liability: Kayzoe
                        Tours is not liable for any personal injury, property
                        damage, or financial losses resulting from activities,
                        third-party services, or events beyond our control. You
                        participate in the tour at your own risk and
                        responsibility. Third-Party Suppliers: We work with
                        reputable third-party vendors for transportation,
                        accommodations, and activities. While we strive to
                        partner with reliable providers, Kayzoe Tours is not
                        responsible for the performance of these third parties.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Privacy and Data Protection
                      </h5>
                      <p className="mx-auto mb-2">
                        Data Collection and Use: We collect personal information
                        solely for the purpose of delivering services, ensuring
                        a smooth travel experience, and maintaining safety.
                        Personal data is handled in accordance with applicable
                        privacy laws and our Privacy Policy. Communications: By
                        booking a tour with us, you consent to receive
                        communications related to your booking, including
                        pre-trip information, travel tips, and post-trip
                        feedback requests.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Intellectual Property and Content Use
                      </h5>
                      <p className="mx-auto mb-2">
                        Photographs and Content: Kayzoe Tours reserves the right
                        to use photographs, videos, and written testimonials
                        from tours for promotional purposes. If you prefer that
                        your image or comments are not used, please notify us in
                        writing prior to the start of the tour. Copyright: All
                        content provided by Kayzoe Tours, including itineraries,
                        brochures, and materials, is protected by copyright and
                        may not be copied or reproduced without permission.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Governing Law and Dispute Resolution
                      </h5>
                      <p className="mx-auto mb-2">
                        Governing Law: These Terms and Conditions are governed
                        by and construed in accordance with the laws of South
                        Africa. All disputes shall be resolved in the
                        jurisdiction of South Africa. Dispute Resolution: In the
                        event of any dispute, both parties agree to attempt
                        resolution through mediation prior to any formal legal
                        proceedings. Contact Information If you have questions,
                        concerns, or require further assistance, please feel
                        free to contact us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TermsCondition;

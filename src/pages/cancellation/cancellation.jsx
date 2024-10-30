import React, { useEffect } from "react";
import "../cancellation/cancellation.css";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";

import { Col, Container, Row } from "react-bootstrap";

const Cancellation = () => {
  useEffect(() => {
    document.title = "Cancellation ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Cancellation" pagename="Cancellation" />

      <section className="booking-section py-5 bg-light ">
        <Container>
          <Row>
            <Col md="12" lg="12">
              <div className="booking-form-warp border rounded-1 bg-light shadow-lg px-4">
                <div className="form-title px-4  py-3">
                  <h4 className="h3 font-bold m-0 text-center mt-3 cancellation">
                    {" "}
                    Kayzoe Tours, Cancellation
                  </h4>
                </div>

                <div className="row">
                  <div className="col-sm-12 mb-3 m-0">
                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Cancellation Policy
                      </h5>
                      <p className="mx-auto mb-2">
                        1.Traveler-Initiated Cancellations We understand that
                        plans can change unexpectedly. The following
                        cancellation fees and refund eligibility apply based on
                        the time of cancellation prior to the tour’s departure
                        date. 14 Days or Less Before Departure: No refund will
                        be issued, and 100% of the tour cost is non-refundable
                        15-60 Days Before Departure: Cancellation incurs a fee
                        of 20%, with a partial refund of the remaining balance.
                      </p>

                      <p className="mx-auto mb-2">
                        Non-Refundable Deposits: Please note that deposits paid
                        at the time of booking are non-refundable, except in
                        cases where Kayzoe Tours cancels the tour.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Company-Initiated Cancellations
                      </h5>
                      <p className="mx-auto mb-2">
                        In the rare event that Kayzoe Tours needs to cancel a
                        tour due to unforeseen circumstances (e.g., natural
                        disasters, safety concerns, or low enrollment), you will
                        be offered the following options: Full Refund: A full
                        refund of all amounts paid, including the deposit. Tour
                        Rescheduling or Credit: You may transfer your booking to
                        a future date or choose an alternative tour with no
                        additional fees. Note: Kayzoe Tours is not liable for
                        additional costs incurred by travelers, such as flights,
                        visas, or accommodation bookings outside the tour
                        package.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Refund Processing
                      </h5>
                      <p className="mx-auto mb-2">
                        Refunds are processed within 7 days of receiving the
                        cancellation request. Payment method fees and
                        international transaction fees are non-refundable, and
                        refunds are issued in the original form of payment.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Special Circumstances and Travel Insurance
                      </h5>
                      <p className="mx-auto mb-2">
                        Travel Insurance: We highly recommend travel insurance
                        that includes trip cancellation coverage to protect your
                        investment. Kayzoe Tours is not responsible for
                        non-refundable costs due to last-minute cancellations.
                        Exceptions: In exceptional circumstances, such as
                        medical emergencies or family bereavement, please
                        contact us directly. We will make every effort to
                        accommodate reasonable requests, but refunds or credits
                        are not guaranteed.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        How to Cancel
                      </h5>
                      <p className="mx-auto mb-2">
                        To initiate a cancellation, please contact our Customer
                        Service team as soon as possible at
                        cancellation@kayzoetours.co.za We encourage prompt
                        notification to maximize refund eligibility. Your
                        satisfaction and peace of mind are our priority, and we
                        will work to resolve any concerns swiftly and
                        professionally.
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

export default Cancellation;

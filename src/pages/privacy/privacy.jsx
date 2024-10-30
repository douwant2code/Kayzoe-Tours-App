import React, { useEffect } from "react";
import "../privacy/privacy.css";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";

import { Col, Container, Row } from "react-bootstrap";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Privacy Policy" pagename="Privacy Policy" />

      <section className="booking-section py-5 bg-light ">
        <Container>
          <Row>
            <Col md="12" lg="12">
              <div className="booking-form-warp border rounded-1 bg-light shadow-lg px-4">
                <div className="form-title px-4  py-3">
                  <h4 className="h3 font-bold m-0 text-center mt-3 cancellation">
                    {" "}
                    Kayzoe Tours, Privacy Policy
                  </h4>
                </div>

                <div className="row">
                  <div className="col-sm-12 mb-3 m-0">
                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Privacy Policy
                      </h5>
                      <p className="mx-auto mb-2">
                        Kayzoe Tours (“we,” “our,” or “the Company”) is
                        committed to protecting the privacy and security of the
                        personal information our customers (“you” or
                        “Travelers”) provide to us. This Privacy Policy explains
                        how we collect, use, and protect your data. By using our
                        services, you agree to this Privacy Policy.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        1. Information We Collect
                      </h5>
                      <p className="mx-auto mb-2">
                        Personal Information: This includes details necessary
                        for booking and customizing your travel experience, such
                        as: Name, email address, phone number. Passport
                        information, visa status, and nationality.Payment
                        details (credit card information is securely processed
                        via third-party providers and not stored by us).
                        Health-related information, such as dietary preferences
                        or medical conditions, if provided voluntarily for
                        special accommodations.Automatically Collected Data:
                        When you visit our website, certain data may be
                        collected automatically, including: IP address, browser
                        type, and device information.Cookies and tracking
                        technologies to enhance website functionality and
                        personalize your experience.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        How We Use Your Information
                      </h5>
                      <p className="mx-auto mb-2">
                        Service Delivery: We use your information to book travel
                        arrangements, communicate tour details, provide
                        personalized experiences, and handle customer service
                        inquiries. Payment Processing: Payment information is
                        used only to process bookings and related transactions
                        securely.Customer Communications: We may use your
                        contact information to provide updates, confirmations,
                        and information relevant to your trip.Marketing: With
                        your consent, we may send you promotional materials,
                        offers, and travel tips. You can opt out at any time by
                        using the unsubscribe link in our emails.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Data Sharing and Disclosure
                      </h5>
                      <p className="mx-auto mb-2">
                        Third-Party Service Providers: We work with trusted
                        third-party partners to provide services, such as
                        accommodation providers, airlines, and payment
                        processors. These partners only receive information
                        necessary to fulfill their service roles and are
                        required to protect your information. Legal Compliance:
                        We may disclose your information if required by law or
                        if necessary to protect our rights, safety, or property,
                        or that of others.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Security of Your Information
                      </h5>
                      <p className="mx-auto mb-2">
                        Data Protection: We use administrative, technical, and
                        physical safeguards to protect your data against
                        unauthorized access, loss, misuse, and alteration.
                        Secure Payment Processing: Payment transactions are
                        encrypted and processed through trusted, PCI-compliant
                        third-party payment providers. We do not store credit
                        card information on our servers. Retention: We retain
                        personal information only as long as needed to fulfill
                        the purposes described in this Privacy Policy or as
                        required by law.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Your Privacy Rights
                      </h5>
                      <p className="mx-auto mb-2">
                        Access and Correction: You have the right to request
                        access to, correction of, or deletion of your personal
                        information. Please contact us at
                        support@kayzoetours.co.za to make such requests.
                        Marketing Preferences: You can opt out of marketing
                        emails at any time by clicking the “unsubscribe” link
                        included in each email. Data Portability: Where
                        applicable by law, you may request a copy of your
                        personal information in a structured, machine-readable
                        format.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Cookies and Tracking Technologies
                      </h5>
                      <p className="mx-auto mb-2">
                        Cookies: Our website uses cookies to improve your
                        experience, remember your preferences, and analyze
                        website usage. You may adjust your browser settings to
                        refuse cookies; however, doing so may limit some
                        functionalities. Analytics: We may use third-party
                        analytics tools, such as Google Analytics, to better
                        understand website usage and optimize our online
                        presence. These tools collect anonymous information and
                        do not identify individual users.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        International Data Transfers
                      </h5>
                      <p className="mx-auto mb-2">
                        Data Processing Location: Your information may be
                        transferred to and processed in countries outside your
                        own. We ensure that any such transfers comply with
                        applicable data protection laws and safeguard your data.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Children’s Privacy
                      </h5>
                      <p className="mx-auto mb-2">
                        Kayzoe Tours does not knowingly collect personal
                        information from children under the age of 16 without
                        parental consent. If you believe we have collected
                        information from a child, please contact us to have it
                        removed.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Changes to This Privacy Policy
                      </h5>
                      <p className="mx-auto mb-2">
                        We may update this Privacy Policy from time to time to
                        reflect changes in our practices or legal requirements.
                        We will notify you of any significant updates.
                      </p>
                    </div>

                    <div className="">
                      <h5 className="font-bold h5 m-0 py-2 cancellation">
                        Contact Us
                      </h5>
                      <p className="mx-auto mb-2">
                        If you have questions, concerns, or requests related to
                        this Privacy Policy or how we handle your information,
                        please reach out to us:
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

export default PrivacyPolicy;

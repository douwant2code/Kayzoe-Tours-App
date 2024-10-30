import React, { useEffect } from "react";

import "../destinations/destination.css";
import BreadCrumbs from "../../components/breadcrumbs/breadcrumb";
import { destinationsData } from "../../utils/data";

import { Col, Container, Row } from "react-bootstrap";

import Cards from "../../components/Cards/Card";

const DestinationPage = () => {
  useEffect(() => {
    document.title = "Destinations";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <BreadCrumbs title="Destinations" pagename="Destinations" />

      <section className="py-5">
        <Container>
          <Row>
            {destinationsData.map((destination, inx) => {
              return (
                <Col md="3" sm="6" key={inx} className="pb-4">
                  <Cards destination={destination} key={inx} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DestinationPage;

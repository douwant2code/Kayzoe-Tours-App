import React, { useEffect } from "react";
import "../photoGallery/photoGallery.css";
import { Col, Container, Row } from "react-bootstrap";
import Gallery from "../../components/gallery/Gallery";

import BreadCrumbs from "../../components/breadcrumbs/breadcrumb";

const PhotoGalleries = () => {
  useEffect(() => {
    document.title = "Photo Galleries";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <BreadCrumbs title="Galleries" pagename="Galleries" />

      <section className="py-5" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col>
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PhotoGalleries;

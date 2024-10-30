import React from "react";
import { Accordion, Form } from "react-bootstrap";
import "../tours/tour.css";
import { location, Categories, Duration, Ratings } from "../../utils/data";

const Filters = () => {
  return (
    <div className="side_bar">
      <div className="filter_box shadow-sm rounded-2">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Location </Accordion.Header>
            <Accordion.Body>
              {location.map((location, index) => {
                return (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={location}
                    label={location}
                    value={location}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Categories </Accordion.Header>
            <Accordion.Body>
              {Categories.map((category, index) => {
                return (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={category}
                    label={category}
                    value={category}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Duration </Accordion.Header>
            <Accordion.Body>
              {Duration.map((duration, index) => {
                return (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={duration}
                    label={duration}
                    value={duration}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Rating </Accordion.Header>
            <Accordion.Body>
              {Ratings.map((rating, index) => {
                return (
                  <Form.Check
                    key={index}
                    type="checkbox"
                    id={rating}
                    label={rating}
                    value={rating}
                  />
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;

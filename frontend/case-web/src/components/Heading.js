import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";

const Heading = () => {
  return (
    <Alert variant="primary">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>CASE</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex"></Col>
      </Row>
    </Alert>
  );
};

export default Heading;

import React from "react";
import { Col, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const Videos = () => {
  return (
    <Container fluid>
      <Col className="d-flex justify-content-center">
        <ReactPlayer playing={true} playsinline={true} controls={true} />
      </Col>
    </Container>
  );
};

export default Videos;

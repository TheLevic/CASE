import React from "react";
import { Button, Col, Row, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="Input">
      <Row lg={12}>
        <InputGroup>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <FormControl
              value={title}
              type="text"
              placeholder="Title"
              onChange={handleTitle}
            />
            <FormControl
              value={date}
              onChange={handleDate}
              type="date"
              placeholder="Date"
            />
            <FormControl
              value={category}
              onChange={handleCategory}
              type="text"
              placeholder="Category"
            />
            <Button onClick={console.log(category)}>Search</Button>
          </Col>
        </InputGroup>
      </Row>
    </div>
  );
};

export default Input;

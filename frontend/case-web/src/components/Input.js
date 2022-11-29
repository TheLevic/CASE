import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Input = () => {
  return (
    <div className="Input">
      <InputGroup className="mb-3">
        <FormControl type="text" placeholder="Enter a word" />
        <FormControl type="date" placeholder="Filter by date" />
        <FormControl type="text" placeholder="Filter by category" />
        <Button>Submit</Button>
      </InputGroup>
    </div>
  );
};

export default Input;

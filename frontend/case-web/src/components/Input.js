import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
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
      <InputGroup className="mb-3">
        <FormControl
          value={title}
          type="text"
          placeholder="Enter a word"
          onChange={handleTitle}
        />
        <FormControl
          value={date}
          onChange={handleDate}
          type="date"
          placeholder="Filter by date"
        />
        <FormControl
          value={category}
          onChange={handleCategory}
          type="text"
          placeholder="Filter by category"
        />
        <Button onClick={console.log(category)}>Submit</Button>
      </InputGroup>
    </div>
  );
};

export default Input;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="container-fluid">
      <Heading></Heading>
      <Input></Input>
      <Videos></Videos>
    </div>
  );
}

export default App;

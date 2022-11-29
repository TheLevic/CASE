import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import Input from "./components/Input";

function App() {
  return (
    <div className="container-fluid">
      <Heading></Heading>
      <Input></Input>
      {/* Next we need to display each of the videos */}
    </div>
  );
}

export default App;

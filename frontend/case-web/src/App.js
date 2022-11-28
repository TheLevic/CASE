import "./App.css";
import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;

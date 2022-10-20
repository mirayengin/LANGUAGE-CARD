import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import reactlogo from "./assets/react.svg";

import Card from "./components/Card";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="text-center  p-4">
      <Header react={reactlogo} />
      <Card />

    </Container>
  );
};

export default App;

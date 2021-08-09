import Tiempo from "../src/tiempo.js";
import Usuario from "../src/nombre.js";
import Container from "../node_modules/react-bootstrap/Container";
import Row from "../node_modules/react-bootstrap/Row";
import Col from "../node_modules/react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={3}>
          <Tiempo />
          <Usuario />
        </Col>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
        <Col xs={6} md={3}>
          <Usuario />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

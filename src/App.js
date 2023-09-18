import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
  return (
    <Container className="App">
      <Row className="" xs={1}>
        <Col md={2} ><Sidebar /></Col>
        <Col md={8}>2 of 3</Col>
        <Col md={2}>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;

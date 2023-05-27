import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./nav.css";

const Navv = (props) => {
  return (
    <div>
      <Navbar bg="light">
        <Container className="container1">
          <Navbar.Brand href="#home">
            <p className="heading">Imagine Company</p>
          </Navbar.Brand>

          <Nav className="me-auto box">
            <Button variant="info" onClick={props.onClick}>
              View Users
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navv;

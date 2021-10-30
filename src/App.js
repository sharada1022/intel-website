import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import {Form,Row,Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Intel</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Rambo</Nav.Link>
      <Nav.Link href="#pricing">Ops Tools</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">View Data</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Edit Data</Nav.Link>
  </Nav.Item>
</Nav>
 {/* here should be the title */}
 <h1>Hello World!</h1>
<Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
      <Col>
      <Form.Control placeholder="First name" />
      </Col>
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Button variant="primary" type="submit">
    Search
  </Button>
 
</Form>

    </div>
  );      
}

export default App;

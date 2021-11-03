import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import {Form,Row,Col} from 'react-bootstrap'

function App() {
  return (
    <Container>
    <div className="App">
      <Navbar className = "mb-4" collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
  <Navbar.Brand href="#home">Intel</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Rambo</Nav.Link>  
    </Nav>
    <Nav>
    <NavDropdown title="Ops Tools" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Infra Management" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Server Tools" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Docs" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>   
  </Navbar.Collapse>  
  </Container>
</Navbar>
<div>
<Container>
<Row>
 <h1 className = "mb-5">Row/Rack Management</h1>
 </Row>
 </Container>
 </div>
<Nav className = "mb-5" variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">View Data</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Edit Data</Nav.Link>
  </Nav.Item> 
</Nav>
<div className = "mb-0.2">
 <p>All fields optional</p>
 </div>
 <Container>
<Form>
<div> 
  <Row className = "mb-3"> 
    <Col xs={3}>
      <Form.Label>Building</Form.Label>
      <Form.Control  className = "mb-3" placeholder="fm1" />
      <Col>
      <Form.Label>Switch</Form.Label>
      <Form.Control placeholder="fm11d-zas7e" />
      </Col>
    </Col>
    <Col xs={2}>
      <Form.Label>Row</Form.Label>
      <Form.Control className = "mb-3" placeholder="CP" />
      <Form.Label>Rack</Form.Label>
      <Form.Control placeholder="12" />
    </Col>
  </Row>
  <div  className ="d-grid gap-2"> 
  <Button  variant="primary" size="md">
    Search
  </Button>
</div>
  </div> 
</Form>
</Container>
    </div>
    </Container>
  );      
}

export default App;

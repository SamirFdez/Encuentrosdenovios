import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'
import { NavDropdown } from "react-bootstrap";

export const Menu = function() {

    return (   


    // <Navbar bg="dark" variant="dark">

    //     <Container className="sm">
    //     <Link to="/">Plumbing Proyect</Link>
    //     <Nav className={navStyles.navigation}>
    //     <Link variant='dark' className={navStyles.Link} to='/'>Go to the Homepage</Link>
    //     <Link className={navStyles.Link} to='/features'>Go to the features</Link>
    //     <Link className={navStyles.Link} to='/pricing'>Pricing</Link>
    //     </Nav>
    //     </Container>
    // </Navbar>



<Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link className={navStyles.jeje} to="/pricing">jeje</Link></Nav.Link>
        <Nav.Link >Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    
 )
}  
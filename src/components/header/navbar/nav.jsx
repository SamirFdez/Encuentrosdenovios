import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'

export const Navegation = function() {

    return (   

<Navbar bg="dark" expand="md" sticky="top">
  <Container>
    <Navbar.Brand>
      <Link className={navStyles.navBarBrand} to='/'>Plumbing Proyect</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className={navStyles.navigation} id="basic-navbar-nav">

      {/* El nav esta en display: flex por default */}
      <Nav className={navStyles.nav}>
        <Nav.Link>
          <Link className={navStyles.link} to='/'>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.link} to='/Services'>Services</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.link} to='/AboutUS'>About Us</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.link} to='/Contact'>Contact</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

 )
}  
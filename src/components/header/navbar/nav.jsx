import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'
import { CallToAction } from "../callToAction/callToAction";

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
          <Link className={navStyles.link} to='/Navegation1'>Navegation 1</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.link} to='/Navegation2'>Navegation 2</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.link} to='/Navegation3'>Navegation 3</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.link} to='/Navegation4'>Navegation 4</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

 )
}  
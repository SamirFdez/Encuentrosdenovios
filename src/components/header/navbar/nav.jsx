import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'

export const Navegation = function() {

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



<Navbar bg="dark" expand="md">
  <Container>
    <Navbar.Brand>
      <Link className={navStyles.navBarBrand} to='/'>Plumbing Proyect</Link>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link>
          <Link className={navStyles.Link} to='/Navegation1'>Navegation 1</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.Link} to='/Navegation2'>Navegation 2</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.Link} to='/Navegation3'>Navegation 3</Link>
        </Nav.Link>
        <Nav.Link>
          <Link className={navStyles.Link} to='/Navegation4'>Navegation 4</Link>
        </Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    
 )
}  
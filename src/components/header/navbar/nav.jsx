import React from "react";
import { Navbar,Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'
import { CallToAction } from "../callToAction/callToAction";



export const Navigation = function() {

    return (   

     <>

     <Navbar style={{backgroundColor: 'white', display: 'block'}} expand="md" sticky="top">
        <Row style={{marginLeft: '3.5em', marginRight: '3.5em'}}>
          <Container>
            <CallToAction/>
          </Container>
          </Row>

          <Row>
            <Navbar bg="dark" expand="md">
              <Container>
                <Navbar.Brand>
                  <Link className={navStyles.navBarBrand} to='/'>Plumbing Proyect</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={navStyles.navigation} id="basic-navbar-nav">

                  {/* El nav esta en display: flex por default */}
                  <Nav className={navStyles.nav}>           
                      <Link className={navStyles.link} to='/'>Home</Link>
                                 
                      <Link className={navStyles.link} to='/Services'>Services</Link>
                    
                      <Link className={navStyles.link} to='/AboutUs'>About Us</Link>    
                   
                      <Link className={navStyles.link} to='/Contact'>Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Navbar>
    </>


 )
}  
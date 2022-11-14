import React from "react";
import { Navbar,Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import navStyles from './nav.module.css'
import { CallToAction } from "../callToAction/callToAction";
import { FaHome, FaRegAddressCard, FaChurch, FaPhone, FaRegLaughBeam} from "react-icons/fa";


export const Header = function() {

    return (    

     <>
     <Navbar style={{backgroundColor: 'white', display: 'block', padding: '0'}} expand="lg" sticky="top">
        <Row style={{marginLeft: '3.5em', marginRight: '3.5em'}}>
          <Container>
            <CallToAction/>
          </Container>
          </Row>

          <Row>
            <Navbar bg="dark" expand="lg">
              <Container>
                <Navbar.Brand>
                  <Link className={navStyles.navBarBrand} to='/'>Encuentro Católico para Novios</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={navStyles.navigation} id="basic-navbar-nav">

                  {/* El nav esta en display: flex por default */}
                  <Nav className={navStyles.nav}>           
                      <Link className={navStyles.link} to='/'>
                      <FaHome className={navStyles.LogoMenu}/>
                        Inicio
                      </Link>

                      <Link className={navStyles.link} to='/Nosotros'>
                      <FaRegAddressCard className={navStyles.LogoMenu}/>             
                          Nosotros
                      </Link>    

                      <Link className={navStyles.link} to='/AboutUs'>
                        <FaChurch className={navStyles.LogoMenu}/>
                          Retiros
                        </Link>
                                 
                      <Link className={navStyles.link} to='/Eventos'>
                      <FaRegLaughBeam className={navStyles.LogoMenu}/>
                        Eventos
                      </Link>
                      
                      <Link className={navStyles.link} to='/Contact'>
                      <FaPhone className={navStyles.LogoMenu}/>             
                        Contacto
                      </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Navbar>
    </>
 )
}  
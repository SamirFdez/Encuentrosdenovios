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
                      <Link className={navStyles.link} to='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" className={navStyles.LogoMenu} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Home
                      </Link>
                                 
                      <Link className={navStyles.link} to='/Services'>
                        <svg xmlns="http://www.w3.org/2000/svg" className={navStyles.LogoMenu} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                        </svg>
                        Services
                      </Link>
                    
                      <Link className={navStyles.link} to='/AboutUs'>
                        <svg xmlns="http://www.w3.org/2000/svg" className={navStyles.LogoMenu} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        About Us
                      </Link>    
                   
                      <Link className={navStyles.link} to='/Contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" className={navStyles.LogoMenu} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Contact
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
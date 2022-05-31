import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export const Menu = function() {
    return (   
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Plumbing Proyect</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
 )
}  
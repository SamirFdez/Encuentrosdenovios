import React from "react";
import { Container, Row, Col, Button, Modal, FloatingLabel, Form} from "react-bootstrap";
import callToActionStyles  from "./callToAction.module.css"
import { useState } from 'react';

export const CallToAction = function() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (   
        <>
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} className= { callToActionStyles.modal }> 
        <Modal.Header closeButton>
          <Modal.Title>Request a Call Back</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control type="text" placeholder="Name"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                <Form.Control type="number" placeholder="phone"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                <Form.Control type="email" placeholder="email"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingSelectGrid" label="Open this select menu">
                <Form.Select aria-label="Floating label select example" className="mb-3">
                    <option>Open this select menu</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control as="textarea" placeholder="Message" style={{ height: '80px' }} />
            </FloatingLabel>
        </Modal.Body>

        <Modal.Footer style={{justifyContent: "center"}}>
          <Button variant="success" size="bg" onClick={handleClose} className= { callToActionStyles.buttonModal }> Submit </Button>
        </Modal.Footer>
        </Modal>

        <Container className= { callToActionStyles.container } >
             <Row>
                <Col>
                    <Button className= { callToActionStyles.button } variant="info" size="lg" onClick={handleShow}>Request a Call Back</Button>
                </Col>

                <Col>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{height:"5.6em", width:"32em", justifySelf: "center"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                </Col>

                <Col>
                    <div className= { callToActionStyles.divtext }>
                        <label className= { callToActionStyles.labelnum }> (000) 000-0000 </label>
                        <label className= { callToActionStyles.labelciudad }> Georgia, GA</label>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
 )

}  
      
 
        

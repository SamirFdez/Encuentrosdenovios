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
                    <h2>Aqui va el logo de la empresa</h2>
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
      
 
        

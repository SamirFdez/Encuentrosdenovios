import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button,} from "react-bootstrap";
import callToActionStyles from "./callToAction.module.css";


//TODO create folders
// TODO change the folder name UpperLabel

export const CallToAction = function() {
    return (   
        <Container className= { callToActionStyles.container } >
            <Row>
                <Col>
                    <Button className= { callToActionStyles.button } variant="info" size="lg">Request a Call Back</Button>{' '}
                </Col>

                <Col>
                    <img src="" alt="" />
                </Col>

                <Col>
                    <div className= { callToActionStyles.divtext }>
                        <label className= { callToActionStyles.labelnum }> (412) 531-0183 </label>
                        <label className= { callToActionStyles.labelciudad }> Georgia, GA</label>
                    </div>
                </Col>
            </Row>
        </Container>
 )
}  

      
 
        

import React from "react";
import { Container, Row, Col, Button,} from "react-bootstrap";
import headerStyles from "./header.module.css";


//TODO create folders
// TODO change the folder name UpperLabel

export const Header = function() {
    return (   
        <Container className= { headerStyles.container } >
            <Row>
                <Col>
                    <Button className= { headerStyles.buttom } variant="info" size="lg">Request a Call Back</Button>{' '}
                </Col>

                <Col>
                    <img src="" alt="" />
                </Col>

                <Col>
                    <div className= { headerStyles.divtext }>
                        <label className= { headerStyles.labelnum }> (412) 531-0183 </label>
                        <label className= { headerStyles.labelciudad }> Georgia, GA</label>
                    </div>
                </Col>
            </Row>
        </Container>
 )
}  

      
 
        

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import { FaMapMarkerAlt, FaRegClock, FaBullhorn, FaInstagram, FaRegEnvelope, FaPhone, FaFacebookSquare } from "react-icons/fa";
import footerStyles from './footer.module.css'


export const Footer = function(){

    return (

        <>
        <div className="container-fluid" style={{backgroundColor: "#D02825", height: "auto"}}>

            <Row className={footerStyles.rowFooter}>
                <Col className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <FaMapMarkerAlt className={footerStyles.iconFooter}/>
                    <h3>VISIT US</h3>
                    <h4>613 Brookline Blvd</h4>
                    <h4>Pittsburgh, PA 15226-2003</h4>
                    <br></br>
                    <a href="https://www.google.com.do/maps/place/18%C2%B029'36.8%22N+69%C2%B051'40.4%22W/@18.4887321,-69.8701285,16.76z/data=!4m6!3m5!1s0x0:0x95b1feaff6e032b2!7e2!8m2!3d18.4935455!4d-69.8612299?hl=en&authuser=0" target="_Blank">Get Directions</a>
                </Col>

                <Col className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <FaRegClock className={footerStyles.iconFooter}/>
                    <h3>HOURS</h3>
                    <Row className="row justify-content-center">
                        <Col className="col-2"><h4>Mon - Fri</h4></Col>
                        <Col className="col-3"><h4>8:00 am - 4:00 pm</h4></Col>
                    </Row>
                    <Row className="row justify-content-center">
                        <Col className="col-2"><h4>Saturday</h4></Col>
                        <Col className="col-3"><h4>8:00 am - 4:00 pm</h4></Col>
                    </Row>
                    <Row className="row justify-content-center">
                        <Col className="col-2"><h4>Monday</h4></Col>
                        <Col className="col-3"><h4>Closed</h4></Col>
                    </Row>
                </Col>
                    
                <Col className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <FaBullhorn className={footerStyles.iconFooter}/>
                    <h3>CONTACT US</h3>
                    
                    <h4><FaFacebookSquare className={footerStyles.iconFooterContactUs}/> (412) 531-0183</h4>
                    <h4><FaInstagram className={footerStyles.iconFooterContactUs}/> (412) 531-0183</h4>
                    <h4><FaPhone className={footerStyles.iconFooterContactUs}/> (412) 531-0183</h4>
                    <h4><FaRegEnvelope className={footerStyles.iconFooterContactUs}/> (412) 531-0183</h4>
                </Col>

            </Row>

            <Row className={footerStyles.rowFootercopy}>
                <label>© 2022 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</label>
            </Row>
        </div>
        </>
    )
}
import { Container, Row, Col } from "react-bootstrap"
import detailViewContactStyles from './detailViewContact.module.css'
import { FaInstagram, FaRegEnvelope, FaPhone, FaFacebookSquare } from "react-icons/fa";


export const DetailViewContact = function() {

    return (
        <>
        <Container style={{marginTop:"2.5em"}}>
                <Row>
                    <p className = {detailViewContactStyles.pTitle}> 
                        Contacta con nosotros
                    <hr></hr>
                    </p>
                </Row>

                <Row >
                    <p className = {detailViewContactStyles.pBody}> 
                    Si tienen alguna duda de qué hacemos, cómo la hacemos y dónde lo hacemos, llenen el formulario y permítanos ser parte de su vida. 
                    Ya sea viviendo la experiencia de fin de semana o integrándose a una comunidad de matrimonios, donde los acompañamos durante sus primeros 5 años de vida marital.   
                    </p>
                </Row>

                <Row>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <p className = {detailViewContactStyles.pBody}> 
                        <FaFacebookSquare className={detailViewContactStyles.icondetailView}/> Facebook
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <p className = {detailViewContactStyles.pBody}> 
                        <FaInstagram className={detailViewContactStyles.icondetailView}/> Instagram
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <p className = {detailViewContactStyles.pBody}> 
                        <FaPhone className={detailViewContactStyles.icondetailView}/> (000) 000-0000
                        </p>
                    </Col>

                    <Col className="col-12 col-sm-12 col-md-12 col-lg-3">
                        <p className = {detailViewContactStyles.pBody}> 
                        <FaRegEnvelope className={detailViewContactStyles.icondetailView}/> correo@example.com
                        </p>
                    </Col>

                </Row>
        </Container>
        </>
    )
}
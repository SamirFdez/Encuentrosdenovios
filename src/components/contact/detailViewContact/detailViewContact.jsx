import { Container, Row } from "react-bootstrap"
import detailViewContactStyles from './detailViewContact.module.css'
// import logoFacebook from './src/img/logoFacebook.png'


export const DetailViewContact = function() {

    return (
        <>
        <Container style={{marginTop:"2.5em"}}>
                <Row>
                    <p className = {detailViewContactStyles.pTitle}> 
                        Contact The Plumbing Proyect
                    </p>
                </Row>

                <Row >
                    <p className = {detailViewContactStyles.pBody}> 
                        When a plumbing disaster strikes, call The Plumbing Proyect to get quality plumbing services.    
                    </p>
                    {/* <img src={logoFacebook} alt="" /> */}
                </Row>
        </Container>
        </>
    )
}
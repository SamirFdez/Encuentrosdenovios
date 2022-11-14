import { Container, Row, Col, Card, Button } from "react-bootstrap"
import detailEventstStyles from './detailEvents.module.css'
import { EventCalendar } from "../eventCalendar/eventCalendar"
// import { FaInstagram, FaRegEnvelope, FaPhone, FaFacebookSquare } from "react-icons/fa";


export const DetailEvent = function() {

    return (
        <>
        <Container style={{marginTop:"2.5em"}}>
            <Row>
                <Col xl={8}>
                    <Row>
                        <p className = {detailEventstStyles.pTitle}> 
                            Eventos
                        <hr></hr>
                        </p>
                    </Row>

                    <Row >
                        <p className = {detailEventstStyles.pBody}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit incidunt impedit, odit iure architecto eaque quaerat praesentium quis eligendi consequuntur 
                        harum nihil ea facilis mollitia, maiores possimus perspiciatis, tempora nam?
                        </p>
                    </Row>

                    <Row className={detailEventstStyles.rowProximosEventos}>
                        <p className = {detailEventstStyles.pTitle}> 
                            Próximos Eventos
                        <hr></hr>
                        </p>
                    </Row>
                </Col>

                <Col xl={4}>
                    <Row className = {detailEventstStyles.rowCalendar}>
                        <EventCalendar/>
                    </Row>
                </Col>
            </Row>

            <Row style={{marginTop:"2em"}}>
                <Card>
                    <Card.Header className= {detailEventstStyles.cardDate}> Fecha del evento </Card.Header>
                    <Card.Body>
                    <Card.Title className= {detailEventstStyles.cardTitle}>Titulo del evento</Card.Title>
                    <Card.Text className= {detailEventstStyles.cardBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis qui. Alias accusantium praesentium ipsum consequuntur saepe distinctio quo, delectus aut repellendus quas consectetur ducimus. Corrupti eos quaerat ea possimus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum labore eius cupiditate reprehenderit hic ullam. Veniam quibusdam nesciunt assumenda qui natus odio rem non illo dignissimos? Sed, quibusdam rerum.
                    </Card.Text>
                    <Button style={{fontSize:"1.5em"}} variant="primary"> Clic aqui para participar</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row style={{ marginTop:"2em"}}>
                <Card>
                    <Card.Header className= {detailEventstStyles.cardDate}> Fecha del evento </Card.Header>
                    <Card.Body>
                    <Card.Title className= {detailEventstStyles.cardTitle}>Titulo del evento</Card.Title>
                    <Card.Text className= {detailEventstStyles.cardBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis qui. Alias accusantium praesentium ipsum consequuntur saepe distinctio quo, delectus aut repellendus quas consectetur ducimus. Corrupti eos quaerat ea possimus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum labore eius cupiditate reprehenderit hic ullam. Veniam quibusdam nesciunt assumenda qui natus odio rem non illo dignissimos? Sed, quibusdam rerum.
                    </Card.Text>
                    <Button style={{fontSize:"1.5em"}} variant="primary"> Clic aqui para participar</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row style={{ marginTop:"2em"}}>
                <Card>
                    <Card.Header className= {detailEventstStyles.cardDate}> Fecha del evento </Card.Header>
                    <Card.Body>
                    <Card.Title className= {detailEventstStyles.cardTitle}>Titulo del evento</Card.Title>
                    <Card.Text className= {detailEventstStyles.cardBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis qui. Alias accusantium praesentium ipsum consequuntur saepe distinctio quo, delectus aut repellendus quas consectetur ducimus. Corrupti eos quaerat ea possimus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum labore eius cupiditate reprehenderit hic ullam. Veniam quibusdam nesciunt assumenda qui natus odio rem non illo dignissimos? Sed, quibusdam rerum.
                    </Card.Text>
                    <Button style={{fontSize:"1.5em"}} variant="primary"> Clic aqui para participar</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        </>
    )
}
import { Container, Row, Card, Button } from "react-bootstrap"
import detailEventstStyles from './detailEvents.module.css'
import { EventCalendar } from "../calendar/eventCalendar"
// import { FaInstagram, FaRegEnvelope, FaPhone, FaFacebookSquare } from "react-icons/fa";


export const DetailEvent = function() {

    return (
        <>
        <Container style={{marginTop:"2.5em"}}>
            <Row>
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
                <EventCalendar/>
            </Row>
        </Container>
        </>
    )
}
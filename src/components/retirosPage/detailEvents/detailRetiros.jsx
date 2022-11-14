import { Container, Row, Col, Card, Button } from "react-bootstrap"
import detailRetirostStyles from './detailRetiros.module.css'
import { CalendarComponent } from "../../calendar/calendar"

export const RetirosDetails = function() {

    return (
        <>
        <Container style={{marginTop:"2.5em"}}>
            <Row>
                <Col xl={8}>
                    <Row>
                        <p className = {detailRetirostStyles.pTitle}> 
                            Retiros
                        <hr></hr>
                        </p>
                    </Row>

                    <Row >
                        <p className = {detailRetirostStyles.pBody}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit incidunt impedit, odit iure architecto eaque quaerat praesentium quis eligendi consequuntur 
                        harum nihil ea facilis mollitia, maiores possimus perspiciatis, tempora nam?
                        </p>
                    </Row>

                    <Row className={detailRetirostStyles.rowProximosretiros}>
                        <p className = {detailRetirostStyles.pTitle}> 
                            Próximos Retiros
                        <hr></hr>
                        </p>
                    </Row>
                </Col>

                <Col xl={4}>
                    <Row className = {detailRetirostStyles.rowCalendar}>
                        <CalendarComponent/>
                    </Row>
                </Col>
            </Row>

            <Row style={{marginTop:"2em"}}>
                <Card>
                    <Card.Header className= {detailRetirostStyles.cardDate}> Fecha del retiro </Card.Header>
                    <Card.Body>
                    <Card.Title className= {detailRetirostStyles.cardTitle}>Titulo del retiro</Card.Title>
                    <Card.Text className= {detailRetirostStyles.cardBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis qui. Alias accusantium praesentium ipsum consequuntur saepe distinctio quo, delectus aut repellendus quas consectetur ducimus. Corrupti eos quaerat ea possimus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum labore eius cupiditate reprehenderit hic ullam. Veniam quibusdam nesciunt assumenda qui natus odio rem non illo dignissimos? Sed, quibusdam rerum.
                    </Card.Text>
                    <Button style={{fontSize:"1.5em"}} variant="primary"> Clic aqui para participar</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row style={{ marginTop:"2em"}}>
                <Card>
                    <Card.Header className= {detailRetirostStyles.cardDate}> Fecha del retiro </Card.Header>
                    <Card.Body>
                    <Card.Title className= {detailRetirostStyles.cardTitle}>Titulo del retiro</Card.Title>
                    <Card.Text className= {detailRetirostStyles.cardBody}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reiciendis qui. Alias accusantium praesentium ipsum consequuntur saepe distinctio quo, delectus aut repellendus quas consectetur ducimus. Corrupti eos quaerat ea possimus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum labore eius cupiditate reprehenderit hic ullam. Veniam quibusdam nesciunt assumenda qui natus odio rem non illo dignissimos? Sed, quibusdam rerum.
                    </Card.Text>
                    <Button style={{fontSize:"1.5em"}} variant="primary"> Clic aqui para participar</Button>
                    </Card.Body>
                </Card>
            </Row>

            <Row style={{ marginTop:"2em"}}>
                <Card>
                    <Card.Header className= {detailRetirostStyles.cardDate}> Fecha del retiro </Card.Header>
                    <Card.Body>
                    <Card.Title className= {detailRetirostStyles.cardTitle}>Titulo del retiro</Card.Title>
                    <Card.Text className= {detailRetirostStyles.cardBody}>
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
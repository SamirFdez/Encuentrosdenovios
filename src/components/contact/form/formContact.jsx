import { Container, Row, Form, Button} from "react-bootstrap"
import formContactStyles from './formContact.module.css'

export const FormContact = function() {

    return (
        <>
        <Container>
            <Row>
                <p className = {formContactStyles.pTitle}> 
                    Envianos un correo
                <hr></hr>
                </p>
            </Row>

              <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className = {formContactStyles.fLabel} >Nombre</Form.Label>
                  <Form.Control className = {formContactStyles.fControl} type="email" placeholder="Escribe tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className = {formContactStyles.fLabel} >Correo Electrónico</Form.Label>
                  <Form.Control className = {formContactStyles.fControl} type="email" placeholder="Escribe tu correo electronico" />
                  <Form.Text style= {{fontSize: "1.2em"}} className="text-muted">
                    Nunca compartiremos tu correo electrónico con alguien más.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className = {formContactStyles.fLabel}> Asunto </Form.Label>
                  <Form.Select className = {formContactStyles.fControl} aria-label="Default select example">
                    <option>Seleccione el asunto</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className = {formContactStyles.fLabel}>Mensaje</Form.Label>
                  <Form.Control className = {formContactStyles.fControl} as="textarea" rows="3" placeholder="Escribe tu mensaje" />
                </Form.Group>

                <Button style={{fontSize:"1.5em"}} variant="success" size="lg">
                  Enviar
                </Button>
              </Form>

        </Container>
        </>
    )
}
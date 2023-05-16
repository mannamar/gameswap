import './Messages.css';
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { MessagesUser } from './MessagesUser';

function Messages() {
    return(
        <div>
            <Container fluid className="hero-bg-matches">
                <Navbar/>
                <Row className="header-and-description">
                    <Col>
                        <h1>Messages</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <MessagesUser />
                    </Col>
                    <Col>
                        <p>This col will display the messages</p>
                        <Row className="message-row">
                            <Col>Messages over here</Col>
                            <Col>
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Messages }
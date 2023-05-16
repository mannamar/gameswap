import './Messages.css';
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { MessagesUser } from './MessagesUser';
import { MessagesSent } from './MessagesSent';

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
                    <Col className='users-col' xs={3}>
                        <MessagesUser />
                        <br />
                    </Col>
                    <Col>
                        <Row className="message-row">
                            <Col>
                                <MessagesSent />
                            </Col>
                            <Col>
                                <Form.Control as="textarea" placeholder='Type a message' rows={2} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Messages }
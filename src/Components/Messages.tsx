import './Messages.css';
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { MessagesUser } from './MessagesUser';
import { MessagesSent } from './MessagesSent';
import { PaperPlaneTilt } from '@phosphor-icons/react';

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
                            <br />
                            <Col>
                                <MessagesSent />
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={11}>
                                        <Form.Control as="textarea" placeholder='Type a message' rows={1} />
                                    </Col>
                                    <Col xs={1}>
                                        <div className='message-send-btn'>
                                            <PaperPlaneTilt size={25} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Messages }
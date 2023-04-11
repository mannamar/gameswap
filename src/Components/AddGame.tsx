import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";

function AddGame(){
    return(
        <div>
            <Container fluid className="hero-bg-add-game">
                <Row className="title-and-login-btn">
                    <Col>
                        <h2>GameSwap</h2>
                    </Col>
                    <Col className="login-btn">
                        <div className='test-btn'>
                            Login
                        </div>
                    </Col>
                </Row>
                <Row className="header-and-description">
                    <Col>
                        <h1>Add Game</h1>
                    </Col>
                    <Col>
                        <p>Search for a game that you'd like to receive.</p>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={9}>
                                <Form.Control type="text" />
                            </Col>
                            <Col xs={3}>
                                <div className='join-btn'>
                                    Search
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <p>Genre: </p>
                        <p>Publisher: </p>
                            <Row>
                                <Col><p>Desired Platform: </p></Col>
                                <Col>
                                    <Form.Select>
                                        <option>Switch</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Would Trade</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { AddGame }
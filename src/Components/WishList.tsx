import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";

function WishList() {
    return (
        <div>
            <Container fluid className="hero-bg-home">
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
                        <h1>Wishlist</h1>
                    </Col>
                    <Col>
                        <p>Search for a game that you'd like to receive.</p>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Normal text" />
                            </Col>
                            <Col>
                                <div className='join-btn'>
                                    Join Now
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { WishList }
import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { WishListItem } from "./WishListItem";

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
                <br />
                <h2>Your Wishlist</h2>
                <Row className="wish-list-row">
                    <WishListItem />
                </Row>
            </Container>
        </div>
    );
}

export { WishList }
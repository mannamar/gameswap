import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";

function AddGame(){
    // ------Variables-------------------
    let genre: string = 'Adventure';
    let publisher: string = 'Nintendo';
    // ----------------------------------

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
                <Row className="game-info-row">
                    <Col xs={2} className="game-cover-section">
                        <img className="game-cover-placeholder" alt="Game Cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')}/>
                    </Col>
                    <Col xs={3}>
                        <p>Genre: {genre}</p>
                        <p>Publisher: {publisher}</p>
                            <Row>
                                <Col xs={3}><p>Desired Platform: </p></Col>
                                <Col xs={6}>
                                    <Form.Select>
                                        <option>Switch</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={3}>
                                    <div className='join-btn'>
                                        Search
                                    </div>
                                </Col>
                            </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <h2>Would Trade</h2>
                        <p>You don’t currently have any games up for trade. Search for a game below that you’d give in return.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { AddGame }
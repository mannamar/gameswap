import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function AddGame() {
    // ----------Variables---------------
    let genre: string = 'Adventure';
    let publisher: string = 'Nintendo';
    // let gameTitle: string = 'Super Mario Odyssey';
    let releaseDate: number = 2017;
    // ----------------------------------

    const location = useLocation();

    let gameTitle = location.state.gameTitle;

    return (
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
                        <h1>{gameTitle} ({releaseDate})</h1>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container fluid>
                <Row className="game-info-row">
                    <Col xs={3} className="game-cover-section">
                        <img className="game-cover-placeholder" alt="Game Cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
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
                <Row>
                    <Col>
                        <h2>Search</h2>
                        <Col>
                            <Row>
                                <Col xs={3}>
                                    <Form.Control type="text" placeholder="Search for games you’d trade" />
                                </Col>
                                <Col xs={1}>
                                    <div className='join-btn'>
                                        Search
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { AddGame }
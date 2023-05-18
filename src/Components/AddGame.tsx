import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { platform } from "os";
import { useState } from "react";

function AddGame() {
    // ----------Variables---------------
    let genre: string = 'Adventure';
    let publisher: string = 'Nintendo';
    // let gameTitle: string = 'Super Mario Odyssey';
    let releaseDate: number = 2017;
    // ----------------------------------

    const location = useLocation();

    let gameInfo = location.state;
    let platformsArray = gameInfo.allPlatforms.split(', ');

    const [dropPlat, setDropPlat] = useState(gameInfo.platform);

    return (
        <div>
            <Container fluid className="hero-bg-add-game">
                <Navbar/>
                <Row className="header-and-description">
                    <Col>
                        {/* <h1>{gameTitle} ({releaseDate})</h1> */}
                    </Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row className="game-info-row">
                    <Col xs={3} className="game-cover-section">
                        <img  alt="Game Cover" src={gameInfo.coverUrl} />
                    </Col>
                    <Col className="game-information-col" xs={3}>
                        <h1 className="title-release-date">{gameInfo.gameTitle} ({gameInfo.releaseYear})</h1>
                        <br />
                        {/* <p>Genre: {gameInfo.platform}</p> */}
                        <p>Platforms: {gameInfo.allPlatforms}</p>
                        <Row>
                            <Col xs={3}><p>Desired Platform: </p></Col>
                            <Col xs={6}>
                                <Form.Select value={dropPlat} onChange={(e : any) => setDropPlat(e.target.value)}>
                                    {/* <option>Switch</option> */}
                                    {platformsArray.map((item : string, idx : number) => <option key={idx}>{item}</option>)}
                                </Form.Select>
                            </Col>
                            <Col xs={3}>
                                <div className='join-btn'>
                                    Save
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row className="would-trade">
                    <Col xs={3}>
                        <h2>Would Trade</h2>
                        <p>You don't currently have any games up for trade. Search for a game below that you'd give in return.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Search</h2>
                        <Col>
                            <Row>
                                <Col xs={3}>
                                    <Form.Control type="text" placeholder="Search for games you'd trade" />
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
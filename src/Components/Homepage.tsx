import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

function HomePage() {
    return (
        <>
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
                        <h1>Make your old games someone else's problem</h1>
                    </Col>
                    <Col>
                        <p>Swap your old games for ones that are new to you. And make new friends in the process!</p>
                    </Col>
                    <Col>
                        <div className='join-btn'>
                            Join Now
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="new-releases-row">
                    <h1>New Releases</h1>
                    <Col>
                        {/* Beginning of New Releases Carousel */}

                        <Carousel>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Atomic Heart 1.png')} alt="Cover for Atomic Heart" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Wo Long 1.png')} alt="Cover for Wo Long" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/High On Life 1.png')} alt="Cover for High on Life" />
                                    </Col>
                                </Row>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Atomic Heart 1.png')} alt="Cover for Atomic Heart" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Wo Long 1.png')} alt="Cover for Wo Long" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/High On Life 1.png')} alt="Cover for High on Life" />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Atomic Heart 1.png')} alt="Cover for Atomic Heart" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Wo Long 1.png')} alt="Cover for Wo Long" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/High On Life 1.png')} alt="Cover for High on Life" />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                        {/* This is the end of the New Releases Carousel */}
                    </Col>
                </Row>
            </Container>
            <br />
            <Container fluid className="trending-row">
                <Row>
                    <h1>Trending</h1>
                    <Col>
                        {/* Beginning of New Releases Carousel */}

                        <Carousel>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Mario Kart 1.png')} alt="Cover for Mario Kart 8" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} alt="Cover for Elden Ring" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Metroid Prime 1.png')} alt="Cover for Metroid Prime Remastered" />
                                    </Col>
                                </Row>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Mario Kart 1.png')} alt="Cover for Mario Kart 8" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} alt="Cover for Elden Ring" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Metroid Prime 1.png')} alt="Cover for Metroid Prime Remastered" />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Mario Kart 1.png')} alt="Cover for Mario Kart 8" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} alt="Cover for Elden Ring" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" />
                                    </Col>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Metroid Prime 1.png')} alt="Cover for Metroid Prime Remastered" />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                        {/* This is the end of the New Releases Carousel */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export { HomePage }
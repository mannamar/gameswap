import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Matches() {
    let youRecieve: string = 'Super Mario Odyssey';
    let theyRecieve: string = 'Elden Ring';
    let mi1: number = 2.1;
    let mi2: number = 6.5;
    return (
        <div>
            <Container fluid className="hero-bg-matches">
                <Row className="title-and-login-btn">
                    <Col className='gameswap-title'>
                        <Link style={{textDecoration:'none'}} to="/">
                        <h2 className='gameswap-title'>GameSwap</h2>
                        </Link>
                    </Col>
                    <Col className="login-btn">
                        <div className='test-btn'>
                            Login
                        </div>
                    </Col>
                </Row>
                <Row className="header-and-description">
                    <Col>
                        <h1>Matches</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <br />
                <Row className='game-matches-row'>
                    <Col xs={4}>
                        {/* This is the start of a game trade item */}
                        <Row className='game-trade-matches'>
                            <Col className='game-match'>
                                <Row>
                                    <Col xs={6} className='center-matches'>
                                        <img className='matches-game-cover' alt='Game Cover' src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
                                    </Col>
                                    <Col xs={6} className='center-matches'>
                                        <img className='matches-game-cover' alt='Game Cover' src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>You Receive: {youRecieve}</p>
                                        <p>They Receive: {theyRecieve}</p>
                                    </Col>
                                </Row>
                                <Row className='post-info-row'>
                                    <Col>
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/kenZodiacIcon.png')} />
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <p>Kenzodiac</p>
                                            </Col>
                                            <Col>
                                                <img src={require('../Assets/Images/GameCoverPlaceholders/starRating.png')} />
                                                {/* <Row>
                                                    <Col>
                                                    <img src={require('../Assets/Images/GameCoverPlaceholders/starIcon.png')} />
                                                    </Col>
                                                    <Col>
                                                    <img src={require('../Assets/Images/GameCoverPlaceholders/starIcon.png')} />
                                                    </Col>
                                                    <Col>
                                                    <img src={require('../Assets/Images/GameCoverPlaceholders/starIcon.png')} />
                                                    </Col>
                                                    <Col>
                                                    <img src={require('../Assets/Images/GameCoverPlaceholders/starIcon.png')} />
                                                    </Col>
                                                    <Col>
                                                    <img src={require('../Assets/Images/GameCoverPlaceholders/starIcon.png')} />
                                                    </Col>
                                                </Row> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <p>{mi1}mi</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        {/* This is the end of a game trade item */}
                    </Col>
                    <Col xs={4}>
                        {/* This is the start of a game trade item */}
                        <Row className='game-trade-matches'>
                            <Col className='game-match'>
                                <Row>
                                    <Col xs={6} className='center-matches'>
                                        <img className='matches-game-cover' alt='Game Cover' src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
                                    </Col>
                                    <Col xs={6} className='center-matches'>
                                        <img className='matches-game-cover' alt='Game Cover' src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>You Receive: {youRecieve}</p>
                                        <p>They Receive: {theyRecieve}</p>
                                    </Col>
                                    <Row className='post-info-row'>
                                        <Col>
                                            <img src={require('../Assets/Images/GameCoverPlaceholders/nixrzIcon.png')} />
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Col>
                                                    <p>Nixrz</p>
                                                </Col>
                                                <Col>
                                                    <img src={require('../Assets/Images/GameCoverPlaceholders/starRating.png')} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <p>{mi2}mi</p>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                        {/* This is the end of a game trade item */}
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export { Matches }
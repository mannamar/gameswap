import { Container, Col, Row } from 'react-bootstrap';

function Matches() {
  return (
    <div>
        <Container fluid className="hero-bg-matches">
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
                        <h1>Matches</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className='game-trade-matches'>
                        <Row>
                            <Col>
                                <img className='matches-game-cover' alt='Game Cover' src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')}/>
                            </Col>
                            <Col>
                                <img className='matches-game-cover'  alt='Game Cover' src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>You Receive: </p>
                                <p>They Receive: </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export { Matches }
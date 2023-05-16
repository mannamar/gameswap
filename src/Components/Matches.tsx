import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MatchItem } from './MatchItem/MatchItem';

function Matches() {
    
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
                    <MatchItem 
                        youRecieveCover={'Mario Odyssey 1.png'}
                        youRecieveTitle={'Super Mario Odyssey'}
                        theyRecieveCover={'Elden Ring 1.png'}
                        theyRecieveTitle={'Elden Ring'}
                        userProfilePic={'kenZodiacIcon.png'}
                        username={'Kenzodiac'}
                        starRating={5}
                        mi={2.1}
                    />
                    <MatchItem 
                        youRecieveCover={'Mario Odyssey 1.png'}
                        youRecieveTitle={'Super Mario Odyssey'}
                        theyRecieveCover={'Elden Ring 1.png'}
                        theyRecieveTitle={'Elden Ring'}
                        userProfilePic={'nixrzIcon.png'}
                        username={'Nixrz'}
                        starRating={5}
                        mi={6.5}
                    />
                </Row>

            </Container>
        </div>
    )
}

export { Matches }
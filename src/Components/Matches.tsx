import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MatchItem } from './MatchItem/MatchItem';

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
                    <MatchItem 
                        youRecieveCover={'../../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png'}
                        youRecieveTitle={'Super Mario Odyssey'}
                        theyRecieveCover={'../../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png'}
                        theyRecieveTitle={'Elden Ring'}
                        userProfilePic={'linkHere'}
                        username={'Kenzodiac'}
                        starRating={5}
                        mi={2.1}
                    />
                    <MatchItem 
                        youRecieveCover={'linkHere'}
                        youRecieveTitle={'Super Mario Odyssey'}
                        theyRecieveCover={'linkHere'}
                        theyRecieveTitle={'Elden Ring'}
                        userProfilePic={'linkHere'}
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
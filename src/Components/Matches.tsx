import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MatchItem } from './MatchItem/MatchItem';
import Navbar from './Navbar';
import './Matches.css';

function Matches() {

    return (
        <div>
            <Container fluid className="hero-bg-matches">
                <Navbar />
                <Row className="header-and-description">
                    <Col>
                        <h1>Matches</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <br />
                <Row className='game-matches-row'>
                    <Link className='no-decoration' to={'/Messages'}>
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
                    </Link>
                    <Link className='no-decoration' to={'/Messages'}>
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
                    </Link>
                </Row>

            </Container>
        </div>
    )
}

export { Matches }
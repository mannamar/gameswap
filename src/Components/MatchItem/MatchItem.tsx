import './MatchItem.css';
import { Col, Row } from 'react-bootstrap';

interface MatchProps {
    youRecieveCover: string;
    youRecieveTitle: string;
    theyRecieveCover: string;
    theyRecieveTitle: string;
    userProfilePic: string;
    username: string;
    starRating: number;
    mi: number;
}

function MatchItem({ youRecieveCover, youRecieveTitle, theyRecieveCover, theyRecieveTitle, userProfilePic, username, starRating, mi }: MatchProps) {
    return (
        <Col xs={4}>
            {/* This is the start of a game trade item */}
            <Row className='game-trade-matches'>
                <Col className='game-match'>
                    <Row>
                        <Col xs={6} className='center-matches'>
                            <img className='matches-game-cover' alt='Game Cover' src={require(`../../Assets/Images/GameCoverPlaceholders/${youRecieveCover}`)} />
                        </Col>
                        <Col xs={6} className='center-matches'>
                            <img className='matches-game-cover' alt='Game Cover' src={require(`../../Assets/Images/GameCoverPlaceholders/${theyRecieveCover}`)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>You Receive: {youRecieveTitle}</p>
                            <p>They Receive: {theyRecieveTitle}</p>
                        </Col>
                    </Row>
                    <Row className='post-info-row'>
                        <Col>
                            <img src={require(`../../Assets/Images/GameCoverPlaceholders/${userProfilePic}`)} />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <p>{username}</p>
                                </Col>
                                <Col>
                                    <img src={require('../../Assets/Images/GameCoverPlaceholders/starRating.png')} />
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <p>{mi}mi</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* This is the end of a game trade item */}
        </Col>
    )
}

export { MatchItem }
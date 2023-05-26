import './MatchItem.css';
import { Col, Row } from 'react-bootstrap';

interface MatchProps {
    className: string;
    onClick: any;
    youRecieveCover: string;
    youRecieveTitle: string;
    theyRecieveCover: string;
    theyRecieveTitle: string;
    userProfilePic: string;
    username: string;
    starRating: number;
    mi: number;
}

// function CreateStarRating () 
// {
//     for(let i = 1; i < 5; i++)
//     {
//         (
//             <Col xs={2}>
//                 <img src={require('../../Assets/Images/starIcon.png')} />   
//             </Col>
//         )
//     }
// }

function MatchItem({ youRecieveCover, youRecieveTitle, theyRecieveCover, theyRecieveTitle, userProfilePic, username, starRating, mi, onClick, className }: MatchProps) {
    return (
        <div onClick={onClick} className='pointer-hover matchBox'>
            {/* This is the start of a game trade item */}
            <Row className='game-trade-matches'>
                <Col className='game-match'>
                    <Row>
                        <Col xs={6} className='center-matches'>
                            <img className='matches-game-cover' alt='Game Cover' src={youRecieveCover} />
                        </Col>
                        <Col xs={6} className='center-matches'>
                            <img className='matches-game-cover' alt='Game Cover' src={theyRecieveCover} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pt-4'>You Receive: <span className='lightPurp'>{youRecieveTitle}</span></p>
                            <p className=''>They Receive: <span className='lightPurp'>{theyRecieveTitle}</span></p>
                        </Col>
                    </Row>
                    <Row className='post-info-row'>
                        <Col xs={3}>
                            <img src={userProfilePic} className='userIcon' alt='Icon of trade partner'/>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs={10}>
                                    <p><strong>{username}</strong></p>
                                </Col>
                                <Col>
                                    <Row className='star-rating'>
                                        <Col xs={2}><img src={require('../../Assets/Images/starIcon.png')} /></Col>
                                        <Col xs={2}><img src={require('../../Assets/Images/starIcon.png')} /></Col>
                                        <Col xs={2}><img src={require('../../Assets/Images/starIcon.png')} /></Col>
                                        <Col xs={2}><img src={require('../../Assets/Images/starIcon.png')} /></Col>
                                        <Col xs={2}><img src={require('../../Assets/Images/starIcon.png')} /></Col>
                                    </Row>
                                    
                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            {/* <p>{mi}mi</p> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* This is the end of a game trade item */}
        </div>
    )
}

export { MatchItem }
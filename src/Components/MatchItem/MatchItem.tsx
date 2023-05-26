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
        <div onClick={onClick} className='game-trade-matches'>
            {/* This is the start of a game trade item */}
            <Row>
                <Col className='d-flex justify-content-between'>
                    <img className='matches-game-cover' alt='Game Cover' src={youRecieveCover} />
                    <img className='matches-game-cover' alt='Game Cover' src={theyRecieveCover} />
                </Col>
            </Row>
            <div className="info-area">
                <div style={{ marginTop: '16px' }}>
                    <div className='recieve-txt'>You Receive: <span className='lightPurp'>{youRecieveTitle}</span></div>
                    <div className='recieve-txt'>They Receive: <span className='lightPurp'>{theyRecieveTitle}</span></div>
                </div>
                <div className="">
                    <div className="d-flex flex-row">
                        <div style={{ marginRight: '14px' }}>
                            <img src={userProfilePic} className='userIcon' alt='Icon of trade partner' />
                        </div>
                        <div className='d-flex flex-column justify-content-around'>
                            <div className={"match-username"}>{username}</div>
                            <div>
                                <img style={{ marginRight: '2px' }} src={require('../../Assets/Images/starIcon.png')} />
                                <img style={{ marginRight: '2px' }} src={require('../../Assets/Images/starIcon.png')} />
                                <img style={{ marginRight: '2px' }} src={require('../../Assets/Images/starIcon.png')} />
                                <img style={{ marginRight: '2px' }} src={require('../../Assets/Images/starIcon.png')} />
                                <img style={{ marginRight: '2px' }} src={require('../../Assets/Images/starIcon.png')} />
                            </div>
                            <div>
                                {/* <p>{mi}mi</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* This is the end of a game trade item */}
        </div>
    )
}

export { MatchItem }
import { Container, Row, Col } from "react-bootstrap";
import './MessagesUser.css';

interface MessageUserProps {
    profilePic: string;
    username: string;
    starRating: number;
}

function MessagesUser({profilePic, username, starRating}: MessageUserProps) {
  return (
    <div className="user-item-body-div">
        <Row className='user-item-row'>
            <Col xs={3}>
                <img src={profilePic} className={"profile-pic-sidebar"}/>
            </Col>
            <Col xs={4}>
                <p className="fw-bold">{username}</p>
                <Row className='star-rating-row'>
                    <Col xs={1}>
                        <img src={require('../Assets/Images/starIcon.png')} />
                    </Col>
                    <Col xs={1}>
                        <img src={require('../Assets/Images/starIcon.png')} />
                    </Col>
                    <Col xs={1}>
                        <img src={require('../Assets/Images/starIcon.png')} />
                    </Col>
                    <Col xs={1}>
                        <img src={require('../Assets/Images/starIcon.png')} />
                    </Col>
                    <Col xs={1}>
                        <img src={require('../Assets/Images/starIcon.png')} />
                    </Col>
                </Row>
            </Col>
        </Row>
        <br />
    </div>
  )
}

export { MessagesUser }
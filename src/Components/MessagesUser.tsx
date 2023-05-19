import { Container, Row, Col } from "react-bootstrap";

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
                <img src={require(`../Assets/Images/GameCoverPlaceholders/${profilePic}`)}/>
            </Col>
            <Col xs={4}>
                <p>{username}</p>
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
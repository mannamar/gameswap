import { Container, Row, Col } from "react-bootstrap"

function MessagesUser() {
  return (
    <div className="user-item-body-div">
        <Row className='user-item-row'>
            <Col xs={3}>
                <img src={require('../Assets/Images/GameCoverPlaceholders/kenZodiacIcon.png')}/>
            </Col>
            <Col xs={4}>
                <p>Kenzodiac</p>
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
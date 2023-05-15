import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar(props: { signedInPass: boolean }) {

    const [loggedInUsername, setLoggedInUsername] = useState('');
    useEffect (() => {
        const data: any = localStorage.getItem('LoggedInUser');
        const jsonData = JSON.parse(data);
        // console.log(jsonData);
        setLoggedInUsername(jsonData.username);
    })

    return (
        <div>
            {
                !props.signedInPass ?
                    <Row className="title-and-login-btn">
                        <Col>
                            <h2>GameSwap</h2>
                        </Col>
                        <Col className="login-btn">
                            <Link style={{ textDecoration: 'none' }} to="/Login">
                                <div className='test-btn'>
                                    Login
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    :
                    <Row className="title-and-login-btn">
                        <Col>
                            <h2>GameSwap</h2>
                        </Col>
                        <Col>
                            <Row>
                                <Col>Wishlist</Col>
                                <Col>Matches</Col>
                                <Col>Messages</Col>
                            </Row>
                        </Col>
                        <Col className="login-btn">
                            <Row>
                                <Col>
                                    <img src={require('../Assets/Images/GameCoverPlaceholders/amaninatubIcon.png')} />
                                </Col>
                                <Col>{loggedInUsername}</Col>
                            </Row>
                        </Col>
                    </Row>
            }
        </div>
    )
}

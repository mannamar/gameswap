import React, { useEffect, useState } from 'react'
import { Col, Row, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Gift, Handshake, ChatText } from '@phosphor-icons/react';
import './Navbar.css';

export default function Navbar(props: { signedInPass: boolean }) {
    //hooks for managing the logged in user's name appearing
    const [loggedInUsername, setLoggedInUsername] = useState('');
    useEffect(() => {
        if (localStorage.getItem('LoggedInUser')){
            const data: any = localStorage.getItem('LoggedInUser');
            const jsonData = JSON.parse(data);
            // console.log(jsonData);
            setLoggedInUsername(jsonData.username);
        }
    })

    //hook for logging out user by deleting userinfo from local storage
    const handleDeleteItemClick = () => {
        localStorage.removeItem('Token');
        localStorage.removeItem('LoggedInUser');
        window.location.reload();
    }

    return (
        <div className={"nav-style"}>
            {
                !props.signedInPass ?
                    <Row className="title-and-login-btn">
                        <Col sm={3}>
                            <Link className={"nav-links"} to={"/"}>
                                <span>GameSwap</span>
                            </Link>
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
                        <Col sm={3} className={'d-flex align-items-center'}>
                            <Link className={"nav-links"} to={"/"}>
                                <span>GameSwap</span>
                            </Link>
                        </Col>

                        <Col sm={9} className="login-btn">
                            <div className={'d-flex align-items-center'} style={{marginRight: '15px'}}>
                                <Link className={"nav-links"} to="/Wishlist">
                                    <Gift size={18} className={"navbar-icons"} /> Wishlist
                                </Link>
                            </div>
                            <div className={'d-flex align-items-center'} style={{marginRight: '15px'}}>
                                <Link className={"nav-links"} to="/Matches">
                                    <Handshake size={19} className={"navbar-icons"} /> Matches
                                </Link>
                            </div>
                            <div className={'d-flex align-items-center'} style={{marginRight: '49px'}}>
                                <Link className={"nav-links"} to="/Messages">
                                    <ChatText size={16} className={"navbar-icons"} /> Messages
                                </Link>
                            </div>
                            <div className={'d-flex align-items-center'}>
                                <img src={require('../Assets/Images/GameCoverPlaceholders/amaninatubIcon.png')} />
                            </div>
                            <div style={{marginLeft: '10px'}} className={'d-flex align-items-center'} >
                                <Dropdown>
                                    <Dropdown.Toggle variant="none" id="dropdown">
                                        <span style={{fontSize: '14px', fontWeight: '600'}}>{loggedInUsername}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleDeleteItemClick}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                        </Col>
                    </Row>
            }
        </div>
    )
}

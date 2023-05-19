import React, { useEffect, useState } from 'react'
import { Col, Row, Dropdown } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Gift, Handshake, ChatText } from '@phosphor-icons/react';
import './Navbar.css';

import Gundam from '../Assets/Images/ProfileIcons/Gudnam.png';
import JarJar from '../Assets/Images/ProfileIcons/JarJar.png';
import Zelda from '../Assets/Images/ProfileIcons/Link.png';
import Ness from '../Assets/Images/ProfileIcons/Ness.png';
import Picard from '../Assets/Images/ProfileIcons/Picard.png';
import Pikachu from '../Assets/Images/ProfileIcons/Pikachu.png';
import Pootis from '../Assets/Images/ProfileIcons/Pootis.png';
import Snake from '../Assets/Images/ProfileIcons/Snake.png';
import Spock from '../Assets/Images/ProfileIcons/Spock.png';
import Vader from '../Assets/Images/ProfileIcons/Vader.png';

export default function Navbar() {
    //logic to check and see if the user is already logged in
    let signedIn: boolean = false;
    if (localStorage.getItem("Token") != null){
        signedIn = true;
    }
    
    //hooks for managing the logged in user's name & icon appearing
    const [loggedInUsername, setLoggedInUsername] = useState('');
    const [loggedInUserIcon, setLoggedInUserIcon] = useState('');
    useEffect(() => {
        if (localStorage.getItem('LoggedInUser')){
            const data: any = localStorage.getItem('LoggedInUser');
            const jsonData = JSON.parse(data);
            // console.log(jsonData);
            setLoggedInUsername(jsonData.username);
            setLoggedInUserIcon(ResolveUserIcon(jsonData.id));
        }
    })

    //helper function for resolving random icon assignment
    function GetDigitalRoot(num: number){
        while (num > 9){
            let sum = 0;
            while (num > 0) {
                sum += num % 10;
                num = Math.floor( num / 10 );
            }
            num = sum;
        }
        return num;
    }
    function ResolveUserIcon(id: number){
        let idNum = GetDigitalRoot(id);
        let result = '';
        switch(idNum){
            case 1: result = Snake;
                break;
            case 2: result = JarJar;
                break;
            case 3: result = Zelda;
                break;
            case 4: result = Ness;
                break;
            case 5: result = Picard;
                break;
            case 6: result = Pikachu;
                break;
            case 7: result = Gundam;
                break;
            case 8: result = Spock;
                break;
            case 9: result = Vader;
                break;
            default: result = Pootis;
                break;
        }
        return result;
    }

    //hook for logging out user by deleting userinfo from local storage
    const navigate = useNavigate();
    const handleDeleteItemClick = () => {
        localStorage.removeItem('Token');
        localStorage.removeItem('LoggedInUser');
        navigate('/');
        window.location.reload();
    }

    //logic to hide the login-button when you're already on the login-screen
    const location = useLocation();
    const hideButton  = location.pathname === '/Login' || location.pathname === '/SignUp';

    return (
        <div className={"nav-style"}>
            {
                !signedIn ?
                    <Row className="title-and-login-btn">
                        <Col sm={3}>
                            <Link className={"nav-links"} to={"/"}>
                                <span>GameSwap</span>
                            </Link>
                        </Col>
                        <Col className="login-btn">
                            {hideButton ? null : 
                                <Link style={{ textDecoration: 'none' }} to="/Login">
                                    <div className='test-btn'>
                                        Login
                                    </div>
                                </Link>
                            }
                        </Col>
                    </Row>
                    :
                    <Row className="title-and-login-btn">
                        <Col sm={3} xs={1} className={'d-flex align-items-center'}>
                            <Link className={"nav-links"} to={"/"}>
                                <span>GameSwap</span>
                            </Link>
                        </Col>

                        <Col sm={9} xs={11} className="login-btn">
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
                                <img src={loggedInUserIcon} className={"user-icon"} />
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

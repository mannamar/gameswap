import React, { useEffect, useState } from 'react'
import { Col, Row, Dropdown, Container, Nav, Navbar, NavDropdown, Offcanvas, Button, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Gift, Handshake, ChatText } from '@phosphor-icons/react';
import './GSNavbar.css';

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

//helper function for resolving random icon assignment
function GetDigitalRoot(num: number) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

function ResolveUserIcon(id: number) {
    let idNum = GetDigitalRoot(id);
    let result = '';
    switch (idNum) {
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

export default function GSNavbar() {
    //logic to check and see if the user is already logged in
    let signedIn: boolean = false;
    if (localStorage.getItem("Token") != null) {
        signedIn = true;
    }

    //hooks for managing the logged in user's name & icon appearing
    const [loggedInUsername, setLoggedInUsername] = useState('');
    const [loggedInUserIcon, setLoggedInUserIcon] = useState('');
    useEffect(() => {
        if (localStorage.getItem('LoggedInUser')) {
            const data: any = localStorage.getItem('LoggedInUser');
            const jsonData = JSON.parse(data);
            // console.log(jsonData);
            setLoggedInUsername(jsonData.username);
            setLoggedInUserIcon(ResolveUserIcon(jsonData.id));
        }
    })


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
    const hideButton = location.pathname === '/Login' || location.pathname === '/SignUp';

    return (
        <div className={"nav-style"}>
            <Navbar collapseOnSelect expand="md" bg="none" variant="dark">
                <Container fluid>
                    <Navbar.Brand className={"ms-3"} href="/">GameSwap</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
                    {hideButton ? null :
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-md`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                    {
                                        !signedIn ?
                                        (
                                            <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas-style">
                                                <Nav.Link href="/Login" style={{ textDecoration: 'none' }}>
                                                    <div className='test-btn'>
                                                        Login
                                                    </div>
                                                </Nav.Link>
                                            </Nav>
                                        )
                                        :
                                        (
                                            <Nav className="justify-content-end flex-grow-1 pe-3 me-2 offcanvas-style">
                                                <Nav.Link href="/Wishlist"><Gift size={18} className={"navbar-icons"} />Wishlist</Nav.Link>
                                                <Nav.Link href="/Matches"><Handshake size={19} className={"navbar-icons"} />Matches</Nav.Link>
                                                <Nav.Link href="/Messages"><ChatText size={16} className={"navbar-icons"} />Messages</Nav.Link>
                                                <Nav.Link href="#"><img src={loggedInUserIcon} className={"user-icon"} style={{ marginLeft: '34px' }}/></Nav.Link>
                                                <NavDropdown
                                                    title={loggedInUsername}
                                                    id={`offcanvasNavbarDropdown-expand-md`}
                                                >
                                                    <NavDropdown.Item href="#" onClick={handleDeleteItemClick}>Logout</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                        )
                                    }
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    }
                </Container>
            </Navbar>
        </div>
    )
}

export { GetDigitalRoot, ResolveUserIcon };
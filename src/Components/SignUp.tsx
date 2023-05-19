import React, { useState } from 'react';
import { Container, Row, Col, Form, Tab, Tabs } from "react-bootstrap";
import { createAccount, loginAccount, getLoggedInUserData } from '../Services/DataServices';
import { useNavigate } from 'react-router-dom';
import { EventKey } from '@restart/ui/esm/types';
import './SignUp.css';
import Navbar from './Navbar';
import { FileX } from '@phosphor-icons/react';

interface Props {
    loginSignup: number
}

function SignUp(props: Props) {
    let navigate = useNavigate();

    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [BirthMonth, setBirthMonth] = useState('');
    const [BirthDay, setBirthDay] = useState('');
    const [BirthYear, setBirthYear] = useState('');
    const [Zip, setZip] = useState('');

    const [LoginUser, setLoginUser] = useState('');
    const [LoginPass, setLoginPass] = useState('');

    async function submitForm() {
        if (Name && Username && Email && Password && BirthMonth && BirthDay && BirthYear && Zip) {
            let userData = {
                Name,
                Username,
                Email,
                Password,
                Birthday: `${BirthMonth} ${BirthDay}, ${BirthYear}`,
                Zipcode: parseInt(Zip)
            }
            console.log(userData);
            let message = await createAccount(userData);
            console.log(message);
            if (message === 'Username & Email already taken') {
                alert(message);
            } else if (message === 'Username already taken') {
                alert(message);
            } else if (message === 'Email already taken') {
                alert(message);
            } else if (message === 'Success') {
                await login(userData.Username, userData.Password);
            }
        } else {
            alert('Please fill out all fields');
        }
    }

    async function login(user: string = LoginUser, pass: string = LoginPass) {
        if (user && pass) {
            let loginData = {
                Username: user,
                Password: pass
            }
            console.log(loginData);
            let token = await loginAccount(loginData);
            console.log(token)
            if (token.token != null) {
                localStorage.setItem("Token", token.token);
                let loggedInUser: any = await getLoggedInUserData(user);
                console.log(loggedInUser);
                localStorage.setItem("LoggedInUser", JSON.stringify(loggedInUser));
                navigate('/');
            } else {
                alert("Login failed")
            }
        } else {
            alert('Please fill out all fields');
        }
    }

    return (
        <div>
            <Container fluid className="signup-hero-bg">
                {/* Navbar */}
                <div style={{ position: 'absolute', width: '100%' }}><Navbar/></div>

                <Row className="signup-page-sections">

                    <Col xl={8} lg={7} md={6} sm={5} xs={12} className="signup-page-left-side mx-0">
                        <Row>
                            <Col style={{ marginBottom: "40%" }}>
                                <div className="login-screen-slogan">
                                    <span>By Gamers.</span><br />
                                    <span style={{ color: '#AB83ED' }}>For Gamers.</span>
                                </div>
                                <div className="signup-par">Sign up now to cut out the middleman and start trading games directly with gamers in your local community!</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={4} lg={5} md={6} sm={5} xs={12} className='form-section overflow-auto d-flex justify-content-center'>
                        <div style={{width: '90%'}}>
                        <Tabs defaultActiveKey={props.loginSignup} id="uncontrolled-tab-example">

                            <Tab eventKey={1} title="Log In">
                                <br />
                                {/* Start of Login tab */}
                                <div className={"d-flex justify-content-center"}>
                                    <Form style={{width: '90%'}}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Username or E-Mail</Form.Label>
                                            <Form.Control onChange={(e) => setLoginUser(e.target.value)} value={LoginUser} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="LoginPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" onChange={(e) => setLoginPass(e.target.value)} value={LoginPass} />
                                        </Form.Group>

                                        <div className="d-grid gap-2">
                                            <div className='submit-btn' onClick={() => login()}>
                                                Log In
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                                {/* End of Login tab */}
                            </Tab>
                            <Tab eventKey={2} title="Sign Up">
                                <br />
                                {/* Start of Sign up tab */}
                                <div className={"d-flex justify-content-center"}>
                                    <Form style={{width: '90%'}}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control onChange={(e) => setName(e.target.value)} value={Name} />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control onChange={(e) => setUsername(e.target.value)} value={Username} />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicEmail">
                                            <Form.Label>E-Mail</Form.Label>
                                            <Form.Control onChange={(e) => setEmail(e.target.value)} value={Email} />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={Password} />
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Row>
                                                <Col xs={6}>
                                                    <Form.Select aria-label="Default select example" onChange={(e) => setBirthMonth(e.target.value)} value={BirthMonth}>
                                                        <option value="">Select Month...</option>
                                                        <option value="Jan">January</option>
                                                        <option value="Feb">February</option>
                                                        <option value="Mar">March</option>
                                                        <option value="Apr">April</option>
                                                        <option value="May">May</option>
                                                        <option value="Jun">June</option>
                                                        <option value="Jul">July</option>
                                                        <option value="Aug">August</option>
                                                        <option value="Sep">September</option>
                                                        <option value="Oct">October</option>
                                                        <option value="Nov">November</option>
                                                        <option value="Dec">December</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col xs={3}>
                                                    <Form.Control placeholder='Day' type='number' min='1' max='31' onChange={(e) => setBirthDay(e.target.value)} value={BirthDay} />
                                                </Col>
                                                <Col xs={3}>
                                                    <Form.Control placeholder='Year' type='number' min='1900' max='2023' onChange={(e) => setBirthYear(e.target.value)} value={BirthYear} />
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control type='number' onChange={(e) => setZip(e.target.value)} value={Zip} min='10000' />
                                        </Form.Group>



                                        <div className="d-grid gap-2" onClick={submitForm}>
                                            <div className='submit-btn'>
                                                Sign Up
                                            </div>
                                        </div>

                                    </Form>
                                </div>
                                {/* End of Sign Up tab */}
                            </Tab>
                        </Tabs>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { SignUp }
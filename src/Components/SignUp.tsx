import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { createAccount, loginAccount, getLoggedInUserData } from '../Services/DataServices';
import { useNavigate } from 'react-router-dom';

function SignUp() {
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

    async function submitForm(){
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
                alert('test');
            } else if (message === 'Username already taken') {
                alert(message);
            } else if (message === 'Email already taken') {
                alert(message);
            } else if (message === 'Success') {
                navigate('/');
            }
        } else {
            alert('Please fill out all fields');
        }
    }

    async function login() {
        if (LoginUser && LoginPass) {
            let loginData = {
                Username: LoginUser,
                Password: LoginPass
            }
            console.log(loginData);
            let token = await loginAccount(loginData);
            console.log(token)
            if (token.token != null) {
                localStorage.setItem("Token", token.token);
                // await getLoggedInUserData(LoginUser);
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
            <Container fluid>
                <Row className="signup-page-sections">
                    <Col xs={7} className="signup-hero-bg">
                        <Row className="signup-page-text">
                            <Col className="hero-txt">
                                <h1>By Gamers.</h1>
                                <h1 className="for-gamers">For Gamers.</h1>
                                <p className="signup-par">Sign up now to cut out the middleman and start trading games directly with gamers in your local community!</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={5} className='form-section'>
                    <br />
                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">

                            <Tab eventKey={1} title="Log In">
                                <br />
                                {/* Start of Login tab */}
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username or E-Mail</Form.Label>
                                        <Form.Control onChange={(e) => setLoginUser(e.target.value)} value={LoginUser}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="LoginPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" onChange={(e) => setLoginPass(e.target.value)} value={LoginPass}/>
                                    </Form.Group>



                                    <div className="d-grid gap-2">
                                        <div className='test-btn' onClick={login}>
                                            Log In
                                        </div>
                                    </div>

                                </Form>
                                {/* End of Login tab */}
                            </Tab>
                            <Tab eventKey={2} title="Sign Up">
                            <br />
                                {/* Start of Sign up tab */}
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={(e) => setName(e.target.value)} value={Name}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={(e) => setUsername(e.target.value)} value={Username}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>E-Mail</Form.Label>
                                        <Form.Control onChange={(e) => setEmail(e.target.value)} value={Email}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={Password}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
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

                                    <Form.Group className="mb-3">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control type='number' onChange={(e) => setZip(e.target.value)} value={Zip} min='10000'/>
                                    </Form.Group>



                                    <div className="d-grid gap-2" onClick={submitForm}>
                                        <div className='test-btn'>
                                            Sign Up
                                        </div>
                                    </div>

                                </Form>
                            {/* End of Sign Up tab */}
                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { SignUp }
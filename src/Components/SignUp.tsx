import { useState } from 'react';
import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";

function SignUp() {
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [BirthMonth, setBirthMonth] = useState('');
    const [BirthDay, setBirthDay] = useState('');
    const [BirthYear, setBirthYear] = useState('');
    const [Zip, setZip] = useState('');

    function createAccount(){
        if (Name && Username && Email && Password && BirthMonth && BirthDay && BirthYear && Zip) {
            console.log('this button works!!!1!');
            console.log(Name, Username, Email, Password, BirthMonth, BirthDay, BirthYear, Zip);
        } else {
            console.log('Please fill out all fields');
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
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="LoginPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" />
                                    </Form.Group>



                                    <div className="d-grid gap-2">
                                        <div className='test-btn'>
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
                                                    <option value="null">Select Month...</option>
                                                    <option value="1">January</option>
                                                    <option value="2">February</option>
                                                    <option value="3">March</option>
                                                    <option value="4">April</option>
                                                    <option value="5">May</option>
                                                    <option value="6">June</option>
                                                    <option value="7">July</option>
                                                    <option value="8">August</option>
                                                    <option value="9">September</option>
                                                    <option value="10">October</option>
                                                    <option value="11">November</option>
                                                    <option value="12">December</option>
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



                                    <div className="d-grid gap-2" onClick={createAccount}>
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
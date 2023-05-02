import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { searchForGames } from '../Services/IgdbServices';

function WishList() {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    async function handleKeyPress(e: any) {
        if (e.key === "Enter") {
            let data = await searchForGames(input);
            setResults(data);
        }
    }

    return (
        <div>
            <Container fluid className="hero-bg-home">
                <Row className="title-and-login-btn">
                    <Col>
                        <h2>GameSwap</h2>
                    </Col>
                    <Col className="login-btn">
                        <div className='test-btn'>
                            Login
                        </div>
                    </Col>
                </Row>
                <Row className="header-and-description">
                    <Col>
                        <h1>Wishlist</h1>
                    </Col>
                    <Col>
                        <p>Search for a game that you'd like to receive.</p>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={9}>
                                <Form.Control type="text" onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress} />
                            </Col>
                            <Col xs={3}>
                                <div className='join-btn'>
                                    Search
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <br />
                <h2>Your Wishlist</h2>
                <Row>
                    <Col>
                        {results.map((item, idx) => {
                            return (
                                <p key={idx}>{item['name']}</p>
                            )
                        })}
                        <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { WishList }
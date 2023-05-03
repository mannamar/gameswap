import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { searchForGames } from '../Services/IgdbServices';
declare module "*.png";

function WishList() {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    async function handleKeyPress(e: any) {
        if (e.key === "Enter") {
            let data = await searchForGames(input);
            setResults(data);
        }
    }

    function getImg(url: string) {
        let split = url.split("/");
        let img = split[split.length - 1];
        // console.log(img);
        return img;
    }

    // getImg('//images.igdb.com/igdb/image/upload/t_thumb/co2vvc.jpg');

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
                                <div key={idx}>
                                    <p>{item['name']}</p>
                                    <img
                                        src={item['cover'] ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'}
                                        className="img-fluid"
                                        alt={item['name']}
                                    />
                                </div>
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
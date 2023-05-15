import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { WishListItem } from "./WishListItem";
import React, { useState, useEffect } from 'react';
import { searchForGames } from '../Services/IgdbServices';
import { userData, addToWishlist, getWishListItems } from "../Services/DataServices";
import WishItem from "./WishItem";
import SearchResult from "./SearchResult";
import './WishList.css'
declare module "*.png";

function WishList() {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        async function getData() {
            let data = await getWishListItems(1);
            console.log(data);
            setWishlist(data);
        }
        getData();
    }, []);

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

    async function clickGame(item: any) {
        console.log('Clicked Game');
        let saveItem = {
            "UserId": 1,
            "GameName": item.name,
            "GamePlatform": item.platforms[0].abbreviation,
            "ReleaseYear": 2017,
            "ImgUrl": `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item.cover.url)}`,
            "IgdbId": item.id,
            "TradeOptions": "Words!"
        }
        console.log(saveItem);
        await addToWishlist(saveItem);
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
                <div className='wishBox'>
                        {wishlist.map((item, idx) => {
                            return (
                                // <div key={idx}>
                                //     <img
                                //         src={item['imgUrl'] ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['imgUrl'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'}
                                //         className="img-fluid"
                                //         alt={item['name']}
                                //     />
                                //     <p>{item['gameName']}</p>
                                // </div>
                                <WishItem key={item['id']} id={item['id']} gameTitle={item['gameName']} releaseYear={item['releaseYear']} platform={item['gamePlatform']} imageUrl={item['imgUrl']}/>
                            )
                        })}
                        {wishlist.length === 0 ? <p>Your wishlist is currently empty. Search for a game above to get started</p> : null}
                        {/* <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} /> */}
                </div>
                <h2>Search Results</h2>
                <div className='searchBox'>
                        {results.map((item, idx) => {
                            return (
                                // <div key={idx} onClick={async () => clickGame(item)}>
                                //     <img
                                //         src={item['cover'] ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'}
                                //         className="img-fluid searchResult"
                                //         alt={item['name']}
                                //         />
                                //         <p>{item['name']}</p>
                                // </div>
                                <SearchResult key={item['id']} onImgClick={async () => clickGame(item)} gameTitle={item['name']} releaseYear={item['releaseYear']} platform={item['platforms'][0]['abbreviation']} imageUrl={`https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}`}/>
                            )
                        })}
                </div>
            </Container>
        </div>
    );
}

export { WishList }
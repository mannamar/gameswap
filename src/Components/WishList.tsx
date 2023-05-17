import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { WishListItem } from "./WishListItem";
import React, { useState, useEffect } from 'react';
import { searchForGames } from '../Services/IgdbServices';
import { userData, addToWishlist, getWishListItems } from "../Services/DataServices";
import WishItem from "./WishItem";
import SearchResult from "./SearchResult";
import './WishList.css';
import Navbar from "./Navbar";
declare module "*.png";

function WishList() {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    let userData : any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    useEffect(() => {
        async function getData() {
            let data = await getWishListItems(userID);
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

    function getYear(timestamp: number) {
        return timestamp !== undefined ? new Date(timestamp * 1000).getFullYear() : 1970;
    }

    function parsePlatformNames(platforms : any[]) {
        let platformNames : string[] = [];
        platforms.forEach(item => platformNames.push(item.abbreviation));
        return platformNames.join(', ');
    }

    async function clickGame(item: any) {
        console.log('Clicked Game');
        let saveItem = {
            "UserId": userID,
            "GameName": item.name,
            "GamePlatform": item.platforms[0].abbreviation,
            "ReleaseYear": getYear(item['first_release_date']),
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
                <Navbar/>
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
                                <WishItem setWishlist={setWishlist} key={item['id']} id={item['id']} gameTitle={item['gameName']} releaseYear={item['releaseYear']} platform={item['gamePlatform']} imageUrl={item['imgUrl']} userID={userID}/>
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
                                <SearchResult key={item['id']} onImgClick={async () => clickGame(item)} gameTitle={item['name']} releaseYear={getYear(item['first_release_date'])} platform={item['platforms'] && item['platforms'][0]['abbreviation'] ? parsePlatformNames(item['platforms']) : 'N/A'} imageUrl={item['cover'] !== undefined ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'}/>
                            )
                        })}
                </div>
            </Container>
        </div>
    );
}

export { WishList }
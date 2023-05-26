import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { WishListItem } from "./WishListItem";
import React, { useState, useEffect } from 'react';
import { searchForGames } from '../Services/IgdbServices';
import { userData, addToWishlist, getWishListItems } from "../Services/DataServices";
import WishItem from "./WishItem";
import SearchResult from "./SearchResult";
import './WishList.css';
import Navbar from "./GSNavbar";
import { useNavigate } from "react-router-dom";

declare module "*.png";

function WishList() {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [ownedPlatform, setOwnedPlatform] = useState('');

    const navigate = useNavigate();

    let userData: any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    useEffect(() => {
        async function getData() {
            let data = await getWishListItems(userID);
            // console.log(data);
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

    async function handleSearch() {
        let data = await searchForGames(input);
        setResults(data);
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

    function parsePlatformNames(platforms: any[]) {
        let platformNames: string[] = [];
        platforms.forEach(item => platformNames.push(item.abbreviation));
        return platformNames.join(', ');
    }

    async function clickGame(e: any, item: any) {
        if (e.target === e.currentTarget) {
            // console.log('Clicked Game');
            let saveItem = {
                "UserId": userID,
                "GameName": item.name,
                "GamePlatform": ownedPlatform ? ownedPlatform : item.platforms[0].abbreviation,
                "ReleaseYear": getYear(item['first_release_date']),
                "CoverUrl": `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item.cover.url)}`,
                "IgdbId": item.id,
                "AllPlatforms": parsePlatformNames(item['platforms']),
                "BannerUrl": `https://images.igdb.com/igdb/image/upload/t_original/${getImg(item.screenshots[0].url)}`
            }
            // console.log(saveItem);
            let wishId = await addToWishlist(saveItem);
            navigate("/AddGame", {
                state: {
                    gameTitle: saveItem.GameName,
                    releaseYear: saveItem.ReleaseYear,
                    coverUrl: saveItem.CoverUrl,
                    platform: saveItem.GamePlatform,
                    allPlatforms: saveItem.AllPlatforms,
                    wishId : wishId,
                    bannerUrl: saveItem.BannerUrl,
                    userID: userID
                }
            });
        }
    }

    // getImg('//images.igdb.com/igdb/image/upload/t_thumb/co2vvc.jpg');

    return (
        <div>
            <Container fluid className="hero-bg-wish">
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
                                <div className='join-btn' onClick={handleSearch}>
                                    Search
                                </div>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <h2 className="mt-5">Your Wishlist</h2>
                <div className='wishBox'>
                    {wishlist.map((item, idx) => {
                        return (
                            <WishItem setWishlist={setWishlist} key={item['id']} id={item['id']} gameTitle={item['gameName']} releaseYear={item['releaseYear']} platform={item['gamePlatform']} allPlatforms={item['allPlatforms']} imageUrl={item['coverUrl']} userID={userID} bannerUrl={item['bannerUrl']}/>
                        )
                    })}
                    {wishlist.length === 0 ? <p>Your wishlist is currently empty. Search for a game above to get started</p> : null}
                </div>
                {results.length > 0 ? <h2 className="mt-5">Search Results</h2> : null}
                <div className='searchBox'>
                    {results.map((item, idx) => {
                        return (
                            <SearchResult key={item['id']} section={'Wishlist'} onImgClick={async (e: any) => clickGame(e, item)} setOwnedPlatform={setOwnedPlatform} gameTitle={item['name']} releaseYear={getYear(item['first_release_date'])} platform={item['platforms'] && item['platforms'][0]['abbreviation'] ? parsePlatformNames(item['platforms']) : 'N/A'} imageUrl={item['cover'] !== undefined ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'} />
                        )
                    })}
                </div>
            </Container>
        </div>
    );
}

export { WishList }
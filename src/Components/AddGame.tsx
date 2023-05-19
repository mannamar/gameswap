import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { platform } from "os";
import { useEffect, useState } from "react";
import { searchForGames } from "../Services/IgdbServices";
import SearchResult from "./SearchResult";
import { addToTrades, getTradeItems } from "../Services/DataServices";
import WishItem from "./WishItem";
import TradeItem from "./TradeItem";

function AddGame() {
    // ----------Variables---------------
    let genre: string = 'Adventure';
    let publisher: string = 'Nintendo';
    // let gameTitle: string = 'Super Mario Odyssey';
    let releaseDate: number = 2017;
    // ----------------------------------

    const location = useLocation();

    let gameInfo = location.state;
    let platformsArray = gameInfo.allPlatforms.split(', ');

    const [dropPlat, setDropPlat] = useState(gameInfo.platform);

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [tradeList, setTradelist] = useState([]);

    const [ownedPlatform, setOwnedPlatform] = useState('');

    let userData: any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    async function getData() {
        let data = await getTradeItems(gameInfo.wishId);
        console.log(data);
        setTradelist(data);
    }
    useEffect(() => {
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

    function parsePlatformNames(platforms: any[]) {
        let platformNames: string[] = [];
        platforms.forEach(item => platformNames.push(item.abbreviation));
        return platformNames.join(', ');
    }

    async function clickGame(e: any, item: any) {
        if (e.target === e.currentTarget) {
            console.log('Clicked Game');
            let saveItem = {
                "UserId": userID,
                "GameName": item.name,
                "GamePlatform": ownedPlatform ? ownedPlatform : item.platforms[0].abbreviation,
                "ReleaseYear": getYear(item['first_release_date']),
                "ImgUrl": `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item.cover.url)}`,
                "IgdbId": item.id,
                "WishListItemId": gameInfo.wishId,
                "isDeleted": false
            }
            // console.log(saveItem);
            await addToTrades(saveItem);
            await getData();
        }
    }

    return (
        <div>
            <Container fluid className="hero-bg-add-game"
                // style={{
                //     background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url(' + gameInfo.bannerUrl + ')',
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     // filter: 'blur(4px)'
                //     // backdropFilter: 'brightness(50%)'
                // }}
            >
                <Navbar />
                <Row className="header-and-description">
                    <Col>
                        {/* <h1>{gameTitle} ({releaseDate})</h1> */}
                    </Col>
                </Row>
                <div className="bannerImg"
                style={{
                    background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url(' + gameInfo.bannerUrl + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(4px)'
                    // backdropFilter: 'brightness(50%)'
                }}
                ></div>
            </Container>
            <br />
            <Container>
                <Row className="game-info-row">
                    <Col xs={3} className="game-cover-section">
                        <img alt="Game Cover" src={gameInfo.coverUrl} />
                    </Col>
                    <Col className="game-information-col" xs={3}>
                        <h1 className="title-release-date">{gameInfo.gameTitle} ({gameInfo.releaseYear})</h1>
                        <br />
                        <p>WishId: {gameInfo.wishId}</p>
                        <p>Platforms: {gameInfo.allPlatforms}</p>
                        <Row>
                            <Col xs={3}><p>Desired Platform: </p></Col>
                            <Col xs={6}>
                                <Form.Select value={dropPlat} onChange={(e: any) => setDropPlat(e.target.value)}>
                                    {/* <option>Switch</option> */}
                                    {platformsArray.map((item: string, idx: number) => <option key={idx}>{item}</option>)}
                                </Form.Select>
                            </Col>
                            <Col xs={3}>
                                <div className='join-btn'>
                                    Save
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <Row className="would-trade">
                    <h2 className="mb-4">Would Trade</h2>
                    {tradeList.length === 0 ? <p>You don't currently have any games up for trade. Search for a game below that you'd give in return.</p> : null}
                    <div className='wishBox'>
                    {tradeList.map((item, idx) => {
                        return (
                            // <p>{item['gameName']}</p>
                            <TradeItem setTradelist={setTradelist} key={item['id']} id={item['id']} gameTitle={item['gameName']} releaseYear={item['releaseYear']} platform={item['gamePlatform']} allPlatforms={item['allPlatforms']} imageUrl={item['imgUrl']} wishId={gameInfo.wishId} bannerUrl={item['bannerUrl']}/>
                        )
                    })}
                    </div>
                </Row>
                <Row>
                    <Col>
                        <h2 className="mt-5">Search</h2>
                        <Col>
                            <Row className="mt-4 mb-5">
                                <Col xs={3}>
                                    <Form.Control type="text" placeholder="Search for games you'd trade" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyPress}/>
                                </Col>
                                <Col xs={1}>
                                    <div className='join-btn' onClick={async () => setResults(await searchForGames(input))}>
                                        Search
                                    </div>
                                </Col>
                                <div className='searchBox mt-5'>
                                    {results.map((item, idx) => {
                                        return (
                                            <SearchResult key={item['id']} onImgClick={async (e: any) => clickGame(e, item)} setOwnedPlatform={setOwnedPlatform} gameTitle={item['name']} releaseYear={getYear(item['first_release_date'])} platform={item['platforms'] && item['platforms'][0]['abbreviation'] ? parsePlatformNames(item['platforms']) : 'N/A'} imageUrl={item['cover'] !== undefined ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'} />
                                        )
                                    })}
                                </div>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { AddGame }
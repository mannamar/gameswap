import { Container, Row, Col, Button, Form, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { platform } from "os";
import { useState } from "react";
import { searchForGames } from "../Services/IgdbServices";
import SearchResult from "./SearchResult";

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

    function handleClick() {
        console.log('handled click');
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
                    <h2>Would Trade</h2>
                    <p>You don't currently have any games up for trade. Search for a game below that you'd give in return.</p>
                </Row>
                <Row>
                    <Col>
                        <h2 className="mt-5">Search</h2>
                        <Col>
                            <Row className="mt-4">
                                <Col xs={3}>
                                    <Form.Control type="text" placeholder="Search for games you'd trade" value={input} onChange={(e) => setInput(e.target.value)} />
                                </Col>
                                <Col xs={1}>
                                    <div className='join-btn' onClick={async () => setResults(await searchForGames(input))}>
                                        Search
                                    </div>
                                </Col>
                                <div className='searchBox mt-5'>
                                    {results.map((item, idx) => {
                                        return (
                                            <SearchResult key={item['id']} onImgClick={async (e: any) => console.log('clicked')} setOwnedPlatform={handleClick} gameTitle={item['name']} releaseYear={getYear(item['first_release_date'])} platform={item['platforms'] && item['platforms'][0]['abbreviation'] ? parsePlatformNames(item['platforms']) : 'N/A'} imageUrl={item['cover'] !== undefined ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${getImg(item['cover']['url'])}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png'} />
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
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./GSNavbar";
import './Homepage.css';

function HomePage() {

    //logic to check and see if the user is already logged in
    let signedIn: boolean = false;
    if (localStorage.getItem("Token") != null) {
        signedIn = true;
    }

    const navigate = useNavigate();
    async function handleClick() {      
        !signedIn ? navigate("/SignUp") : navigate("/WishList");
   }

    return (
        <>
            <Container fluid className="hero-bg-homepg">
                {/* Navbar component with signed-in status passed through as a prop */}
                <Navbar />

                <Row className="homepg-header-and-description">
                    <Col>
                        <div className={"homepg-slogan"}>Make your old games someone else's problem</div>
                        <div className={"homepg-subslogan"}>Swap your old games for ones that are new to you. And make new friends in the process!</div>
                        {
                            !signedIn ?
                                <Link style={{ textDecoration: 'none' }} to="/SignUp">
                                    <div className='home-join-btn'>
                                        Join Now
                                    </div>
                                </Link>
                                :
                                <Link style={{ textDecoration: 'none' }} to="/WishList">
                                    <div className='home-join-btn'>
                                        Add Games
                                    </div>
                                </Link>
                        }
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col style={{marginLeft: '2em', marginRight: '2em'}}>
                        <div className={"home-new-release-header"} style={{color: 'black'}}>New Releases</div>

                        {/* Beginning of New Releases Carousel */}
                        <Carousel>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" onClick={handleClick}/>
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Atomic Heart 1.png')} alt="Cover for Atomic Heart" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Wo Long 1.png')} alt="Cover for Wo Long" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/High On Life 1.png')} alt="Cover for High on Life" onClick={handleClick}/>
                                    </Col>
                                </Row>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Atomic Heart 1.png')} alt="Cover for Atomic Heart" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Wo Long 1.png')} alt="Cover for Wo Long" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/High On Life 1.png')} alt="Cover for High on Life" onClick={handleClick} />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Atomic Heart 1.png')} alt="Cover for Atomic Heart" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Wo Long 1.png')} alt="Cover for Wo Long" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/High On Life 1.png')} alt="Cover for High on Life" onClick={handleClick} />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                        {/* This is the end of the New Releases Carousel */}
                    </Col>
                </Row>
            </Container>
            <br />
            <Container fluid className="trending-row">
                <Row>
                    <Col style={{marginLeft: '2em', marginRight: '2em'}}>
                    <div className={"home-new-release-header"} style={{color: 'white'}}>Trending</div>

                        {/* Beginning of New Releases Carousel */}
                        <Carousel>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Mario Kart 1.png')} alt="Cover for Mario Kart 8" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} alt="Cover for Elden Ring" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Metroid Prime 1.png')} alt="Cover for Metroid Prime Remastered" onClick={handleClick} />
                                    </Col>
                                </Row>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Mario Kart 1.png')} alt="Cover for Mario Kart 8" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} alt="Cover for Elden Ring" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Metroid Prime 1.png')} alt="Cover for Metroid Prime Remastered" onClick={handleClick} />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className="game-row">
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Mario Kart 1.png')} alt="Cover for Mario Kart 8" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Elden Ring 1.png')} alt="Cover for Elden Ring" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Hogwarts1.png')} alt="Cover for Hogwarts Legacy" onClick={handleClick} />
                                    </Col>
                                    <Col className="game-row-item">
                                        <img src={require('../Assets/Images/GameCoverPlaceholders/Metroid Prime 1.png')} alt="Cover for Metroid Prime Remastered" onClick={handleClick} />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                        {/* This is the end of the New Releases Carousel */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export { HomePage }
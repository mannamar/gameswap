import { Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { MatchItem } from './MatchItem/MatchItem';
import Navbar from './Navbar';
import './Matches.css';
import { useEffect, useState } from 'react';
import { getMatches } from '../Services/DataServices';
import { GetDigitalRoot, ResolveUserIcon } from './Navbar';

function Matches() {

    const navigate = useNavigate();

    async function handleClick(item: any, idx: number) {
        sessionStorage.setItem("ChatWith", JSON.stringify(matches[idx]));
        navigate("/Messages", {
            state: item
        });
    }

    let userData: any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    const [matches, setMatches] = useState([]);

    useEffect(() => {
        async function getData() {
            let data = await getMatches(userID);
            console.log(data);
            setMatches(data);
        }
        getData();
    }, []);

    return (
        <div>
            <Container fluid className="hero-bg-matches">
                <Navbar />
                <Row className="header-and-description">
                    <Col>
                        <h1>Matches</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className='game-matches-row'>
                    {/* <MatchItem
                        className={'pointer-hover'}
                        onClick={handleClick}
                        youRecieveCover={'Mario Odyssey 1.png'}
                        youRecieveTitle={'Super Mario Odyssey'}
                        theyRecieveCover={'Elden Ring 1.png'}
                        theyRecieveTitle={'Elden Ring'}
                        userProfilePic={'kenZodiacIcon.png'}
                        username={'Kenzodiac'}
                        starRating={5}
                        mi={2.1}
                    />
                    <MatchItem
                        className={'pointer-hover'}
                        onClick={handleClick}
                        youRecieveCover={'Mario Odyssey 1.png'}
                        youRecieveTitle={'Super Mario Odyssey'}
                        theyRecieveCover={'Elden Ring 1.png'}
                        theyRecieveTitle={'Elden Ring'}
                        userProfilePic={'nixrzIcon.png'}
                        username={'Nixrz'}
                        starRating={5}
                        mi={6.5}
                    /> */}
                    {matches.map((item, idx) => {
                        console.log(matches[idx]);
                        return (
                            <MatchItem
                                key={idx}
                                className={'pointer-hover'}
                                onClick={() => handleClick(item, idx)}
                                youRecieveCover={item['receiveCoverImg']}
                                youRecieveTitle={item['receiveGameName']}
                                theyRecieveCover={item['giveCoverImg']}
                                theyRecieveTitle={item['giveGameName']}
                                userProfilePic={ResolveUserIcon(item['tradeWithUserId'])}
                                username={item['tradeWithUsername']}
                                starRating={5}
                                mi={6.5}
                            />
                        )
                    })}
                </div>

            </Container>
        </div>
    )
}

export { Matches }
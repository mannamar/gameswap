import './Messages.css';
import { useState, createElement, useEffect } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { MessagesUser } from './MessagesUser';
import { MessageTo } from './MessageTo';
import { MessageFrom } from './MessageFrom';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import { GetDigitalRoot, ResolveUserIcon } from './Navbar';
import { getMessageHistory, sendMsg, GetAllMsgPartners } from '../Services/DataServices';
import { useLocation } from 'react-router-dom';

function Messages() {
    const [input, setInput] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [chatBar, setChatBar] = useState([]);
    const [chatRecipient, setChatRecipient] = useState('');
    const [chatRecipientId, setChatRecipientId] = useState(0);
    const [activeUser, setActiveUser] = useState(-1);

    let message: string = '';

    let userData: any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    const location = useLocation();
    let matchInfo = location.state;
    console.log(matchInfo);

    // let defaultMatchData: any = sessionStorage.getItem('ChatWith');
    let defaultMatchJson: any, defaultMatchId: any, defaultMatchUsername: any;
    if (matchInfo) {
        // defaultMatchJson = JSON.parse(defaultMatchData);
        defaultMatchId = matchInfo.tradeWithUserId;
        defaultMatchUsername = matchInfo.tradeWithUsername;
        // setChatRecipient(defaultMatchId);
    }

    useEffect(() => {
        async function getDiscussion() {
            if (defaultMatchId) {
                let data = await getMessageHistory(userID, defaultMatchId);
                console.log(data);
                setMessageList(data);
            }
        }
        async function populateChatBar() {
            let data = await GetAllMsgPartners(userID);
            console.log(data);
            setChatBar(data);
        }
        populateChatBar();
        getDiscussion();
        setChatRecipient(defaultMatchUsername);
        setChatRecipientId(defaultMatchId);
    }, []);


    const handleMessage = (e: any) => {
        setInput(e.target.value);
        // console.log(message);
    }
    const handleClick = () => {
        message = input;
        // console.log(message);
        sendMessage(message);
    }

    async function handleClickSidebar(item: any, idx: number) {
        let data = await getMessageHistory(userID, item.userId);
        console.log(data);
        defaultMatchId = item.userId;
        defaultMatchUsername = item.username;
        setChatRecipient(item.username);
        setChatRecipientId(item.userId);
        setMessageList(data);
        setActiveUser(idx);
    }

    async function sendMessage(message: string) {
        let sendMsgData = {
            "FromUserId": userID,
            "FromUsername": userJson.username,
            "ToUserId": chatRecipientId,
            "ToUsername": chatRecipient,
            "Message": message
        };
        if (message != null && chatRecipientId != null && chatRecipient != null) {
            await sendMsg(sendMsgData);
            let data = await getMessageHistory(userID, chatRecipientId);
            console.log(data);
            setMessageList(data);
            setInput('');
        }
    }

    return (
        <div>
            <Container fluid className="hero-bg-messages">
                <Navbar />
                <Row className="header-and-description">
                    <Col>
                        <h1>Messages</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="message-page-body">
                    <Col className='users-col g-0' xs={3}>
                        {matchInfo ?
                            <div className={activeUser === -1 ? "activeUser" : ""} onClick={async () => await handleClickSidebar({ userId: matchInfo.tradeWithUserId, username: matchInfo.tradeWithUsername }, -1)}>
                                <MessagesUser
                                    profilePic={ResolveUserIcon(matchInfo.tradeWithUserId)}
                                    username={matchInfo.tradeWithUsername}
                                    starRating={5}
                                />
                            </div> : null
                        }

                        {chatBar.map((item: any, idx: number) => {
                            if (matchInfo && item.userId === matchInfo.tradeWithUserId) {
                                return null;
                            }
                            if (messageList.length === 0 && idx === 0 && matchInfo === null) {
                                handleClickSidebar(item, idx);
                            }
                            return (
                                <div className={activeUser === idx ? "activeUser" : ""} key={item.id} onClick={async () => await handleClickSidebar(item, idx)}>
                                    <MessagesUser
                                        profilePic={ResolveUserIcon(item.userId)}
                                        username={item.username}
                                        starRating={5}
                                    />
                                </div>
                            )
                        })}
                    </Col>
                    <Col>
                        <Row className="message-row">
                            <Col>
                                <div className='messages'>
                                    {messageList.map((item: any, idx: number) => {
                                        return (
                                            <div>
                                                {item.fromUserId === userID ? (
                                                    <MessageTo outgoingMessage={item.message} />
                                                ) : (
                                                    <MessageFrom incomingMessage={item.message} />
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                            <Col>

                                <Row className={chatRecipientId && chatRecipient ? "" : "d-none"}>
                                    <Col xs={11}>
                                        <Form.Control as="textarea" placeholder='Type a message' rows={1}
                                            onChange={handleMessage} value={input}/>
                                    </Col>
                                    <Col xs={1}>
                                        <button className='message-send-btn'
                                            onClick={handleClick}>
                                            <PaperPlaneTilt size={25} />
                                        </button>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Messages }
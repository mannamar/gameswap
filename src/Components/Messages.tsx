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

function Messages() {
    const [ input, setInput ] = useState('');
    const [ messageList, setMessageList ] = useState([]);
    const [ chatBar, setChatBar ] = useState([]);
    // const [ chatRecipient, setChatRecipient ] = useState(0);
    let message:string = '';

    let userData: any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    let defaultMatchData: any = sessionStorage.getItem('ChatWith');
    let defaultMatchJson: any, defaultMatchId: any, defaultMatchUsername: any;
    if (defaultMatchData) {
        defaultMatchJson = JSON.parse(defaultMatchData);
        defaultMatchId = defaultMatchJson.tradeWithUserId;
        defaultMatchUsername = defaultMatchJson.tradeWithUsername;
        // setChatRecipient(defaultMatchId);
    }

    useEffect(() => {
        async function getDiscussion(){
            if (defaultMatchId) {
                let data = await getMessageHistory(userID, defaultMatchId);
                console.log(data);
                setMessageList(data);
            }
        }
        async function populateChatBar(){
            let data = await GetAllMsgPartners(userID);
            console.log(data);
            setChatBar(data);
        }
        populateChatBar();
        getDiscussion();
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

    async function handleClickSidebar(item: any){
        let data = await getMessageHistory(userID, item.userId);
        console.log(data);
        setMessageList(data);
        defaultMatchId = item.userId;
        defaultMatchUsername = item.username;
    }

    async function sendMessage (message: string) {
        let sendMsgData = {
            "FromUserId" : userID,
            "FromUsername" : userJson.username,
            "ToUserId" : defaultMatchId,
            "ToUsername" : defaultMatchJson.tradeWithUsername,
            "Message" : message
        };
        if (message != null){
            await sendMsg(sendMsgData);
        }
    }

    return(
        <div>
            <Container fluid className="hero-bg-messages">
                <Navbar/>
                <Row className="header-and-description">
                    <Col>
                        <h1>Messages</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className='users-col' xs={3}>
                        
                        {chatBar.map((item:any, idx:number) => {
                            console.log(item);
                            return(
                                <div onClick={async() => await handleClickSidebar(item)}>
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
                                    {messageList.map((item:any, idx:number) => {
                                        return(
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
                                <Row>
                                    <Col xs={11}>
                                        <Form.Control as="textarea" placeholder='Type a message' rows={1}
                                        onChange={handleMessage} />
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
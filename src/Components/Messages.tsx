import './Messages.css';
import { useState, createElement, useEffect } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { MessagesUser } from './MessagesUser';
import { MessageTo } from './MessageTo';
import { MessageFrom } from './MessageFrom';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import { GetDigitalRoot, ResolveUserIcon } from './Navbar';
import { getMessageHistory, sendMsg } from '../Services/DataServices';

function Messages() {

    let userData: any = localStorage.getItem('LoggedInUser');
    let userJson = JSON.parse(userData);
    let userID = userJson.id;

    let defaultMatchData: any = sessionStorage.getItem('ChatWith');
    let defaultMatchJson: any, defaultMatchId: any;
    if (defaultMatchData) {
        defaultMatchJson = JSON.parse(defaultMatchData);
        defaultMatchId = defaultMatchJson.tradeWithUserId;
    }

    useEffect(() => {
        async function getDiscussion(){
            if (defaultMatchId) {
                let data = await getMessageHistory(userID, defaultMatchId);
                console.log(data);
                setMessageList(data);
            }
        }
        getDiscussion();
    }, []);

    const [ input, setInput ] = useState('');
    const [ messageList, setMessageList ] = useState([]);
    let message:string = '';

    const handleMessage = (e: any) => {
        setInput(e.target.value);
        // console.log(message);
    }
    
    const handleClick = () => {
        message = input;
        // console.log(message);
        sendMessage(message);
    }

    async function sendMessage (message: string) {
        //setMessageList([...messageList, <MessageTo outgoingMessage={message} />]);
        let sendMsgData = {
            "FromUserId" : userID,
            "FromUsername" : userJson.Username,
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
                        <MessagesUser
                        profilePic={'kenZodiacIcon.png'}
                        username={'Kenzodiac'}
                        starRating={5}
                        />
                        <MessagesUser
                        profilePic={'nixrzIcon.png'}
                        username={'Nixrz'}
                        starRating={5}
                        />
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
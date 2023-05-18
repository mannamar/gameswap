import './Messages.css';
import { useState, createElement } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { MessagesUser } from './MessagesUser';
import { MessageTo } from './MessageTo';
import { MessageFrom } from './MessageFrom';
import { PaperPlaneTilt } from '@phosphor-icons/react';

function Messages() {

    const [ input, setInput ] = useState('');
    const [ messageList, setMessageList ] = useState([
        (<MessageTo outgoingMessage={'This is a test message. I would like to be sure that passing props into this component works.'} />),
        (<MessageFrom incomingMessage={'Hello. It seems that it is working well at the moment.'} />),
        (<MessageTo outgoingMessage={"That's good. Thank you for confirming it. I appreciate it."} />)
    ]);
    let message:string = '';



    const handleMessage = (e: any) => {
        setInput(e.target.value);
        // console.log(message);
    }
    

    const handleClick = () => {
        message = input;
        console.log(message);
        sendMessage(message);
    }

    function sendMessage (message: string) {
        setMessageList([...messageList, <MessageTo outgoingMessage={message} />]);
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
                        <MessagesUser />
                        <br />
                    </Col>
                    <Col>
                        <Row className="message-row">
                            <br />
                            <Col>
                                <div className='messages'>
                                    {messageList}
                                </div>
                            </Col>
                            <br />
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


interface MessageIn{
    incomingMessage: string;
}

function MessageFrom({incomingMessage}: MessageIn) {
    return (
        <div className="message-from">
            <p>{incomingMessage}</p>
        </div>
    )
}

export { MessageFrom }
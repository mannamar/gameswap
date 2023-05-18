

interface MessageOut {
    outgoingMessage: string;
}

function MessageTo({ outgoingMessage }: MessageOut) {
    return (
        <div className="message-to">
            <p>{outgoingMessage}</p>
        </div>
    )
}

export { MessageTo }
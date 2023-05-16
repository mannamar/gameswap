import { Row, Col } from "react-bootstrap"

function MessagesSent() {
  return (
    <div>
      <div className='messages'>
        <div className="message-to">
          <p>This is a sample message. Do you want to respond with a sample response?</p>
        </div>
        <div className="message-from">
          <p>Yes, I would love to respond with a sample response. Thank you for allowing me to do so.</p>
        </div>
      </div>
    </div>
  )
}

export { MessagesSent }
import { Col } from "react-bootstrap"

function WishListItem() {
    return (
        <Col className="image-with-overlay">
            <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
            {/* <div className="hover-overlay-effect"></div> */}
        </Col>
    )
}

export { WishListItem }
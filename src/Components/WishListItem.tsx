import { Col } from "react-bootstrap"

function WishListItem() {
    let gameTitle: string = 'Super Mario Odyssey';
    let releaseYear: number = 2017;
    let platform: string = 'Nintendo Switch';

    return (
        <Col xs={2} className="image-with-overlay">
            <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
            {/* <div className="hover-overlay-effect"></div> */}
            <p>{gameTitle}</p>
            <p>Released: {releaseYear}</p>
            <p>Platforms: {platform}</p>
        </Col>
    )
}

export { WishListItem }
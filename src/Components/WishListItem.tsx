import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap"

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
}

function WishListItem({ gameTitle, releaseYear, platform }: WishListItemProps) {

    return (
        <Col xs={2} className="image-with-overlay"
        >
            <div className="image-darken">
                <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
            </div>
            <p className='add-to-wishlist'>+ Add To Wishlist</p>
            <DropdownButton className='wishlist-dropdown' id="dropdown-basic-button" title="Platforms">
                <Dropdown.Item href="#/action-1">Nintendo Switch</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Atari 2600</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Phillips CD-I</Dropdown.Item>
            </DropdownButton>

            {/* <div className="hover-overlay-effect"></div> */}
            <br />
            <Row className="game-info-text">
                <Col>
                    <p>{gameTitle}</p>
                </Col>
                <Col>
                    <p>Released: {releaseYear}</p>
                </Col>
                <Col>
                    <p>Platform(s): {platform}</p>
                </Col>
            </Row>
        </Col>
    )
}

export { WishListItem }
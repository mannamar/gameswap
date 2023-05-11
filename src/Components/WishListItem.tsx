import { useState } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
}

function WishListItem({ gameTitle, releaseYear, platform }: WishListItemProps) {
    const [ open, setOpen ] = useState(false);
    const [ buttonText, setButtonText ] = useState('Platforms');

    const handleOpen = () => {
        setOpen(!open);
    };

    const handlePlatform1 = () => {
        setButtonText('Nintendo Switch');
        setOpen(!open);
    }
    
    const handlePlatform2 = () => {
        setButtonText('Atari 2600');
        setOpen(!open);
    }
    
    const handlePlatform3 = () => {
        setButtonText('Leapfrog Didj');
        setOpen(!open);
    }
    
    const handlePlatform4 = () => {
        setButtonText('Philips CD-i');
        setOpen(!open);
    }

    return (
        <Col xs={2} className="image-with-overlay"
        >
            <div className="image-darken">
                <img className="game-cover-placeholder" alt="Game cover" src={require('../Assets/Images/GameCoverPlaceholders/Mario Odyssey 1.png')} />
            </div>
            <p className='add-to-wishlist'>+ Add To Wishlist
            <DropdownButton className='wishlist-dropdown' id="dropdown-basic-button" title="Platforms">
                <Dropdown.Item href="#/action-1">Nintendo Switch</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Atari 2600</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Phillips CD-I</Dropdown.Item>
            </DropdownButton>
            </p>

            {/* <div className="hover-overlay-effect"></div> */}
            <div>
                <button className="platforms-dropdown-btn" onClick={handleOpen}>{buttonText}</button>
                { open ? (
                    <ul className="platforms-dropdown-items">
                        <li>
                            <button onClick={handlePlatform1} className="platforms-dropdown-item">Nintendo Switch</button>
                        </li>
                        <li>
                            <button onClick={handlePlatform2} className="platforms-dropdown-item">Atari 2600</button>
                        </li>
                        <li>
                            <button onClick={handlePlatform3} className="platforms-dropdown-item">Leapfrog Didj</button>
                        </li>    
                        <li>
                            <button onClick={handlePlatform4} className="platforms-dropdown-item">Philips CD-i</button>
                        </li>    
                    </ul>
                ): null}
            </div>
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
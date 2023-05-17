import { useState } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import './SearchResult.css';
import { parsePlatforms } from "../Services/ParseFunctions";

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
    imageUrl: string;
    onImgClick: any;
}

export default function SearchResult({ gameTitle, releaseYear, platform, imageUrl, onImgClick }: WishListItemProps) {

    let platformArray = platform.split(', ');

    const [gamePlatform, setGamePlatform] = useState(platformArray[0]);

    function handleChange(e : any) {
        console.log(e.target.value);
        setGamePlatform(e.target.value);
    }

    return (
        <div className="itemBox">
            <div className="imgContainer">
                <img className="gameImg" alt="Game cover" src={imageUrl} />
                <div className="overlay" onClick={onImgClick}>
                    <div className="overlayText">+ Add To Wishlist</div>
                    <select className="platDrpDwn"name="cars" id="cars" value={gamePlatform} onChange={handleChange}>
                        {platformArray.map((item, idx) => 
                            <option key={idx} value={item}>{item}</option>
                        )};
                    </select>
                </div>
            </div>
            <h5>{gameTitle}</h5>
            <span>Released: <span className="lightPurp">{releaseYear}</span></span>
            <br/>
            <span>Platforms: <span className="lightPurp">{platform}</span></span>
        </div>
    )
}
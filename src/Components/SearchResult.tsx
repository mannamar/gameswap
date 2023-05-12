import { useState } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import './SearchResult.css';

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
    imageUrl: string;
}

export default function SearchResult({ gameTitle, releaseYear, platform, imageUrl }: WishListItemProps) {


    return (
        <div>
            <div className="imgContainer">
                <img className="gameImg" alt="Game cover" src={imageUrl} />
                <div className="overlay">
                    <div className="overlayText">+ Add To Wishlist</div>
                    <select className="platDrpDwn"name="cars" id="cars">
                        <option value="Xbox">Xbox</option>
                        <option value="Switch">Switch</option>
                        <option value="PC">PC</option>
                        <option value="PS5">PS5</option>
                    </select>
                </div>
            </div>
            <h3>{gameTitle}</h3>
            <p>Released: <span>{releaseYear}</span></p>
            <p>Platform: <span>{platform}</span></p>
        </div>
    )
}
import { useState } from "react";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import './SearchResult.css';

interface WishListItemProps {
    gameTitle: string;
    releaseYear: number;
    platform: string;
    imageUrl: string;
    onImgClick: any;
}

export default function SearchResult({ gameTitle, releaseYear, platform, imageUrl, onImgClick }: WishListItemProps) {


    return (
        <div className="itemBox">
            <div className="imgContainer">
                <img className="gameImg" alt="Game cover" src={imageUrl} />
                <div className="overlay" onClick={onImgClick}>
                    <div className="overlayText">+ Add To Wishlist</div>
                    <select className="platDrpDwn"name="cars" id="cars">
                        <option value="Xbox">Xbox</option>
                        <option value="Switch">Switch</option>
                        <option value="PC">PC</option>
                        <option value="PS5">PS5</option>
                    </select>
                </div>
            </div>
            <h5>{gameTitle}</h5>
            <p>Released: <span>{releaseYear}</span></p>
            <p>Platforms: <span>{platform}</span></p>
        </div>
    )
}
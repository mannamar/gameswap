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
            <div>
                <img className="gameImg" alt="Game cover" src={imageUrl} />
            </div>
            <h3>{gameTitle}</h3>
            <p>Released: <span>{releaseYear}</span></p>
            <p>Platform: <span>{platform}</span></p>
        </div>
    )
}
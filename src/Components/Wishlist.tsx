import React, {useState, useEffect} from 'react';
import { searchForGames } from '../Services/IgdbServices';

export default function Wishlist() {

    const [input, setInput] = useState('');
    function handleKeyPress(e: any) {
        if (e.key === "Enter") {
            searchForGames(input);
        }
    }

    return (
        <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
        />
    )
}
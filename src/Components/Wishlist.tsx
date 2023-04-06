import React, {useState, useEffect} from 'react';
import { searchForGames } from '../Services/IgdbServices';

export default function Wishlist() {

    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    async function handleKeyPress(e: any) {
        if (e.key === "Enter") {
            let data = await searchForGames(input);
            setResults(data);
        }
    }

    return (

        <>
            <input
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
            />

            {results.map((item, idx) => {
                return (
                    <p key={idx}>{item['name']}</p>
                )
            })}
        </>
    )
}
import { prod, dev } from "./IgdbEnvironment";

let clientID : string;
let token : string;

if (prod.isLive) {
    clientID = prod.clientID;
    token = prod.token;
} else {
    clientID = dev.clientID;
    token = dev.token;
}

async function searchForGames(input: string) {

    console.log(input);
    console.log(clientID);
    console.log(token);
    let res = await fetch('http://localhost:8080/api.igdb.com/v4/games', {
        method: 'POST',
        headers: {'Client-ID': clientID, 'Authorization': `Bearer ${token}`},
        body: 'search "Halo"; fields name, cover.url, platforms.abbreviation, first_release_date;'
    });
    let data = await res.json();
    console.log(data);
}

export { searchForGames };
async function searchForGames(input: string) {
    console.log(input);
    let res = await fetch('https://api.igdb.com/v4/games', {
        mode: 'no-cors',
        method: 'POST',
        headers: {'Client-ID': 'p02zs3p33foe7ax0pqu8m0iy741lwg', 'Authorization': 'Bearer 28e6slf2i0idumlr0z38wezwjsx7di'},
        body: 'search "Halo"; fields name, cover.url, platforms.abbreviation, first_release_date;'
    });
    console.log(res);
}

export { searchForGames };
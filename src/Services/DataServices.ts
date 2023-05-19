let userData = {};

async function createAccount(createdUser: any) {
    const response = await fetch('https://gameswapapi.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
    });

    if (!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.text();
    return data;
}

async function loginAccount(loginUser: any) {
    const response = await fetch('https://gameswapapi.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    });

    // Check if no error for duplicate account
    if (!response.ok) {
        alert('Login failed. Check your account details.');
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    console.log(data);
    return data;
    // POST so no return needed (not getting anything)
}

async function getLoggedInUserData(username: any) {
    let response = await fetch(`https://gameswapapi.azurewebsites.net/User/UserByUsername/${username}`);
    let data = await response.json();
    userData = data;
    console.log(userData);
    return userData;
}

async function addToWishlist(saveItem: any) {
    console.log(saveItem);
    const response = await fetch('https://gameswapapi.azurewebsites.net/WishList/AddWishListItem', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(saveItem)
    });

    if (!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    return data;
}

async function getWishListItems(UserId: number) {
    const response = await fetch(`https://gameswapapi.azurewebsites.net/WishList/GetWishListItemsByUserId/${UserId}`);
    const data = response.json();
    return data;
}

async function deleteWishItem(ItemId: number) {
    const response = await fetch(`https://gameswapapi.azurewebsites.net/WishList/DeleteWishListItem/${ItemId}`, {
        method: "POST"
    });
    const data = response.json();
    return data;
}

// Trades

async function addToTrades(saveItem: any) {
    console.log(saveItem);
    const response = await fetch('https://gameswapapi.azurewebsites.net/Trade/AddTradeItem', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(saveItem)
    });

    if (!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }

    let data = await response.json();
    return data;
}

async function getTradeItems(WishId: number) {
    const response = await fetch(`https://gameswapapi.azurewebsites.net/Trade/GetTradeItemsByWishId/${WishId}`);
    const data = response.json();
    return data;
}

async function deleteTradeItem(ItemId: number) {
    const response = await fetch(`https://gameswapapi.azurewebsites.net/Trade/DeleteTradeItem/${ItemId}`, {
        method: "POST"
    });
    const data = response.json();
    return data;
}

export { createAccount, loginAccount, getLoggedInUserData, addToWishlist, getWishListItems, deleteWishItem, addToTrades, getTradeItems, deleteTradeItem, userData };
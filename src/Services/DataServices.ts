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
        // console.log(response);
        let message: string;
        if (response.status === 401){
            message = "Login failed - check your username/password"
        } else {
            message = `An error has occured ${response.status}: "${response.statusText}"`;
        }
        return message;
        //alert('Login failed. Check your account details.');
        // throw new Error(message);
    }

    let data = await response.json();
    // console.log(data);
    return data;
    // POST so no return needed (not getting anything)
}

async function getLoggedInUserData(username: any) {
    let response = await fetch(`https://gameswapapi.azurewebsites.net/User/UserByUsername/${username}`);
    let data = await response.json();
    userData = data;
    // console.log(userData);
    return userData;
}

// Wishlist

async function addToWishlist(saveItem: any) {
    // console.log(saveItem);
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

async function updateWishPlatform(ItemId: number, newPlatform: string) {
    const response = await fetch(`https://gameswapapi.azurewebsites.net/WishList/UpdateWishItemPlatform/${ItemId}/${newPlatform}`, {
        method: "POST"
    });
    const data = response.json();
    return data;
}

// Trades

async function addToTrades(saveItem: any) {
    // console.log(saveItem);
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

async function getMatches(UserId: number) {
    const response = await fetch(`https://gameswapapi.azurewebsites.net/Match/GetMatches/${UserId}`);
    const data = response.json();
    return data;
}

// Messages

async function getMessageHistory(User1Id: number, User2Id: number){
    const response = await fetch(`https://gameswapapi.azurewebsites.net/Message/GetAllMsgs2Users/${User1Id}/${User2Id}`);
    const data = response.json();
    return data;
}

async function sendMsg(message: any){
    const response = await fetch('https://gameswapapi.azurewebsites.net/Message/SendMsg', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
    if (!response.ok) {
        const message = `An Error has Occured ${response.status}`;
        throw new Error(message);
    }
    let data = await response.json();
    // console.log(data);
}

async function GetAllMsgPartners(userId: number){
    const response = await fetch(`https://gameswapapi.azurewebsites.net/Message/GetAllMsgPartners/${userId}`);
    const data = response.json();
    return data;
}

export { createAccount, loginAccount, getLoggedInUserData, addToWishlist, getWishListItems, deleteWishItem, updateWishPlatform ,addToTrades, getTradeItems, deleteTradeItem, getMatches, getMessageHistory, sendMsg, GetAllMsgPartners, userData };
let userData = {};

async function createAccount(createdUser : any) {
    const response = await fetch('https://gameswapapi.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
    });
    
    if(!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }
    
    let data = await response.text();
    return data;
}

async function loginAccount(loginUser : any) {
    const response = await fetch('https://gameswapapi.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    });
    
    // Check if no error for duplicate account
    if(!response.ok) {
        alert('Login failed. Check your account details.');
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }
    
    let data = await response.json();
    console.log(data);
    return data;
    // POST so no return needed (not getting anything)
}

async function getLoggedInUserData(username : any) {
    // Endpoint not yet working
    let response = await fetch(`https://gameswapapi.azurewebsites.net/User/UserByUsername/${username}`);
    let data = await response.json();
    userData = data;
    console.log(userData);
}

export { createAccount, loginAccount, getLoggedInUserData };

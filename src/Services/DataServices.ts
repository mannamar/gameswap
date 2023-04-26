async function createAccount(createdUser : any) {
    const response = await fetch('https://gameswapapi.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdUser)
    });
    
    // Check if no error for duplicate account
    if(!response.ok) {
        const message = `An error has occured ${response.status}`;
        throw new Error(message);
    }
    
    let data = await response.json();
    console.log(data);
    // POST so no return needed (not getting anything)
}

export { createAccount };
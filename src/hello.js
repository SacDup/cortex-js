const Cortex = require("../lib/cortex");

// When user start this from the console
if (require.main === module) {

    // Unhandled errors
    process.on("unhandledRejection", err => {
        throw err;
    });

    // Tell the console what it is doing
    // - verbose
    // - create a new Cortex client
    const verbose = process.env.LOG_LEVEL || 1;
    const options = {verbose};
    const client = new Cortex(options);

    const auth = {
        username: "stephane800",
        password: "e=KLM2Epoi",
        client_id: "oBidky9s4B6z7ndXIaauSaclMRR7Mmh6Tn1RRhOQ",
        client_secret: "SVY63AzffHoOiZrbMWgGpOosnQwRQL0D1ijU168i8uQ9AsKx5JAYIJislbHHbX7X7q926wKlAL2eRjnfzp9FEbnh5vre6z1fZQUcwCk5ZHQNoFBNTrP6RHRqW7is64nI",
        debit:1 // first time you run example debit should > 0
    };
    
    // Requests
    // - Wait for client to be ready
    // - Wait for client to be init with auth
    // - Start async process, await for resquests to fulfill
    client.ready.then(() => 
    client.init(auth).then(async () => {
        try {
            const user = await client.getUserLogin();
            console.log("User logged in : " + user[0]);
        } catch (e) {
            showError(e)
        }
        }).then(() => 
    client.close().then(console.warn("Client closed.")))
    )
    ;
}
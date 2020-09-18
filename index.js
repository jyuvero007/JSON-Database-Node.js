const Client = require("replitdb-client");
const client = new Client();
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("What do you think of node.js? ", async ans => {
  rl.question("What is your name? ", async name => {
    // Save
    await client.set(name, ans);
    console.log("Thank you for your valuable input!");
    console.log("Previous users have said:");
    // Get all data
    let data = await client.getAll();
    for (const user in data) {
      console.log(user, "has said", data[user]);
    }
  })
})
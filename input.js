
import UserList from "./store.txt";

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter your name: ", (event) => {
    if(event === "") {
        console.log("Cannot be empty");
        
    } else {
        next()
    }
    rl.close();
})

const next = () => {
    let validation 
}
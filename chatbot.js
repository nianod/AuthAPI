const { error } = require("console")






try{
    const readline = require("readline")
const replies = {
    "hello": "Yes yooh hows you",
    "how are you?": "Am good, whatsup",
    "Who are you": "Am an AI model(Chatbot)", 
    "default": "I did not undertand that"
}
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const chatbot = () => {
    rl.question("Your turn: ", (userInput)=> {

        userInput = userInput.toLowerCase();
        console.log("Chatbot ", replies(userInput) || replies["default"]);

        if(userInput === "bye") {
            rl.close();
        } else {
            chatbot();
        }
        
    })
}
} catch(error){
    console.error(error)
}
chatbot()
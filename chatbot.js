const readline = require("readline")
const replies = {
    "hello": "Yes yooh hows you",
    "how are you?": "Am good, whatsup",
    "Who are you": "Am an AI model(Chatbot)", 
    "default": "I did not undertand that"
}
const rl = readline.createInterface({
    input:process.stdin
})
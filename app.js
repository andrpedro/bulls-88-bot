var Discordie = require("discordie");
var client = new Discordie();

client.connect({
    // replace this sample token
    token: "TOKEN"
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
    if (e.message.content.toLowerCase() == "ping")
        e.message.channel.sendMessage("pong");
});
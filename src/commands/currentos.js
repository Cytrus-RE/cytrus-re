// Oxygemo/Rexogamer 2020
// I don't have any rights reserved, but the MIT License is still in place. - Oxygemo (although Rexo says the same)
const Discord = require("discord.js");
const os = require("os"); // Node.JS core module, required for getting the OS
const exec = require("child_process").exec; // This will allow us to do commands in the user shell/command prompt, which is neccesary for this to work.
exports.run = async (client, message, args, level) => {   
    try {
        var plat;
        // var ver; // Added in Node 14, don't uncomment until upgrade
        switch (new os.platform()) {
            case "win32":
                plat = "Windows";
                break;
            case "linux":
                plat = "Linux"
                break;
            case "darwin"
                plat = "Mac"
                break;
            default:
                plat = "unknown OS"
        }
        message.channel.send(`This instance of Cytrus-RE is running on **${plat}**.`);
    } catch (err) {
        message.channel.send(client.errors.genericError);
    }
    
}

exports.conf = {
    enabled: true,
    aliases: ["botos", "clientos"],
    guildOnly: false,
    permLevel: "Bot Dev"
  };
  
  exports.help = {
    name: "currentos",
    category: "System",
    description: "Checks the current operating system Cytrus-RE is running on.",
    usage: "currentos"
  };

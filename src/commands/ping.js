const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let msgPing = Math.floor(Date.now() - message.createdTimestamp);

    let embed = new Discord.MessageEmbed()
    .setTitle("**Ping**")
    .setDescription(`[🛰️] **Kato Ping**: ${msgPing}ms
[📨] **Message Ping**: ${Math.round(client.ws.ping)}ms`)
    .setColor("#00ff00");
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["lag"],
  guildOnly: false,
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "General",
  description: "Returns Cytrus-RE's ping.",
  usage: "ping"
};

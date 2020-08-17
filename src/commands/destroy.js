exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let res = await client.awaitReply(message, "Are you sure you want to destroy the client? (yes/no)");
    
    if (res == "yes") {
      message.channel.send("Shutting down...");
      client.destroy();
    }
    else message.channel.send("Stopped.");
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["botdest", "clidest"],
  guildOnly: true,
  permLevel: "Bot Admin"
};

exports.help = {
  name: "destroy",
  category: "System",
  description: "Destroys the client and logs out of Discord.",
  usage: "destroy"
};

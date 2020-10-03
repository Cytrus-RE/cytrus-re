exports.run = async (client, message, args, level) => { 
  try {
    message.channel.send("Upvoting the bot on discordbotlist.com helps other people discover Cytrus-RE! Thanks for voting!\n Vote here: https://discordbotlist.com/bots/cytrus-re");
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

//permissions and aliases

exports.conf = {
  enabled: true,
  aliases: ["vote"],
  guildOnly: false,
  permLevel: "User"
};


//what the command does

exports.help = {
  name: "upvote",
  category: "System",
  description: "Upvote the bot on Discord Bot List.",
  usage: "upvote"
};

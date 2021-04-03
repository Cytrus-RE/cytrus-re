const joke = require("one-liner-joke").getRandomJoke;

exports.run = async (client, message, args, level) => { 
  try {
    message.channel.send(joke({"exclude_tags": ["dirty", "racist", "marriage", "sex", "death"]}).body);
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["joke"],
  guildOnly: false,
  permLevel: "User"
};

exports.help = {
  name: "randomjoke",
  category: "General",
  description: "Returns a random joke.",
  usage: "randomjoke"
};

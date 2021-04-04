exports.run = async (client, message, args, level) => {
  try {
    const friendly = client.config.permLevels.find((l) => l.level === level)
      .name;
    message.reply(`your permission level is ${level} (${friendly}).`);
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["perms"],
  guildOnly: false,
  permLevel: "User",
};

exports.help = {
  name: "level",
  category: "General",
  description: "Returns your Cytrus-Re permission level.",
  usage: "level",
};

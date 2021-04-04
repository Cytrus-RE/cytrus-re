const Discord = require("discord.js");

module.exports = (client, user, userNew) => {
  let embed;
  let settings = client.getSettings(user.guild.id);

  if (!settings.logMemberUpdates == true) return;
  if (!settings.modLogChannel) return;
  if (!user.guild.channels.cache.find((c) => c.name == settings.modLogChannel))
    return;

  let modLogChannel = user.guild.channels.cache.find(
    (c) => c.name == settings.modLogChannel
  );

  if (user.nickname !== userNew.nickname) {
    embed = new Discord.MessageEmbed()
      .setTitle("User Nickname Update")
      .setColor("#eeeeee")
      .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
      .setDescription(`Old User:
•Nickname: ${user.nickname}
New User:
•Nickname: ${userNew.nickname}`);

    modLogChannel.send(embed).catch();
  }

  if (user.user.tag !== userNew.user.tag) {
    embed = new Discord.MessageEmbed()
      .setTitle("Username Update")
      .setColor("#eeeeee")
      .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
      .setDescription(`Old User:
•Full name ${user.user.tag}
New User:
•Full name: ${userNew.user.tag}`);

    modLogChannel.send(embed).catch();
  }

  if (user.roles.cache !== userNew.roles.cache) {
    let output = "";
    let outputNew = "";

    user.roles.cache.forEach((role) => {
      output += role.name + ", ";
    });

    userNew.roles.cache.forEach((role) => {
      outputNew += role.name + ", ";
    });

    if (output == outputNew) return;

    embed = new Discord.MessageEmbed()
      .setTitle("__**User Roles Update**__")
      .addField("**Username**", `${userNew.user.tag}`)
      .addField("**Old roles**", output)
      .addField("**New roles**", outputNew)
      .setFooter(`User ID: ${userNew.id} | Cytrus-RE`)
      .setColor("#eeeeee");

    modLogChannel.send(embed).catch();
  }

  if (user.user.avatarURL !== userNew.user.avatarURL) {
    embed = new Discord.MessageEmbed()
      .setTitle("User Avatar Update")
      .setFooter(`Full name: ${userNew.user.tag} | ID: ${userNew.id}`)
      .setDescription(
        `
Old Avatar URL: ${user.user.avatarURL}

New Avatar URL: ${userNew.user.avatarURL}`
      )
      .setColor("#eeeeee");

    modLogChannel.send(embed).catch();
    modLogChannel
      .send(new Discord.MessageAttachment(user.user.avatarURL, "old.png"))
      .catch();
    modLogChannel
      .send(new Discord.MessageAttachment(userNew.user.avatarURL, "new.png"))
      .catch();
  }
};

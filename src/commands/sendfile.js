const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!args[0]) return message.channel.send('You have to tell me which file to send!');
    
    message.author.send(new Discord.Attachment(fs.createReadStream('/app/' + args.join(' ')))).catch(() => {
      return message.channel.send('I couldn\'t find the file or there was an error!');
    });

    
    message.channel.send('The file has been sent to your DM\'s!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['sfl', 'sfile'],
  guildOnly: false,
  permLevel: 'Bot Manager'
};

exports.help = {
  name: 'sendfile',
  category: 'System',
  description: 'Returns the specified file',
  usage: 'sendfile <path>'
};

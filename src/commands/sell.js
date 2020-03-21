exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let sts;
    
    client.money.ensure(message.author.id, {
      money: 0,
      stone: 250
    });
    
    let stone = client.money.get(message.author.id, 'stone');
    let money = client.money.get(message.author.id, 'money');
    
    if (args[0]) {
      if (client.money.get(message.author.id, 'stone') < Number(args[0])) return message.reply('You dont have enough stone to sell!');
      else sts = Number(args[0]);
    } else sts = client.money.get(message.author.id, 'stone');
    
    client.money.set(message.author.id, stone - sts, 'stone');
    client.money.set(message.author.id, money + Math.round(sts), 'money');
    
    message.channel.send('You now have $' + client.money.get(message.author.id, 'money') + '!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'sell',
  category: 'Money',
  description: 'Sells stone',
  usage: 'sell [amount of stone]'
};
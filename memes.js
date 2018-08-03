const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let memes = ["https://i.imgur.com/wT8OmgG.jpg", "https://i.imgur.com/dOnfmmp.jpg"];

  let random = memes[Math.floor(Math.random() * memes.length)];

  let user = message.author;

  let embed = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor("Memes", user.avatarURL)
    .setDescription("Pedido por **" + user.username + "**!")
    .setImage(random)
    .setTimestamp();
  message.channel.send(embed);
}

const Discord = require('discord.js');

const client = new Discord.Client();

client.on("guildMemberAdd", async member => {
  client.channels.get(CHANNEL_PARA_EDITAR).edit({
    name: `Members: ${member.guild.members.size}`
  });
});

client.on("guildMemberRemove", async member => {
  client.channels.get(CHANNEL_PARA_EDITAR).edit({
    name: `Members: ${member.guild.members.size}`
  });
});

client.prefix(YOUR_TOKEN_HERE);

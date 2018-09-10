const Discord = require('discord.js');
const client = new Discord.Client();
const Music = require('discord.js-musicbot-addon');

Music.start(client, {
  youtubeKey: 'AIzaSyAvE9uj8jqFWuBTbCPn3kucOKp6_zord2k' ,
  prefix: "!",
  leaveAlt: ["levi", "unicorns"],
  helpCmd: "help"
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('ready', () => { client.user.setGame('Little Nightmares') })

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

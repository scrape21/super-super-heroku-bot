const Discord = require('discord.js');
const client = new Discord.Client;

let prefix = "" //prefixiniz.;
client.on("message", (message) => {
    const arg = message.content.slice(prefix.length).trim().split(/ +/g);
    const komut = arg.shift().toLowerCase();
    if(komut === "çevir") {
            var cevir = require('node-google-translate-skidz');
            let hdil = arg[0];
            if(!hdil) return message.channel.send("**Hata,** şöyle yazmalısın: `$çevir [tr/en vs.] [kelime]`");
            if(hdil.length > 2) return message.channel.send("**Hata,** şöyle yazmalısın: `$çevir [tr/en vs.] [kelime]`");
            var cevrt = arg.slice(1).join(" ");
            if(!cevrt){
                message.channel.send("Çevirmek istediğin dili yazmalıydın!");
            }
            cevir({
                text: cevrt,
                target: hdil
            }, function(result) {
                var dl = result.translation
                const embed = new Discord.RichEmbed()
                .setColor(0x00AE86)
                .addField("Çevrilmek istenen metin:", cevrt)
                .addField("Çevrilen Metin:", dl)
                .setFooter("Çeviri", message.author.avatarURL)
                 message.channel.send({embed})
                    .catch(error => message.channel.send("Bir hata oluştu!"))
            });
            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});


client.on('message', msg => {
	if (msg.content === '.roll') {
		var roll = Math.floor(Math.random() * 6) + 1; 
		msg.reply("Zar atıldı. "); 
		msg.reply(roll + " Geldi :white_check_mark:  "); 
	}
	});

client.on('message', msg => {
	if (msg.content === '.random') {
		var roll = Math.floor(Math.random() * 100) ; 
		msg.reply("1 ile 100 arasından rastgele bir sayı seçtiniz. "); 
		msg.reply(roll + " Geldi :white_check_mark: "); 
	}
});

client.on('message', message => {
    if (message.content ===  "sunucubilgi") {
        const embed = new Discord.RichEmbed()
            .addField ("Sunucu Adı", message.guild.name, true)
            
            .addField ("Sunucu ID", message.guild.id, true)
            .addField ("Sunucu Sahibi", message.guild.owner)
            .addField ("Toplam Üye Sayısı", message.guild.memberCount)
            .setFooter("Olusturma Tarihi " + message.guild.createdAt)
            .setColor(0x000001)
        return message.channel.sendEmbed(embed)
    }   
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('LET VENOM TAKE OVER!');
  }
});

client.on('message', msg => {
  if (msg.content === '.meta') {
	  msg.reply(" Today's Meta : Gragas, Ahri, Zilean ve Mustafa'nın Rammusu");
	  
	
  }
});

client.on('message', msg => {
  if (msg.content === 'fire') {
	  msg.channel.sendMessage(':fire: BURN IT DOWN :fire: ');
	
  }
});

client.on('message', msg => {
  if (msg.content === 'venom') {
	  msg.reply("We are Venom. Do you feel our power?");
	  msg.reply("Do you feel this blackened symbiote??");
	  
	
}
});

client.on('message', msg => {
  if (msg.content === 'sex') {
	  msg.reply("Can you survive Venom's bite?");
	
}
});

var s = "JavaScript syntax highlighting";

// 

client.on('ready', () => { client.user.setActivity('Little Nightmares') })

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

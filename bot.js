const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-1** ' ,' **اوامر اداريه** ')
.addField('     **#help-2**  ' ,' **اوامر عامه** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "help-1")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#clear** ' ,**مسح الشات** ')
.addField('     **#bc**  ' ,' **برودكاست** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});




client.login(process.env.BOT_TOKEN1);

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "Am";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#bc | A.`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

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

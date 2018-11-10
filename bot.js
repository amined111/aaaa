const Discord = require("discord.js");
const client = new Discord.Client();


client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted'));
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`A.`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500)
   
       
    }
    }
})

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : A.`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : A. ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`The Woken`,"http://twitch.tv/amino12a")
client.user.setStatus("dnd")
});

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
if(!message.author.id === '485917652120764429') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})

client.on('message',async message => {
  if(message.content.startsWith("!setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "chat");
    logChannel.send(`Invited by: <@${inviter.tag}>`);
  });
});


client.on("message", message => {
        var prefix = "-";// البرفكس
    if(message.content.startsWith(prefix + "setwlc")) {
        let args = message.mentions.channels.first();
            if(!args) message.channel.send("** منشن روم . :x:**").then(m => {    
m.delete(1500);
})
                if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                        message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                    client.on("guildMemberAdd", (member) => {
                            if(member.user.bot) return;
                         var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle('New Member')
    .setDescription('Welcome To Server')
    .addField('**ID Member:',"" +  member.user.id, true)
    .addField('**Tage Member:', member.user.discriminator, true)
    .addField('Created At Member', member.user.createdAt, true)
    .addField(' :bust_in_silhouette:  Your Number',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter(member.guild.name, member.guild.iconURL, true)
                         
   args.send({embed : embed});
                    });
    }
});

client.login(process.env.BOT_TOKEN1);

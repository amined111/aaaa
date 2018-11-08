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

    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا اسرفر **`)
    }
 
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'PHelp')) { 
    let pages = [`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: The Public Commands :earth_africa: 
1༺༻  $id  | Shows User ID༺༻
2༺༻  $info | Shows User Info༺༻
3༺༻  $server | Shows Server Info༺༻
4༺༻  $ping | Shows Bot Ping༺༻
5༺༻  $uptime | Shows Bot Time༺༻
6༺༻ $invite | Shows Bot Invite Link༺༻
7༺༻  $patato | Shows Bot Info༺༻
8༺༻  $avatar | Shows User Avatar༺༻
9༺༻ $savatar | Shows Server Avatar༺༻
10༺༻  $mcskin  | Shows Minecraft Players Skin༺༻
11༺༻  $say  | Repeat What Your Saying༺༻
12༺༻  $makerole  | Make Server Roles༺༻
13༺༻  $makeroom  | Make Server Roles༺༻
14༺༻  $gif  | Gives You Gif ༺༻
15༺༻  $moveall  | Move All Members To Your Channel༺༻
16༺༻  $nick  | Nick Members༺༻
17༺༻  $hack  | Hack Game༺༻
18༺༻  $type  | Shows Bot is Typeing༺༻
19༺༻  $stype  | Stops The Bot From Typeing༺༻
20༺༻  $tag  | Give You Custom Words༺༻
21༺༻  $redo  | Redoing Whats You Saying༺༻
22༺༻  $2mv  | Makeing Channel For 2m༺༻
23༺༻  $em  | Makeing Your Words In Embed༺༻
24༺༻  $credits  | Shows Your Credits༺༻
25༺༻  $daily  | You Can Get 250 Credits Everyday༺༻
26༺༻  $rep  | Gives to the user REP༺༻
27༺༻  $profile  | Shows User Profile༺༻
28༺༻  $title  | Shows User title༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go Administor Side
   `
,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
1༺༻  $clear | Clear The Chat༺༻
2༺༻  $bc | Msg Everyone In The Server༺༻
3༺༻  $kick | Kick With Reson༺༻
4༺༻  $ban | Ban With Reason༺༻
5༺༻ Make Room Called log For Logs༺༻
5༺༻ Make Room Called report For reports༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go To Bot Info
   `,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
1༺༻  There is Commands Just For NotGucci | Bot By:NotGucci༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 


client.on('message', message => {
if (message.content.startsWith(prefix + 'Help')) { /// And This is The Channel One Send The Help In Channel // Code By NotGucci
    let pages = [`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:earth_africa: The Public Commands :earth_africa: 
1༺༻  $id  | Shows User ID༺༻
2༺༻  $info | Shows User Info༺༻
3༺༻  $server | Shows Server Info༺༻
4༺༻  $ping | Shows Bot Ping༺༻
5༺༻  $uptime | Shows Bot Time༺༻
6༺༻ $invite | Shows Bot Invite Link༺༻
7༺༻  $patato | Shows Bot Info༺༻
8༺༻  $avatar | Shows User Avatar༺༻
9༺༻ $savatar | Shows Server Avatar༺༻
10༺༻  $mcskin  | Shows Minecraft Players Skin༺༻
11༺༻  $say  | Repeat What Your Saying༺༻
12༺༻  $makerole  | Make Server Roles༺༻
13༺༻  $makeroom  | Make Server Roles༺༻
14༺༻  $gif  | Gives You Gif ༺༻
15༺༻  $moveall  | Move All Members To Your Channel༺༻
16༺༻  $nick  | Nick Members༺༻
17༺༻  $hack  | Hack Game༺༻
18༺༻  $type  | Shows Bot is Typeing༺༻
19༺༻  $stype  | Stops The Bot From Typeing༺༻
20༺༻  $tag  | Give You Custom Words༺༻
21༺༻  $redo  | Redoing Whats You Saying༺༻
22༺༻  $2mv  | Makeing Channel For 2m༺༻
23༺༻  $em  | Makeing Your Words In Embed༺༻
24༺༻  $credits  | Shows Your Credits༺༻
25༺༻  $daily  | You Can Get 250 Credits Everyday༺༻
26༺༻  $rep  | Gives to the user REP༺༻
27༺༻  $profile  | Shows User Profile༺༻
28༺༻  $title  | Shows User title༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go Administor Side
   `
,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
:closed_lock_with_key: Administor Coomands:closed_lock_with_key: 
1༺༻  $clear | Clear The Chat༺༻
2༺༻  $bc | Msg Everyone In The Server༺༻
3༺༻  $kick | Kick With Reson༺༻
4༺༻  $ban | Ban With Reason༺༻
5༺༻ Make Room Called log For Logs༺༻
5༺༻ Make Room Called report For reports༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
Click On ▶ To Go To Bot Info
   `,`
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
1༺༻  There is Commands Just For NotGucci | Bot By:NotGucci༺༻
༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
   `]
 let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')

           setTimeout(() => {
        msg.delete
    }, 60 * 1000)

        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

client.login(process.env.BOT_TOKEN1);

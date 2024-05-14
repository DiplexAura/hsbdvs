
const express = require('express');
const app = express();
app.listen(() => console.log(('King Shop!')));
app.use('/ping', (req, res) => {  res.send(new Date());
});

app.listen(3000, () => {
  console.log('Bot Started !');
});



const  { Client, Collection, Intents,MessageActionRow,MessageButton,MessageEmbed,MessageSelectMenu,Permissions,Discord,EmbedBuilder,Modal,TextInputComponent, Interaction,WebhookClient,MessageFlags} 
  = require('discord.js');
  
const fs = require('fs')
const inlinereply = require('discord-reply');
const probot = require("probot-tax");
const data = require("./config.json")
const mainGuildID = require("./config.json")
const coolDown = new Set()    
const dotenv = require('dotenv')
const db = require("pro.db")
const mongoose = require("mongoose")
dotenv.config()
// the client
  let client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION "], repliedUser: false, intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

module.exports = client

	// Commands && SlashCommands && Events Handling and Initializing The Whole Project..

	client.config = data
	client.commands = new Collection();
	client.aliases = new Collection();
	client.events = new Collection();
	client.slashCommands = new Collection();
	client.queue = new Map();
	require(`./source/handlers/cmdHandler/command.js`)(client);
	require(`./source/handlers/slashHandler/slash.js`)(client);
require(`./source/handlers/eventHandler/events.js`)(client);

// handling errors 
process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});
process.on('typeError', error => {
  console.error('Unhandled type rejection:', error);
});
/*
setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("login Auto kill 1 ")
  }
}, 1 * 200 * 20);*/
const chalk = import('chalk');

client.on('ready', () =>{
   console.log("\x1b[31m", `BotName: ${client.user.tag}\nBotPrefix: / `
            );
  console.log("\x1b[32m", `Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  client.user.setActivity(client. config.Activity, {type: client.config.ActivityType})
})

mongoose.connect(process.env.mongodb).then(() => console.log("\x1b[36m", `Data Connected `));

client.login(process.env.token);

let prefix = client.config.prefix
let color = client.config.color
let line = client.config.lineurl


const ownerID = '961968225598459914'
const content = '1175884538451337277'
const talabtRoom = "1194670578779557948"
const emjTrue = "<:emoji_59:1189903807426068542>"
const emjFalse = "<:emoji_58:1189903783396913263>"
const montagat = "1193947092318683316"
const staffManagerRole = "1193948297652613150"
const discorsLeader = "1193948297652613150"
const OfficialRole = "1193948297652613150"
const discordStaff = "1193948297652613150"
const RolesRole = "1193948297652613150"

////////


////////
      let autoline_channel = ['1176243508869349446','1175884481148768366','1175884482000211969','1175884484114141277','1175884485485666435','1175884487150805072','1175884488769810462','1175884490602725396','1175884491890368553','1176391843638956063'] // ايدي الروم (تقدر تضيف اكثر من روم)
      let lineurl = `https://cdn.discordapp.com/attachments/1175884541945184416/1192336332568150046/20231227_222923.jpg?ex=65a8b4be&is=65963fbe&hm=dde02e474fe371fecb69382e55251c8d0580d1a682b7b16ba330dfccbac23061&`

      client.on(`messageCreate`, async message => {
              if(message.channel.type === "DM"|| message.author.bot) return
              if(autoline_channel.includes(message.channel.id)) {
                      message.channel.send({files : [lineurl]})
              }
     })   
/////
const TaxChannel = "1193949115055345784" 
client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (TaxChannel.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)

    const Taxembed = new MessageEmbed()
      .addField(`**السعر بدون ضريبة :**`, `${args2 - (args2 * 0.05)}`)
      .addField(`**السعر مع ضريبة :**`, `${tax}`)
      .addField(`**التحويل بدون ضريبة :**`, `${args2 - (args2 * 0.05)}`)
      .setColor(`${color}`)
      //.setColor(message.guild.me.displayColor)
      .setTimestamp()
    message.reply({ embeds: [Taxembed] })
        message.channel.send(`${lineurl}`)
  .catch((err) => {
      console.log(err.message)
    });
  }
});
///////

client.on('messageCreate', (message) => {
  if (message.channel.name === '' && !message.author.bot) {
    message.react('<:16:1183405816284463124>');
  }
});

/////////////

client.on('messageCreate', message => {
  if (message.content === (`خطط`)) {
message.channel.send(`${lineurl}`)
message.delete()
  }
})


  client.on('messageCreate', async message => {
  const allowedRoles = ['1193948297652613150', '', ''];

  if (message.content.startsWith(prefix + 'come') && message.guild) {
    const member = message.member;

    if (member && member.roles.cache.some(role => allowedRoles.includes(role.id))) {
      const args = message.content.slice(6).trim().split(/ +/);

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if (!user) {
        return message.reply('**Mention A User **')
      }

      await user.send({
        content: `
**Please Come To : **<#${message.channel.id}>
**For :** ${user}`
      })
      message.reply(`**> Done Send **`);
    }
  }
})


////


client.on("messageCreate", async message => {
if(message.content.startsWith(prefix+"setstatus")) { 
 const comp = new MessageActionRow()
 function newButton(style,customId,label){let styles = {
   azrq:"PRIMARY",rmade: "SECONDARY", 
   akdr:"SUCCESS",a7mr: "DANGER"}    
   let btn = new MessageButton().setStyle(styles[style])                        
   .setCustomId(customId).setLabel(label) 
   comp.addComponents(btn)           
   return btn;             
   }    
        let eme={
         description:"🟢 | online \n 🟡 | idle\n🔴 | dnd  "
        }
        newButton("rmade","onlinestatus","🟢")
        newButton("rmade","idlestatus","🟡")
        newButton("rmade","dndstatus","🔴")
        const sendstatu= await message.channel.send({embeds:[eme],components:[comp]})
        let filter = m => m.user.id === message.member.id;
        const c = sendstatu.createMessageComponentCollector({filter})
        c.on('collect',async(int)=>{
         if(int.isButton()) { 
            if(int.customId === 'onlinestatus') { 
                 await client.user.setStatus('online')
                 int.message.delete();
                 message.channel.send('**تم تعيين حالة البوت : 🟢**')
            } else if(int.customId === 'idlestatus') { 
             await client.user.setStatus('idle')
             int.message.delete();
             message.channel.send('**تم تعيين حالة البوت : 🟡**')
            } else if(int.customId === 'dndstatus') { 
             await client.user.setStatus('dnd')
             int.message.delete();
             message.channel.send('**تم تعيين حالة البوت : 🔴**')
            } 
         }
        })
    }
})


///////////////

client.on('messageCreate', async (message) => {
  if (message.content === prefix + 'ping') {
    const member = message.member;
    const allowedRole = message.guild.roles.cache.find(role => role.name === 'اداري');

    if (member.roles.cache.has(allowedRole.id)) {

      message.channel.sendTyping()


        const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("1")
          .setLabel(`PONG!`)
          .setStyle('SUCCESS')
          .setDisabled(true)
          .setEmoji("😉")
      );
   let circles = {
      supa: "🤯",
      zap: "⚡",
      green: "🟢",
      yellow: "🟡",
      red: "🔴",
      ew: "💢"
  }

 let ping = client.ws.ping

      const embed = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setDescription(`${ping <= 20 ? circles.supa : ping <= 40 ? circles.zap : ping <= 150 ? circles.green : ping <= 300 ? circles.yellow : ping <= 750 ? circles.red : cirles.ew} | ${ping} ms`)
        .setColor('#878787')
        .setThumbnail("https://media.discordapp.net/attachments/866865312112967710/877406174658576404/11d800c7b4c405d96e8e412163727a89.png")
        .setFooter(`Status: ${ping <= 20 ? "Extremely good" : ping <= 40 ? "Very good" : ping <= 150 ? "good" : ping <= 300 ? "bad" : ping <= 750 ? "very bad" : "Extremely bad"}!`);
        message.reply(`wait ....`).then(msg => {  msg.edit({content: ` ` , embeds: [embed] , components: [row]})});
    } else {
      message.channel.send('أنت لا تمتلك الرتبة المسموحة لاستخدام هذا الأمر.');
    }
  }
});


const obfuscator = require('javascript-obfuscator');

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ob') {
    if (!args.length) {
      return message.reply('Send Code to obfuscator and check dm');
    }
   message.delete()



    const code = args.join(' ');

    try {
      const obfuscatedCode = obfuscator.obfuscate(code).getObfuscatedCode();

      const user = await client.users.fetch(message.author.id);
      user.send(`Obfuscated code:\n\`\`\`js\n${obfuscatedCode}\`\`\`\nDont forget to rate Kimo`);
    } catch (err) {
      const user = await client.users.fetch(message.author.id);
      user.send('Erorr Please Check This Code , Check Dm');
    }
  }
});

///////////////

client.on('shardError', error => {
  console.error('A websocket connection encountered an error:', error);
});
client.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  const developer = client.users.cache.get(developerId);
  if (developer) {
    developer.send(`خطأ :\n\`\`\`${reason}\`\`\``)
      .catch(console.error);
  }
});
process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});


///////////////

client.on("messageCreate" , async message => {  
if(message.content.startsWith(prefix + "say")) {
if(!message.member.permissions.has("ADMINISTRATOR"))
if(!message.guild.me.permissions.has('ADMINISTRATOR')) {
  return message.reply("**للأسف انا لا امتلك صلاحية `ADMINISTRATOR`**");
          }
  await message.channel.sendTyping();
        let args = message.content.split(" ").slice(1).join(" ")
        if(!args) return message.reply("**يرجى وضع النص أولاً .**")
          message.delete()
          message.channel.send(`${args}`)
  await message.channel.stopTyping();
        }})

///////////////

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "staff-role")) {
    if (message.member.permissions.has("ADMINISTRATOR")) {

      let r = message.content.split(" ").slice(1).join(" ")
      let role = message.guild.roles.cache.find(r => r.id == r)
      if (!r) {
        if (!role) {
          if (isNaN(r)) {
            message.reply("> **Error : Please put the rank ID**")
          }
        }
      }
      db.set(`role_${message.guild.id}`, r)
      message.reply(`> **تم تعيين رتبة <@&${r}> مستخدم لـ زر الكلايم .**`)
    }
  }
});

client.on("channelCreate", channel => {
  if (channel.name.startsWith("ticket-")) {
    let embed = new MessageEmbed()
      .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
      .setColor("B7B7B7")
    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Claim")
        .setCustomId("idk")
        .setStyle("SECONDARY")
    )
    setTimeout(() => {
      channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${channel.id}`, m.id))

    }, 1000);
  }
});

client.on('interactionCreate', async interaction => {
    var member;
    let role = interaction.guild.roles.cache.find(role => role.id === "1175884333320523808"); // ايدي رول اللى يستلم التكت
    if(interaction.isButton){

        if(interaction.customId === `idk`){
          if(interaction.member.roles.cache.some(role => role.id === "1175884333320523808")) // حط هنا ايدي الرتبة اللى تستلم التكت
            {
            await interaction.message.delete();
        db.add(`weekuser_${interaction.member.id}`, 1)
        db.add(`alluser_${interaction.member.id}`, 1)
          const embed = new Discord.MessageEmbed()
          .setColor("B7B7B7")
          .setDescription(`**لقد تم استلام التكت من قبل <@${interaction.user.id}>**`)
          const product = new MessageActionRow()
          .addComponents(
              new MessageButton()
                  .setCustomId('idk1')
                  .setLabel('ترك التكت')
                  .setStyle('#B7B7B7'),

          )


          interaction.channel.send({ embeds: [embed], components: [product]});
          const everyone = interaction.guild.roles.cache.find(r => r.name === "♖・ Staff");
          let l1 = interaction.user;
           let l = l1
           const filter = i => i.customId === 'idk1' && i.user.id === interaction.member.id;

           const collector = interaction.channel.createMessageComponentCollector({filter});

           collector.on('collect', async i => {

            if (i.customId === 'idk1') {

            if(interaction.member.roles.cache.some(role => role.id === "1175884333320523808"))
              {
                  await i.message.delete();
                const embed = new Discord.MessageEmbed()
                .setColor("#B7B7B7")
                .setDescription(`**لقد تم ترك التكت من قبل <@${interaction.user.id}>**`);
                const product = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('idk')
                        .setLabel('استلام')
                        .setStyle('SUCCESS'),

                )
               interaction.channel.send({ content: `${role}` , embeds: [embed], components: [product]});
                const everyone = interaction.guild.roles.cache.find(r => r.name === "♖・ Staff");
                        db.subtract(`weekuser_${interaction.member.id}`, 1)
        db.subtract(`alluser_${interaction.member.id}`, 1) 


                interaction.channel.permissionOverwrites.delete(interaction.member.id)
                const unclaim = "UnClaimed"
                  interaction.channel.permissionOverwrites.edit(interaction.member.id,{SEND_MESSAGES: true})

interaction.channel.setName("ticket-" + interaction.user.username);                interaction.channel.permissionOverwrites.edit(role,{SEND_MESSAGES: true})
                 interaction.channel.setName("ticket-غير-مستلم")
                collector.stop();
                }else{
                  interaction.followUp({ 
                      content: `ماشفتك تستخدم الزر ؟`,
                      ephemeral: true 

                    })

                  return;
              }



            }

          });
          interaction.channel.permissionOverwrites.edit(interaction.member.id,{SEND_MESSAGES: true})

          interaction.channel.setName("ticket-" + interaction.user.username);
          interaction.channel.permissionOverwrites.edit('1175884333320523808',{SEND_MESSAGES: false})
          interaction.channel.permissionOverwrites.edit('1175884333320523808',{VIEW_CHANNEL: true})
          }else{
            interaction.followUp({ 
                content: `ماشفتك تستخدم الزر ؟`,
                ephemeral: true 
              })
            return;
        }
        return;
        }


    }
});


////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ad")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekuser_${user.id}`, args2)
      await db.add(`alluser_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
/////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allticket")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`alluser_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} ticket points to ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
///////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteweek_${user.id}`, args2)
      await db.add(`muteall_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
//////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allmute(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`muteall_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} mute points to ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
/////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "allwarn(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`allwarns_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
///////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "ticket(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekuser_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`alluser_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekuser_${user.id}`, args2)
await db.subtract(`alluser_${user.id}`, args2)

  const embed = new MessageEmbed()
        .setDescription(`**Done removed ${args2} ticket points from ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
/////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(+)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be added**")
      await db.add(`weekwarns_${user.id}`, args2)
      await db.add(`allwarns_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done added ${args2} warn points to ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
///////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warn(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`weekwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`allwarns_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`weekwarns_${user.id}`, args2)
      await db.subtract(`allwarns_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done removed ${args2} warn points from ${user}**`)
        .setColor("#B7B7B7")
      message.reply({ embeds: [embed] })
    }
  }
});
//////////
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mute(-)")) {
    if (message.member.roles.cache.some(r=> r.id == 1193948297652613150)) {
      let user = message.mentions.members.first()
      if (!user) return message.reply("**Error : Please mention a user**")
      if (!db.has(`muteweek_${user.id}`)) return message.reply("**This user does not have any points**")
      if (!db.has(`muteall_${user.id}`)) return message.reply("**This user does not have any points**")
      let args = message.content.split(" ").slice(2).join(" ")
      if (!args) return message.reply("**Error : Please put a number**")
      let args2 = parseInt(args)
      if (!args2) return message.reply("**Error : This is not a number that can be removed**")
      await db.subtract(`muteweek_${user.id}`, args2)
      await db.subtract(`muteall_${user.id}`, args2)
      const embed = new MessageEmbed()
        .setDescription(`**Done removed ${args2} mute points from ${user}**`)
        .setColor("#878787")
      message.reply({ embeds: [embed] })
    }
  }
});

/////////
client.on("messageCreate", message => {
  if (message.content == prefix + "claim") {

    if (message.member.permissions.has("ADMINISTRATOR")) {


      const embed = new MessageEmbed()
        .setDescription("**إضغط على الزر لتصبح مسؤول التذكرة**")
        .setColor("#878787")
        const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Claim")
          .setCustomId("idk")
          .setStyle("SECONDARY")
      )
      message.delete()
      message.channel.send({ embeds: [embed], components: [row] }).then(m => db.set(`message_${message.channel.id}`, m.id))
    }
  }

});

///////////////

client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix + 'roles')) {
    const roles = message.mentions.roles.first() || message.guild.roles.cache.find((x) => x.id == message.content.split(' ')[1]) || message.guild.roles.cache.find((x) => x.name == message.content.split(' ').slice(1).join(' '));
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      message.reply({ content: '**انت لا تمتلك صلاحيات `Administrator` !**' });
      return;
    }

    const members = roles.members.map((e) => ` <@${e.user.id}>`);
    const membersCount = roles.members.size;

    const MAX_LENGTH = 2000;
    const chunks = [];
    let currentChunk = '';

    for (const member of members) {
      if (currentChunk.length + member.length + 1 <= MAX_LENGTH) {
        currentChunk += `${member}\n`;
      } else {
        chunks.push(currentChunk);
        currentChunk = `${member}\n`;
      }
    }

    if (currentChunk) {
      chunks.push(currentChunk);
    }

    for (let i = 0; i < chunks.length; i++) {
      const content = i === chunks.length - 1 ? `**${chunks[i]}\nعددهم : \`${membersCount}\`**` : `**${chunks[i]}**`;
      await message.reply({ content });
    }
  }
});

///////////////

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3 * 1000 * 60);


/////////
let messageCount = 0;

client.on('messageCreate', async (message) => {
    if (message.content.startsWith(prefix +'start')) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("**انت لا تمتلك صلاحيات `Administrator` !**");

        try {
            const memberList = await message.guild.members.fetch();

            memberList.forEach(async (member) => {
                if (member.roles.cache.has('1193948297652613150')) {  //discord staff
                    var points = db.get(`weekuser_${member.id}`)
                    var weekwarns = db.get(`weekwarns_${member.id}`)
                    var weekmute = db.get(`muteweek_${member.id}`) // استرداد عدد الميوت الأسبوعية
                    points = parseInt(points) || 0;
                    weekwarns = parseInt(weekwarns) || 0;
                    weekmute = parseInt(weekmute) || 0;
                    messageCount++;
                    var roleToAssign = "1193948297652613150"; //discord staff
                    var roleToAssignHighStaff = "1193948297652613150"; 
                   if (!member.roles.cache.some(r => r.id == 1193948297652613150)) {
                        if (points + weekwarns + weekmute >= 60) {
                            roleToAssign = "دبل ترقية";
                        } else if (points + weekwarns + weekmute >= 40 && points + weekwarns + weekmute <= 59) {
                            roleToAssign = "ترقية";
                        } else if (points + weekwarns + weekmute >= 15 && points + weekwarns + weekmute <= 49) {
                            roleToAssign = "سكب";
                        } else if (points + weekwarns + weekmute < 15) {
                            roleToAssign = "تخفيض";
                        }
                    }
                    if (member.roles.cache.some(r => r.id == 1193948297652613150)) {
                        if (points + weekwarns + weekmute >= 80) {
                            roleToAssignHighStaff = "دبل ترقية";
                        } else if (points + weekwarns + weekmute >= 60 && points + weekwarns + weekmute <= 79) {
                            roleToAssignHighStaff = "ترقية";
                        } else if (points + weekwarns + weekmute >= 40 && points + weekwarns + weekmute < 69) {
                            roleToAssignHighStaff = "سكب";
                        }
                      else if (points + weekwarns + weekmute < 20) {
                            roleToAssignHighStaff = "تخفيض";
                        }
                    }
                    let replyMessage = `> ** الإداري : <@${member.user.id}>**\n> ** الإداري رقم : ${messageCount}**\n** عدد التكتات : ${points}\n عدد التحذيرات : ${weekwarns}\n عدد الميوتات : ${weekmute}\n مجموع النقاط الكلي : ${points + weekwarns + weekmute}**`;

                    if (!member.roles.cache.some(r => r.id == 1193948297652613150)) {
                        if (roleToAssign !== "") {
                            replyMessage += `\n** النتيجة : ${roleToAssign}**`;
                        }
                    }
                    if (member.roles.cache.some(r => r.id == 1193948297652613150)) {
                        if (roleToAssignHighStaff !== "") {
                            replyMessage += `\n** النتيجة : ${roleToAssignHighStaff}**`;
                        }
                    }

                    await message.channel.send(replyMessage);
                }
            });
        } catch (error) {
            console.error('خطأ :', error);
        }
    }
});



//// تغير اسم بوت و صوره و وصف
const owner = '961968225598459914'; // قم بتعيين معرف المالك الخاص بك هنا

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return;

  const args = message.content.trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === prefix + 'set-name' && isOwner(message.author.id)) {
    const newName = args.join(' ');
    client.user.setUsername(newName)
      .then(user => {
        console.log(`Changed bot name to ${user.username}`);
        sendConfirmationMessage(message, `تم تغيير اسم البوت إلى \`${user.username}\`.`);
      })
      .catch(console.error);
  }

  if (command === prefix + 'set-avatar' && isOwner(message.author.id)) {
    const attachment = message.attachments.first();
    if (!attachment) {
      return message.reply('يرجى إرفاق صورة لتحديث صورة البوت.');
    }

    try {
      const response = await axios.get(attachment.url, { responseType: 'arraybuffer' });
      const newAvatar = Buffer.from(response.data, 'binary');
      await client.user.setAvatar(newAvatar);
      console.log('Bot avatar updated successfully.');
      sendConfirmationMessage(message, 'تم تحديث صورة البوت بنجاح.');
    } catch (error) {
      console.error('Error updating bot avatar:', error.message);
    }
  }

  if (command === prefix + 'set-bio' && isOwner(message.author.id)) {
    const newBio = args.join(' ');
    client.user.setActivity(newBio, { type: 'PLAYING' })
      .then(presence => {
        console.log(`Changed bot bio to ${presence.activities[0].name}`);
        sendConfirmationMessage(message, `تم تحديث وصف البوت إلى \`${presence.activities[0].name}\`.`);
      })
      .catch(console.error);
  }

  if (command === prefix + 'set-bio' && isOwner(message.author.id)) {
    const newBio = args.join(' ');
    client.user.setActivity(newBio, { type: 'PLAYING' })
      .then(presence => {
        console.log(`Changed bot bio to ${presence.activities[0].name}`);
        sendConfirmationMessage(message, `تم تحديث وصف البوت إلى \`${presence.activities[0].name}\`.`);
      })
      .catch(console.error);
  }
});

function isOwner(userId) {
  return userId === ownerID;
}

function sendConfirmationMessage(message, content) {
  const embed = new MessageEmbed()
    .setColor('#878787') // لون أبيض
    .setDescription(content);

  message.channel.send({ embeds: [embed] });
        }



//// كود هيلب


//// يحسب كم له بوت شغال
client.on("messageCreate", async (message) => {
  if (message.content === prefix + "uptime") {
    if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have perms**`)
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let s = Math.floor(client.uptime / 1000) % 60;
    ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
    const embed = new MessageEmbed()
      .setColor("#878787")
      .setTitle(`uptime:`)
      .setDescription(`**${ip}**`)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
    message.reply({ embeds: [embed] })
  }
})



//// كود حسب ضريبة
client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
      console.log(err.message);
    });

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args);
    let tax = Math.floor(args2 * (20) / (19) + (1));

    message.reply(`**> ${tax}**`).catch((err) => {
      console.log(err.message);
    });
  }
});

//// كود ميوت
const ms = require("ms");

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ميوت")) {
    if (!message.member.permissions.has("1193948297652613150")) return;
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(args[1]);
    if (!user) return message.reply("يرجى منشن المستخدم.");
    let time = args[2];
    if (!time) return message.reply("يرجى تحديد الوقت.");
    let reason = args.slice(3).join(" ");
    if (!reason) return message.reply("يرجى تحديد السبب.");

    let member = message.guild.members.cache.get(user.id);
    let channel = message.guild.channels.cache.get("1175884500685824101");

    message.reply(`**تم إسكات ${user} بنجاح <:54:1183413617228533860> **`).then(() => {
      db.add(`muteweek_${message.member.id}` , 1)
      db.add(`muteall_${message.member.id}` , 1)
      channel.permissionOverwrites.create(member.id, {
        SEND_MESSAGES: false
      });
    });
const embed = new MessageEmbed()
.setTitle('<:31:1183411039321215066> Mute Order')
.setDescription(`**> <:Untitled1:1183463297010384906> الشخص : ${user}\n\n <:Untitled1:1183463297010384906> اداري : ${message.member}\n\n <:Untitled1:1183463297010384906> مدة ميوت : ${time}\n\n <:Untitled1:1183463297010384906> سبب ميوت : ${reason}**`);
const channelID = message.guild.channels.cache.get('1175884550761619477')
channelID.send({ embeds: [embed] })
    setTimeout(() => {
      channel.permissionOverwrites.create(member.id, {
        SEND_MESSAGES: true
      });
    }, ms(time));
  }
}); 


////كود امبد 
client.on("messageCreate" , async th => {

if(th.content.startsWith("e")){
if(!th.member.permissions.has("ADMINISTRATOR")){
  return th.reply(`**> You Dont Have permission **`)
}
let msg = th.content.split(" ").slice(1).join(" ")
    if(!msg)return th.reply(`> ** Put Your Message**`)
  let attach = th.attachments.first()
  if (attach){
let attachmd = new Discord.MessageEmbed()
  .setColor("#878787")
  .setDescription(msg)   .setImage(`${attach.url}`)///Rofa

   th.channel.send({embeds: [attachmd]})
  } else {
    const embed = new MessageEmbed()
.setDescription(msg)
.setColor("#878787") ///Rofa Devloper
    await th.channel.send({embeds: [embed]})

   } 

   }
 })

//// اعطاء رتبه 
client.on('messageCreate', async message => {
  if (message.content.startsWith(prefix + 'رول') && message.member.roles.cache.has(RolesRole) || message.content.startsWith('role') && message.member.roles.cache.has(RolesRole)) {
    if (message.content.startsWith(prefix + "رولات")) return false;
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if (!args) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    let row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setPlaceholder("Select Kind Of Role ..")
          .setCustomId('menu-select')
          .setMaxValues(1)
          .addOptions([
            {
              label: 'Seller Roles',
              value: 'sellR'
            },
            {
              label: 'Other Roles',
              value: 'otherR'
            }]))
    let m = await message.reply({ content: `** يرجى تحديد نوع الرتبة :**`, components: [row] })
    db.set(`giverole_${m.id}`, user.id)
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.customId == "menu-select") {
    if (interaction.values[0] === 'sellR') {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let row1 = new MessageActionRow()
          .addComponents(
            new MessageSelectMenu()
              .setPlaceholder("Select Role ..")
              .setCustomId('menu-select1')
              .setMaxValues(5)
              .addOptions([
                {
                  label: '🜲 || VIP',
                  value: '1176242822358241371'
                },
                {
                  label: '🜲 || Legendary S',
                  value: '1176226324017328239'
                },
                {
                  label: '🜲 || Excellent S',
                  value: '1176226661679771668'
                },
                {
                  label: '🜲 || Gold S',
                  value: '1175884365532762114'
                },
                {
                  label: '🜲 || Epic S',
                  value: '1175884368707866744'
                },
                {
                  label: '🜲 || Normal S',
                  value: '1176234778668834948'
                },
                {
                  label: '🜲 || Designer S',
                  value: '1175884370050027731'
                },
                {
                  label: '🜲 || Developer S',
                  value: '1175884374881869884'
                },]))
        interaction.message.edit({
          content: `** يرجى تحديد الرتبه
      :**`, components: [row1]
        })
        interaction.deferUpdate()
      }
    }
    if (interaction.values[0] === 'otherR') {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let row1 = new MessageActionRow()
          .addComponents(
            new MessageSelectMenu()
              .setPlaceholder("Select Role ..")
              .setCustomId('menu-select2')
              .setMaxValues(2)
              .addOptions([
                {
                  label: '🜲 || Trust S',
                  value: '1176251120448979034'
                },
                {
                  label: 'Warn 100%',
                  value: '1175884378593828875'
                },
                {
                  label: 'Warn 50%',
                  value: '1175884376702197911'
                },]))
        interaction.message.edit({ content: `** يرجى تحديد الرتبة :**`, components: [row1] })
        interaction.deferUpdate()
      }
    }
  }
});

client.on("interactionCreate", async interaction => {
  if (interaction.isSelectMenu()) {
    if (interaction.customId == "menu-select1") {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let rolesAdded = [];
        let rolesRemoved = [];
        let u = db.get(`giverole_${interaction.message.id}`)
        let member = interaction.guild.members.cache.find(r => r.id == u)
        let roles = interaction.values;
        for (const r of roles) {
          var s;
          const role = interaction.guild.roles.cache.find(ro => ro.id == r)
          if (role) {
            if (member.roles.cache.some(ro => ro.id == r)) {
              await member.roles.remove([role])
              rolesRemoved.push(role.name.replace(/\|\|/g, ''));
            } else {
              await member.roles.add([role])
              rolesAdded.push(role.name.replace(/\|\|/g, ''));
            }
          }
        }
        let message = `> ** تم تحديث رتب ${member}**\n`;
        if (rolesAdded.length > 0) {
          message += `> ** الرتب التي تم اضافتها : ${rolesAdded.join(' , ')}**\n > ** لاتنسى قراءة قوانين البائعين <#1175884468867833956>**`;
        }
        if (rolesRemoved.length > 0) {
          message += `> ** الرتب التي تم ازالتها : ${rolesRemoved.join(' , ')}**\n`;
        }
        interaction.message.edit({ content: `${message}`, components: [] })
        interaction.deferUpdate()
        db.delete(`giverole_${interaction.message.id}`)
      }
    }
    if (interaction.customId == "menu-select2") {
      if (interaction.member.roles.cache.has(RolesRole)) {
        let rolesAdded = [];
        let rolesRemoved = [];
        let u = db.get(`giverole_${interaction.message.id}`)
        let member = interaction.guild.members.cache.find(r => r.id == u)
        let roles = interaction.values;
        for (const r of roles) {
          var s;
          const role = interaction.guild.roles.cache.find(ro => ro.id == r)
          if (role) {
            if (member.roles.cache.some(ro => ro.id == r)) {
              await member.roles.remove([role])
              rolesRemoved.push(role.name.replace(/\|\|/g, ''));
            } else {
              await member.roles.add([role])
              rolesAdded.push(role.name.replace(/\|\|/g, ''));
            }
          }
        }
        let message = `** تم تحديث رتب ${member}**\n`;
        if (rolesAdded.length > 0) {
          message += `> ** الرتب التي تم اضافتها : ${rolesAdded.join(' , ')}**\n`;
        }
        if (rolesRemoved.length > 0) {
          message += `> ** الرتب التي تم ازالتها : ${rolesRemoved.join(' , ')}**\n`;
        }
        interaction.message.edit({ content: `${message}`, components: [] })
        interaction.deferUpdate()
        db.delete(`giverole_${interaction.message.id}`)
      }
    }
  }
});

///////////////كود كشف نصيبين 
client.on('messageCreate', async message => {
  if (message.content.startsWith('نصاب') && message.member.roles.cache.has(OfficialRole)) {
    const now = new Date();
    const guild = message.guild;
    const role = guild.roles.cache.get('1193948297652613150');
    const logChannel = await message.client.channels.fetch("1193947092318683316");
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply(`**منشن الشخص أولاً أو ضع الإيدي !**`)
    if (db.has(`scammer_${user.id}`)) return message.reply("**هذا الشخص بالفعل في قائمة النصابين !**");
    db.add(`scammer_${user.id}`, 1)
    await user.roles.set([]);
    await user.roles.add(role)
    await message.reply(`**تم إضافة ${user} إلى قائمة النصابين !**`)
    const EmbedLog = new MessageEmbed()
      .setTitle(`** Add a New Thief !**`)
      .setDescription(`> ** تم تشهير ${user} , المشرف المسؤول ${message.author} **
        ** إيدي النصاب : ${user.id}
         إيدي المشرف المسؤول : ${message.author.id} \n\n تاريخ التشهير : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${color}`)
      .setTimestamp()
    await logChannel.send({ embeds: [EmbedLog] })
    await logChannel.send(`${lineurl}`)
  }
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('ازالة') && message.member.roles.cache.has(OfficialRole)) {
    const now = new Date();
    const guild = message.guild;
    const role = guild.roles.cache.get('1193948297652613150');
    const logChannel = await message.client.channels.fetch("1193947092318683316");
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if (!db.has(`scammer_${user.id}`)) return message.reply("**هذا الشخص ليس بقائمة النصابين لإزالته !**")
    db.delete(`scammer_${user.id}`, 1)
    await user.roles.remove(role);
    await message.reply(`**تم إزالة ${user} من قائمة النصابين !**`)
    let EmbedLog = new MessageEmbed()
      .setTitle(`** Remove a New Thief !**`)
      .setDescription(`> ** تم إزالة تشهير ${user} , المشرف المسؤول ${message.author} **
** إيدي الشخص : ${user.id}
 إيدي المشرف المسؤول : ${message.author.id} \n\n تاريخ إزالة التشهير : <t:${Math.floor(now.getTime() / 1000)}:d>**`)
      .setColor(`${color}`)
      .setTimestamp()
    await logChannel.send({ embeds: [EmbedLog] })
    await logChannel.send(`${lineurl}`)
  }
});

client.on('messageCreate', async message => {
  if (message.content.startsWith('فحص') || message.content.startsWith('فحص')) {
    const args = message.content.split(' ');
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if (!user) return message.reply("**منشن الشخص أولاً أو ضع الإيدي !**")
    if (db.has(`scammer_${user.id}`)) {
      await message.reply(`** إنتبه ! هذا الشخص نصاب، الرجاء عدم التعامل معه .**`);
    } else {
      await message.reply(`**هذا الشخص ليس نصاب <:ok:1156897043621629952>  ، لكن انتبه ! هذا لا يعني أنه مضمون .. الرجاء أخذ وسيط  من هنا <#1155558458767200367>  قبل التعامل مع أي أحد .<a:Mats_love:1152757032185778186> **`);
    }
  }
});

///////////////
client.on("guildMemberAdd", async member => {
  const guild = member.guild;
  const role = guild.roles.cache.find(r => r.name === "نصاب");
  const user = guild.members.cache.find(m => m.id === member.id);
  if (role && user && db.get(`scammer_${user.id}`)) {
    try {
      await user.roles.add(role);
      console.log(`تم إعطاء الرتبة ${role.name} للعضو ${user.displayName} في سيرفر ${guild.name}`);
    } catch (error) {
      console.error(`حدث خطأ أثناء إعطاء الرتبة للعضو ${user.displayName} في سيرفر ${guild.name}: ${error}`);
    }
  }
});

////////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "points") || message.content.startsWith(prefix + "نقاط") || message.content.startsWith(prefix + "نقط")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var points = db.get(`weekuser_${user.id}`)
      var weekwarns = db.get(`weekwarns_${user.id}`)
      var allpoints = db.get(`alluser_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      var allmute = db.get(`muteall_${user.id}`)
      var weekmute = db.get(`muteweek_${user.id}`)
      if (!points) {
        points = 0
      }
      if (!weekwarns) {
        weekwarns = 0
      }
      if (!allpoints) {
        allpoints = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      if (!allmute) {
        allmute = 0
      }
      if (!weekmute) {
        weekmute = 0
      }
      const embed2 = new MessageEmbed()
        .setDescription(` **${member.user} , Points :**\n     \n>  **Week Points : \`${points + weekwarns + weekmute}\`**\n>  **All Points : \`${allpoints + allwarns + allmute}\`**\n     \n>  **Week Tickets : \`${points}\`**\n>  **Week Warns : \`${weekwarns}\`**\n>  **Week Mutes : \`${weekmute}\`**\n     \n>  **All Tickets : \`${allpoints}\`**\n>  **All Warns : \`${allwarns}\`**\n>  **All Mutes : \`${allmute}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var points = db.get(`weekuser_${message.member.id}`)
      var weekwarns = db.get(`weekwarns_${message.member.id}`)
      var allpoints = db.get(`alluser_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      var allmute = db.get(`muteall_${message.member.id}`)
      var weekmute = db.get(`muteweek_${message.member.id}`)
      if (!points) {
        points = 0
      }
      if (!weekwarns) {
        weekwarns = 0
      }
      if (!allpoints) {
        allpoints = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      if (!allmute) {
        allmute = 0
      }
      if (!weekmute) {
        weekmute = 0
      }
      const embed4 = new MessageEmbed()
        .setDescription(` **${message.member.user} , Points :**\n     \n>  **Week Points : \`${points + weekwarns + weekmute}\`**\n>  **All Points : \`${allpoints + allwarns + allmute}\`**\n     \n>  **Week Tickets : \`${points}\`**\n>  **Week Warns : \`${weekwarns}\`**\n>  **Week Mutes : \`${weekmute}\`**\n     \n>  **All Tickets : \`${allpoints}\`**\n>  **All Warns : \`${allwarns}\`**\n>  **All Mutes : \`${allmute}\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

///////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "tickets") || message.content.startsWith(prefix + "تكتات") || message.content.startsWith(prefix + "تكت")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      let points = db.get(`weekuser_${user.id}`)
      let allpoints = db.get(`alluser_${user.id}`)
      let embed1 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      const embed = new MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`0\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      const embed44 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`0\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested by : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      if (!db.has(`weekuser_${user.id}`)) return message.reply({ embeds: [embed1] })
      if (!db.has(`alluser_${user.id}`)) return message.reply({ embeds: [embedd] })
      let embed2 = new Discord.MessageEmbed()
        .setTitle(`${member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      let points = db.get(`weekuser_${message.member.id}`)
      let allpoints = db.get(`alluser_${message.member.id}`)
      let embed3 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`0\`**\n> **All Tickets : \`${allpoints}\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      const embed = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`0\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      if (!db.has(`weekuser_${message.member.id}`)) return message.reply({ embeds: [embed3] })
      if (!db.has(`alluser_${message.member.id}`)) return message.reply({ embeds: [embedd] })
      const embed4 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Points :`)
        .setDescription(`> **Week Tickets : \`${points}\`**\n> **All Tickets : \`${allpoints}\`**`)

        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

/////////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "mutes") || message.content.startsWith(prefix + "ميوتات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var mutes = db.get(`muteweek_${user.id}`)
      var allmutes = db.get(`muteall_${user.id}`)
      if (!mutes) {
        mutes = 0
      }
      if (!allmutes) {
        allmutes = 0
      }
      const embed2 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Mutes :`)
        .setDescription(`> **All Mutes : \`${allmutes}\`**\n> **Week Mutes : \`${mutes}\`**`)
        .setColor(`${colorE}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var mutes = db.get(`muteweek_${message.member.id}`)
      var allmutes = db.get(`muteall_${message.member.id}`)
      if (!mutes) {
        mutes = 0
      }
      if (!allmutes) {
        allmutes = 0
      }
      const embed4 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Mutes :`)
        .setDescription(`> **Week Mutes : \`${mutes}\`**\n> **All Mutes : \`${allmutes}\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

/////////
client.on("messageCreate", message => {
  if (message.channel.id == `${talabtRoom}`) {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "طلب")) return false;
    setTimeout(() => {
      message.delete()
    }, 3000)
  }
});

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "طلب")) {
    if (message.channel.id == `${talabtRoom}`) {
      let args = message.content.split(" ").slice(1).join(" ")
      if (!args) {
        message.reply(`**طريقة الطلب \`:\` ${prefix}طلب + طلبك**`).then(m => {
          setTimeout(() => {
            m.delete()
            message.delete()
          }, 3000)
        })
      }
      if (args) {
        let row = new MessageActionRow().addComponents(
          new MessageButton()
            .setEmoji('<:emoji_66:1189903981061869629>')
            .setCustomId("mon")
            .setStyle("SECONDARY"),
          new MessageButton()
            .setEmoji('<:emoji_65:1189903958676877344>')
            .setCustomId("des")
            .setStyle("SECONDARY"),
          new MessageButton()
            .setEmoji('<:emoji_25:1189902961544024175>')
            .setCustomId("dev")
            .setStyle("SECONDARY"),
          new MessageButton()
          .setEmoji('<:emoji_58:1189903783396913263>')
            .setCustomId("can")
            .setStyle("SECONDARY"),)
        let embed = new MessageEmbed()
          .setColor("DARK_BUT_NOT_BLACK")
          .setTitle("**مانوع طلبك : **")
          .setDescription(`**> <:emoji_66:1189903981061869629> : طلب منتجات**
**مثل : حسابات او نيترو او العاب او عملات او اي شي يخص منتجات**

**> <:emoji_65:1189903958676877344> : طلب تصاميم**
**مثل : صور سيرفر او تصميم لوجو قناه او اي شي يخص التصميم**

**> <:emoji_25:1189902961544024175> : طلب برمجات**
**مثل : مطلوب بوت قيف اواي او تصليح كود او اي شي يخص شي البرمجه**`)
          .setColor(`${color}`)
        db.set(`talab_${message.member.id}`, args)
        message.channel.send({ content: `${message.member}`, embeds: [embed], components: [row] })
        message.delete()
      }
    }
  }
})

client.on("interactionCreate", interaction => {
  if (interaction.isButton()) {
    if (interaction.customId == "mon") {
      let talab = db.get(`talab_${interaction.member.id}`)
      let number = db.fetch(`OrderMsg_${interaction.guild.id}`)
      if (!number || number === null) number = 1;
      db.add(`OrderMsg_${interaction.guild.id}`, 1)
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Delete")
          .setCustomId("del")
          .setStyle("DANGER"))
      let mon = new MessageEmbed()
        .setTitle("> **الطلب الجديد :                                                                  **")
        .setAuthor({ name: `${interaction.member.user.username}`, iconURL: interaction.member.displayAvatarURL() })
        .setDescription(`**${talab}**`)
        .setColor(`${color}`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp()
        .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() })
      interaction.guild.channels.cache.get(`${montagat}`).send({ content: `<@&1176580987304546464>\n**صاحب الطلب : ${interaction.member}**`, embeds: [mon], components: [row] })
      interaction.guild.channels.cache.get(`${montagat}`).send({ content: `${lineurl}` })
      interaction.reply("> **تم إرسال طلبك إلى البائعين، الرجاء الإنتظار ليتواصل معك أحدهم .**")
      interaction.message.delete()
        .then((reply) => {
          setTimeout(() => {
            interaction.deleteReply().catch(err => { })
          }, 5000);
        })
      db.delete(`talab_${interaction.member.id}`)
    }
    if (interaction.customId == "des") {
      let talab = db.get(`talab_${interaction.member.id}`)

      let number = db.fetch(`OrderMsg_${interaction.guild.id}`)
      if (!number || number === null) number = 1;
      db.add(`OrderMsg_${interaction.guild.id}`, 1)
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Delete")
          .setCustomId("del")
          .setStyle("DANGER"))
      let mon = new MessageEmbed()
        .setTitle("> **الطلب الجديد :**")
        .setAuthor({ name: `${interaction.member.user.username}`, iconURL: interaction.member.displayAvatarURL() })
.setDescription(`**${talab}**`)
        .setColor(`${color}`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp()
        .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() })
      interaction.guild.channels.cache.get(`1193947092318683316`).send({ content: `<@&1176580878101647406>\n**صاحب الطلب : ${interaction.member}**`, embeds: [mon], components: [row] })
      interaction.guild.channels.cache.get(`1176548443070660608`).send({ content: `${lineurl}` })
      interaction.reply("> **تم إرسال طلبك إلى المصممين، الرجاء الإنتظار ليتواصل معك أحدهم .**")
      interaction.message.delete()
        .then((reply) => {
          setTimeout(() => {
            interaction.deleteReply().catch(console.error);
          }, 5000);
        })
      db.delete(`talab_${interaction.member.id}`)
    }
    if (interaction.customId == "dev") {
      let talab = db.get(`talab_${interaction.member.id}`)

      let number = db.fetch(`OrderMsg_${interaction.guild.id}`)
      if (!number || number === null) number = 1;
      db.add(`OrderMsg_${interaction.guild.id}`, 1)
      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("Delete")
          .setCustomId("del")
          .setStyle("DANGER"))
      let mon = new MessageEmbed()
        .setTitle("> **الطلب الجديد :  **")
        .setAuthor({ name: `${interaction.member.user.username}`, iconURL: interaction.member.displayAvatarURL() })
        .setDescription(`**${talab}**`)
        .setColor(`${color}`)
        .setThumbnail(interaction.guild.iconURL())
        .setTimestamp()
        .setFooter({ text: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL() })
      interaction.guild.channels.cache.get(`1193947092318683316`).send({ content: `<@&1176580688934350900>\n**صاحب الطلب : ${interaction.member}**`, embeds: [mon], components: [row] })
      interaction.guild.channels.cache.get(`1193947092318683316`).send({ content: `${lineurl}` })
      interaction.reply("> **تم إرسال طلبك إلى المبرمجين، الرجاء الإنتظار ليتواصل معك أحدهم .**")
      interaction.message.delete()
        .then((reply) => {
          setTimeout(() => {
            interaction.deleteReply().catch(console.error);
          }, 5000);
        })
      db.delete(`talab_${interaction.member.id}`)
    }
    if (interaction.customId == "can") {
      interaction.reply("> **تم إلغاء طلبك بنجاح .**")
      interaction.message.delete()
        .then((reply) => {
          setTimeout(() => {
            interaction.deleteReply().catch(console.error);
          }, 5000);
        })
    }
    if (interaction.customId == "del") {
      if (interaction.member.roles.cache.some(r => r.id == 1193948297652613150)) {
        interaction.message.delete()
        interaction.reply({ content: `**${emjTrue} لقد تم حذف الطلب بنجاح .**`, ephemeral: true })
      }
    }
  }
});

///////////////

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "info") || message.content.startsWith(prefix + "معلومات")) {
    let embed1 = new MessageEmbed()
      .setTitle(`** Manter \`S\` Information・المعلومات**`)
      .setDescription(`**إختر من الأزرار التالية ما يناسبك.**`)
      .setColor(`${color}`)
      .setImage(`https://cdn.discordapp.com/attachments/1175884460873490563/1190028488577654865/20231227_222923.jpg?ex=65a04f65&is=658dda65&hm=7f75da5482c93d6fb66ce02b926da24c2c0ef2c013acae04bf553d5e83214fe4&`)
    let row1 = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("رتب")
        .setCustomId("roles")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setLabel("إعلانات")
        .setCustomId("ads")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setLabel("إضافات")
        .setCustomId("adds")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setLabel("منشورات مميزه")
        .setCustomId("manshorat")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setLabel("رومات خاصة")
        .setCustomId("rooms")
        .setStyle("SECONDARY"),)
    message.channel.send({ embeds: [embed1], components: [row1] })
  }
});

client.on("interactionCreate", async interaction => {
  if (interaction.customId == "roles") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let embed2 = new MessageEmbed()
      .setDescription(`** Manter \`S\` Roles・معلومات الرتب

>  Role: <@&1151903349499760641>
>  Price: 140k
>  النشر بجميع الرومات
>  نشر الصور بجميع الرومات
>  إمكانية المنشن بجميع الرومات

>  Role: <@&1151903351076823060>
>  Price: 110k
>  النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
>  نشر الصور بجميع الرومات
>  إمكانية المنشن بجميع الرومات

>  Role: <@&1151903351974396036>
>  Price: 90k
>  النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
>  نشر الصور برومات [ حسابات - ديسكورد ] فقط
>  إمكانية المنشن بجميع الرومات


>  Role: <@&1151903352922316800>
>  Price: 70k
>  النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات ]
>  عدم نشر الصور
>  إمكانية المنشن


>  Role: <@&1151903353811509359>
>  Price: 50k
>  النشر بجميع الرومات، ماعدا [ تصاميم - برمجيات - عملات - اللعاب ]
>  عدم إمكانية نشر الصور
>  عدم إمكانية المنشن


>  Role: <@&1151903354671354027>
>  Price: 40k
>  النشر بروم تصاميم فقط
>  إمكانية نشر الصور
>  إمكانية المنشن

>  Role: <@&1151903355669577758>
>  Price: 40k
>  النشر بروم برمجيات فقط
>  إمكانية نشر الصور
>  إمكانية المنشن
   ** `)
      .setColor(`${color}`)
    message.edit({ embeds: [embed2], components: [] })

    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});

//
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "ads") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let embed3 = new MessageEmbed()
      .setDescription(`** Manter \`S\` Ads・معلومات الاعلانات

>  Mention Here・منشن هير
>  200k / 10ج

>  Mention Everyone・منشن للكل
>  400k / 20ج

>  Online Broadcast・برودكاست للاونلاين ( يرسل لين يتبند )
>  600k / 30ج

>  Giveaway・في هدايا الاعلانات
>  800k / 40ج

>  Giveaway・روم خاص لسيرفرك
>  1m / 50ج

>  Private Giveaway・روم خاص لسيرفرك بـ الاسم الي تختاره و جيف اوي
>  1.5m / 75ج

>  First Room・جيف اوي اول روم في السيرفر
>  2m / 100ج
**`)
      .setColor(`${color}`)
    message.edit({ embeds: [embed3], components: [] })
    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});

//
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "adds") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let embed3 = new MessageEmbed()
      .setDescription(`**Manter \`S\` Adds ・الإضافات

> <:Dotm:1158892141691547668>  إزالة التحذيرات :

> لإزالة الوارن الواحد = 30 ألف
<:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881>
> <:Dotm:1158892141691547668> نقل الرتب :

> لنقل الرتبة من حساب لآخر = 20 الف
<:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881> 
> <:Dotm:1158892141691547668> الموثوقين | <@&1151903345624236032>

> لأخذ رتبة موثوق يجب عليك توفير 30 عملية بيع و يكون مبلغ كل عملية لا يقل عن 50 الف
>  يجب عند نشر عملية أن توثق دليل تسليم السلعة و دليل التحويل للمبلغ
<:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881><:Linem:1158892420436602881> 
**`)
      .setColor(`${color}`)
    message.edit({ embeds: [embed3], components: [] })
    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});

//
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "manshorat") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let embed3 = new MessageEmbed()
      .setDescription(`** Manter \`S\` Manshorat・المنشورات المميزه

>  Manshor Mention Here・منشور منشن هير
>  Price: 40k Credit

>  Manshor Mention Everyone・منشور منشن للكل
>  Price: 80k Credit**`)
      .setColor(`${color}`)
    message.edit({ embeds: [embed3], components: [] })
    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});

//
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "rooms") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    let fi = interaction.guild.channels.cache.filter(ch => ch.name.startsWith("〢↯・"))
    var f;
    if (fi.size < 10) {
      f = "مفتوح"
    }
    if (fi.size >= 10) {
      f = "مغلق"
    }
    let embed3 = new MessageEmbed()
      .setDescription(`** Manter \`S\` Private Rooms・الرومات الخاصة

>  Role: <@&1151903348816089118>
>  Price: 80k Credit Weekly
>  روم خاص بـ اسمك
>  تقدر تطلب و تبيع
>  تقدر تمنشن هير كل ساعتين
>  النشر في الروم بمفردك

>  الرومات المتوفرة : ${fi.size} 
>  \`${f}\` **`)
      .setColor(`${color}`)
    message.edit({ embeds: [embed3], components: [] })
    setTimeout(() => {
      interaction.channel.send(`**التحويل فقط لـ <@611364135510343748> .**`);
    }, 500);
  }
});



////////////////

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "warns") || message.content.startsWith(prefix + "تحذيرات")) {
    let user = message.mentions.members.first()
    if (user) {
      let member = message.guild.members.cache.find(u => u == user.id)
      var warns = db.get(`weekwarns_${user.id}`)
      var allwarns = db.get(`allwarns_${user.id}`)
      if (!warns) {
        warns = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      const embed2 = new MessageEmbed()
        .setTitle(`${member.user.tag}, Warns :`)
        .setDescription(`> **All Warns : \`${allwarns}\`**\n> **Week Warns : \`${warns}\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed2] })
    }
    if (!user) {
      var warns = db.get(`weekwarns_${message.member.id}`)
      var allwarns = db.get(`allwarns_${message.member.id}`)
      if (!warns) {
        warns = 0
      }
      if (!allwarns) {
        allwarns = 0
      }
      const embed4 = new MessageEmbed()
        .setTitle(`${message.member.user.tag}, Warns :`)
        .setDescription(`> **Week Warns : \`${warns}\`**\n> **All Warns : \`${allwarns}\`**`)
        .setColor(`${color}`)
        .setFooter({ text: `Requested By : ${message.member.user.tag}`, iconURL: message.member.user.displayAvatarURL() })
      message.reply({ embeds: [embed4] })
    }
  }
});

//////////////

client.on('messageCreate', async (message) => {
  if (message.content.startsWith(prefix +'top') || message.content.startsWith(prefix +'توب')) {
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1193948297652613150')) {
          var points = db.get(`alluser_${member.id}`);
          var weekwarns = db.get(`allwarns_${member.id}`);
          var weekmute = db.get(`muteall_${member.id}`);
          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });
          }
        }
      });
      usersData.sort((a, b) => b.totalPoints - a.totalPoints);
      const embed = new MessageEmbed()
        .setColor(`${color}`)
        .setTitle('**Top 10 Points :**');
      const topUsers = usersData.slice(0, 10);
      if (topUsers.length === 0) {
        embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
      } else {
        topUsers.forEach((user, index) => {
          embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Top : ${user.points + user.weekwarns + user.weekmute} **`);
        });
      }
      let rowtp = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("All")
          .setCustomId("altop")
          .setStyle("SECONDARY")
          .setDisabled(true))
        .addComponents(
          new MessageButton()
            .setLabel("Week")
            .setCustomId("wetop")
            .setStyle("SECONDARY")
            .setDisabled(false))
      await message.channel.send({ embeds: [embed], components: [rowtp] })
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }
});
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "wetop") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`weekuser_${member.id}`);
          var weekwarns = db.get(`weekwarns_${member.id}`);
          var weekmute = db.get(`muteweek_${member.id}`);

          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points + weekwarns + weekmute });
          }
        }
      });
      usersData.sort((a, b) => b.totalPoints - a.totalPoints);
      const embed = new MessageEmbed()
        .setColor(`${color}`)
        .setTitle('**Top 10 Week :**');
      const topUsers = usersData.slice(0, 10);
      if (topUsers.length === 0) {
        embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط في هذا الإسبوع .**');
      } else {
        topUsers.forEach((user, index) => {
          embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Week : ${user.points + user.weekwarns + user.weekmute} **`);
        });
      }
      let rowtpreply = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("All")
          .setCustomId("altop")
          .setStyle("SECONDARY")
          .setDisabled(false))
        .addComponents(
          new MessageButton()
            .setLabel("Week")
            .setCustomId("wetop")
            .setStyle("SECONDARY")
            .setDisabled(true))
      await message.edit({ embeds: [embed], components: [rowtpreply] });
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }
})
client.on("interactionCreate", async interaction => {
  if (interaction.customId == "altop") {
    const message = await interaction.channel.messages.fetch(interaction.message.id);
    try {
      const memberList = await message.guild.members.fetch();
      let usersData = [];
      memberList.forEach((member) => {
        if (member.roles.cache.has('1151903317811810444')) {
          var points = db.get(`alluser_${member.id}`);
          var weekwarns = db.get(`allwarns_${member.id}`);
          var weekmute = db.get(`muteall_${member.id}`);
          points = parseInt(points) || 0;
          weekwarns = parseInt(weekwarns) || 0;
          weekmute = parseInt(weekmute) || 0;
          if (points > 0 || weekwarns > 0 || weekmute > 0) {
            usersData.push({ user: member.user, points, weekwarns, weekmute, totalPoints: points });
          }
        }
      });
      usersData.sort((a, b) => b.totalPoints - a.totalPoints);
      const embed = new MessageEmbed()
        .setColor(`${colorE}`)
        .setTitle('**Top 10 Points :**');
      const topUsers = usersData.slice(0, 10);
      if (topUsers.length === 0) {
        embed.setDescription('**لا يوجد أعضاء يمتلكون نقاط .**');
      } else {
        topUsers.forEach((user, index) => {
          embed.addField(`**#${index + 1} | **`, `**<@${user.user.id}> - ${user.points} Tickets - ${user.weekwarns} Warns - ${user.weekmute} Mutes - All Points : ${user.points + user.weekwarns + user.weekmute} **`);
        });
      }
      let rowtpreply = new Discord.MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("All")
          .setCustomId("altop")
          .setStyle("SECONDARY")
          .setDisabled(true))
        .addComponents(
          new MessageButton()
            .setLabel("Week")
            .setCustomId("wetop")
            .setStyle("SECONDARY")
            .setDisabled(false))
      await message.edit({ embeds: [embed], components: [rowtpreply] });
    } catch (error) {
      console.error('حدث خطأ :', error);
    }
  }

})

/////////

client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  const now = new Date()
  if (message.content.startsWith(prefix + 'sub')) {
    if (message.member.roles.cache.some(r => r.id == 1193948297652613150)) {
      let prv = message.guild.roles.cache.find(r => r.id == 1193948297652613150)
      let Emoji = message.guild.roles.cache.find(r => r.name == "-〢Ads Manager")
      let discordstaff = message.guild.roles.cache.find(r => r.name == "-〢Ads Manager")
      let args = message.content.split(" ")
      let member = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      if (!args[1]) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!member) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (db.has(`prvuser_${member.id}`)) return message.reply(`${emjFalse} | **هذا الشخص يمتلك بالفعل روم خاص**`)
      if (!args[2]) return message.reply(`${emjFalse} | **حدد مدة الروم !**`)
      if (!args[2].endsWith("d")) {
        if (!args[2].endsWith("h")) {
          if (!args[2].endsWith("m")) {
            return message.reply(`${emjFalse}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
          }
        }
      }
      if (isNaN(args[2][0])) return message.reply(`${emjFalse} | **حدد وقت صحيح !**`)

      message.reply(`${emjTrue} **| تم إنشاء روم خاص لـ ${member} لمدة \`${args[2]}\`**`)

      const embed = new MessageEmbed()
        .setDescription(`** Haven \`S\` Private Rooms・الرومات الخاصه**\n\n> ** صاحب الروم : <@${member.id}> **

> ** صنع بواسطة : ${message.member} **

> ** صنع في : <t:${Math.floor(now.getTime() / 1000)}:d> **

> ** ينتهي في : <t:${Math.floor((now.getTime() + ms(args[2])) / 1000)}:R> **

> ** مدة الروم : ${args[2]} **
`)
        .setColor(`${color}`)
      let mm = await message.guild.channels.create(`〢↬・${member.user.username}`, { type: "text" })
        .then(async m => {
          m.setParent(message.guild.channels.cache.find(r => r.id == 1193947091806986271))
          member.roles.add([prv]).catch(err => { })
          db.set(`prvuser_${member.id}`, member.id)
          db.set(`prvroom_${m.id}`, member.id)
          m.permissionOverwrites.edit(message.guild.roles.everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: true
          })

          m.permissionOverwrites.edit(Emoji, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: true
          })
          m.permissionOverwrites.edit(discordstaff, {
            MANAGE_MESSAGES: true,
          })
          m.permissionOverwrites.edit(member.id, {
            SEND_MESSAGES: true,
            MENTION_EVERYONE: true,
            ATTACH_FILES: true
          })

          m.send({ content: `<@${member.id}>`, embeds: [embed] })
          db.push(`room`, {
            server: message.guild.id,
            id: member.id,
            endsAt: Date.now() + ms(args[2]),
            channelid: m.id
          })
        });
    }
  }
});

async function saleh() {
  if (db.has(`room`)) {
    const data = await db.get(`room`)
    for (const x of data) {
      let end = x.endsAt
      let g = await x.server
      if (end < new Date()) {
        const guild = await client.guilds.cache.get(g)
        const channel = await guild.channels.cache.find(r => r.id == x.channelid)
        await db.set(`enduser_${x.id}`, x.id)
        await db.set(`endroom_${x.channelid}`, x.channelid)

        await channel.bulkDelete(100);


        const embed = new MessageEmbed()
          .setDescription(`** Haven S Rooms Ended・إنتهاء الروم**\n> ** لقد انتهت مدة هذا الروم، لديك مهلة 24 ساعه لتجديده ..**\n> ** للتجديد تواصل مع <#1175884505911939212> .**`)
          .setColor(`${colorE}`)
          .setTimestamp()
        channel.permissionOverwrites.edit(guild.members.cache.get(x.id), {
          SEND_MESSAGES: false,
        })
        await channel.send({ content: `<@${x.id}>`, embeds: [embed] })

        const index = data.indexOf(x);
        if (index !== -1) {
          data.splice(index, 1);
          await db.set('room', data);
        }
      }
    }
  }
}
setInterval(async () => {
  saleh()
}, 10000)

client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  const now = new Date()
  if (message.content.startsWith(prefix + 'renew')) {
    if (message.member.roles.cache.some(r => r.id == 1193948297652613150)) {
      let prv = message.guild.roles.cache.find(r => r.id == 1193948297652613150)

      let member = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      let channel = message.mentions.channels.first() || message.guild.channels.cache.find(r => r.id == args[2])
      if (!args[1]) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!member) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!channel) return message.reply(`${emjFalse} | **منشن الروم !**`)
      if (!args[2]) return message.reply(`${emjFalse} | **منشن الروم !**`)

      if (!args[3]) return message.reply(`${emjFalse} | **حدد مدة الروم !**`)
      if (!args[3].endsWith("d")) {
        if (!args[3].endsWith("h")) {
          if (!args[3].endsWith("m")) {
            return message.reply(`${emjFalse}** | حدد الوقت بالأيام - بالساعات أو بالدقائق**`)
          }
        }
      }
      if (isNaN(args[3][0])) return message.reply(`${emjFalse} | **حدد وقت صحيح !**`)

      if (!db.has(`enduser_${member.id}`)) return message.reply(`${emjFalse} | **هذا الشخص لا يمتلك روم منتهي**`)
      if (!db.has(`endroom_${channel.id}`)) return message.reply(`${emjFalse} | **هذا الروم ليس منتهي**`)

      message.reply(`${emjTrue} **| تم تجديد الروم ${channel} لـ ${member} لمدة \`${args[3]}\`**`)
      db.set(`prvuser_${member.id}`, member.id)
      db.set(`prvroom_${channel.id}`, member.id)
      let embed = new MessageEmbed()
        .setDescription(`** Haven \`S\` Private Rooms・الرومات الخاصه**\n\n> ** صاحب الروم : <@${member.id}> **

> ** تم التجديد بواسطة : ${message.member} **

> ** تم التجديد في : <t:${Math.floor(now.getTime() / 1000)}:d> **

> ** ينتهي في : <t:${Math.floor((now.getTime() + ms(args[3])) / 1000)}:R> **

> ** مدة الروم : ${args[3]} **
`)
        .setColor(`${color}`)
      channel.bulkDelete(100)
      member.roles.add([prv]).catch(err => { })
      db.delete(`enduser_${member.id}`)
      db.delete(`endroom_${channel.id}`)
      channel.permissionOverwrites.edit(member.id, {
        SEND_MESSAGES: true
      })
      channel.send({ content: `<@${member.id}>`, embeds: [embed] })
      db.push(`room`, {
        server: message.guild.id,
        id: member.id,
        endsAt: Date.now() + ms(args[3]),
        channelid: channel.id
      })
    }
  }
});

client.on("messageCreate", async message => {
  const args = message.content.split(" ")
  if (message.content.startsWith(prefix + 'close')) {
    if (message.member.roles.cache.some(r => r.id == 1193948297652613150)) {
      let prv = message.guild.roles.cache.find(r => r.id == 1193948297652613150)
      let member = message.mentions.members.first() || message.guild.members.cache.find(r => r.id == args[1])
      let channel = message.mentions.channels.first() || message.guild.channels.cache.find(r => r.id == args[2])
      if (!args[1]) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!member) return message.reply(`${emjFalse} | **منشن شخص !**`)
      if (!channel) return message.reply(`${emjFalse} | **منشن الروم !**`)
      if (!args[2]) return message.reply(`${emjFalse} | **منشن الروم !**`)
      if (!db.has(`prvuser_${member.id}`)) return message.reply(`${emjFalse} | **هذا الشخص ليس لديه روم خاص**`)
      await message.reply(`${emjTrue} | **تم حذف الروم ${channel.name} للشخص ${member} .**`)
      await channel.delete()
      await member.roles.remove([prv])
      if (db.has(`enduser_${member.id}`)) {
        await db.delete(`enduser_${member.id}`)
      }
      if (db.has(`endroom_${channel.id}`)) {
        await db.delete(`endroom_${channel.id}`)
      }
      if (db.has(`prvuser_${member.id}`)) {
        await db.delete(`prvuser_${member.id}`)
      }
      if (db.has(`prvroom_${channel.id}`)) {
        await db.delete(`prvroom_${channel.id}`)
      }
      if (db.has(`room`)) {
        const data = await db.get(`room`)
        for (const x of data) {
          if (x.id == member.id) {
            if (x.channelid == channel.id) {
              const index = data.indexOf(x);
              if (index !== -1) {
                data.splice(index, 1);
                await db.set('room', data);
              }
            }
          }
        }
      }
    }
  }
});

client.on("channelDelete", async channel => {
  if (db.has(`prvroom_${channel.id}`)) {
    let member = channel.guild.members.cache.find(r => r.id == db.get(`prvroom_${channel.id}`))
    if (db.has(`enduser_${member.id}`)) {
      await db.delete(`enduser_${member.id}`)
    }
    if (db.has(`endroom_${channel.id}`)) {
      await db.delete(`endroom_${channel.id}`)
    }
    if (db.has(`prvuser_${member.id}`)) {
      await db.delete(`prvuser_${member.id}`)
    }
    if (db.has(`prvroom_${channel.id}`)) {
      await db.delete(`prvroom_${channel.id}`)
    }
    if (db.has(`room`)) {
      const data = await db.get(`room`)
      for (const x of data) {
        if (x.id == member.id) {
          if (x.channelid == channel.id) {
            const index = data.indexOf(x);
            if (index !== -1) {
              data.splice(index, 1);
              await db.set('room', data);
            }
          }
        }
      }
    }
  }
});

/////////////////

client.on("messageCreate", message => {
  if (message.content == prefix + "setup") {
    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("apply")
        .setEmoji("<:emoji_56:1189903692833501276>")
        .setStyle("SECONDARY")
    )
    let embed = new MessageEmbed()
      .setTitle("Haven S Staff Apply ・تقديم الإدارة")     .setDescription(`<:emoji_39:1189903267782733905> **نموذج تقديم : <:emoji_56:1189903692833501276> 

> <:emoji_62:1189903874492989460> اسمك ؟
> <:emoji_62:1189903874492989460> عمرك ؟
> <:emoji_62:1189903874492989460> من وين ؟
> <:emoji_62:1189903874492989460> كم مدة تفاعلك في اليوم ؟
> <:emoji_62:1189903874492989460> هل كنت اداري من قبل في سيرفر شوب؟ 
 <:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725>  
يمنع ان تكون اداري في سيرفر اخر في حال تم قبولك في ادارتنا .
التقديم مره وحدة فقط تقدم اكتر من مرة = رفضك . 
يمنع الإستهبال بالتقديم .
ماتحط شعار مرفوض . 
 للتقديم اضفط على ( <:emoji_56:1189903692833501276>  ) .
<:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725><:emoji_40:1189903289677000725>  
 <:emoji_39:1189903267782733905>  شعار هو : 
! Haven丶Name**`)
      .setColor(`${color}`)
    message.delete()
    message.channel.send({ components: [row], embeds: [embed] })
  }
});

const cooldown = new Set()

const discordModals = require('discord-modals');
discordModals(client);
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'apply') {
    if (cooldown.has(interaction.member.id)) return interaction.reply({ content: "Cooldown !", ephemeral: true })
    let user = db.get(`user_${interaction.member.id}`)
    if (db.has(`userapply_${interaction.member.id}`)) return interaction.reply({ content: "**انت بالفعل على قائمة المقدمين !**", ephemeral: true })
    if (interaction.member.roles.cache.some(r => r.id == 1193948297652613150) || interaction.member.roles.cache.some(r => r.id == 1193948297652613150)) return interaction.reply({ content: "**انت بالفعل اداري**", ephemeral: true })
    const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals');

    const modal = new Modal()
      .setCustomId('modal')
      .setTitle('نموذج التقديم :')
      .addComponents(
        new TextInputComponent()
          .setCustomId('name')
          .setLabel("ما اسمك ؟")
          .setRequired(true)
          .setPlaceholder("ادخل اسمك هنا")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('age')
          .setRequired(true)
          .setPlaceholder("ادخل عمرك من هنا")
          .setLabel("كم عمرك ؟")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('country')
          .setRequired(true)
          .setPlaceholder("ادخل بلدك من هنا")
          .setLabel("من وين ؟")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('active')
          .setRequired(true)
          .setPlaceholder("ادخل هنا مدة تفاعلك")
          .setLabel("مدة تفاعلك باليوم ؟")
          .setStyle('SHORT'),

        new TextInputComponent()
          .setCustomId('shop')
          .setRequired(true)
          .setPlaceholder("ادخل هنا خبرتك و هل كنت اداري في سيرفر شوب اخر")
          .setLabel("هل كنت اداري في سيرفر شوب من قبل ؟")
          .setStyle('LONG')

      )

    showModal(modal, {
      client: client,
      interaction: interaction,
    });

  }
});

client.on('modalSubmit', async modal => {
  if (modal.customId == "modal") {
    let ch = db.get(`channel_${modal.guild.id}`)
    let channel = modal.guild.channels.cache.find(c => c.id == 1193947092318683316)
    const name = modal.getTextInputValue("name")
    const age = modal.getTextInputValue("age")
    const country = modal.getTextInputValue("country")
    const active = modal.getTextInputValue("active")
    const shop = modal.getTextInputValue("shop")

    let row = new MessageActionRow().addComponents(
      new MessageButton()
        .setEmoji(`${emjTrue}`)
        .setCustomId("acc")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setEmoji(`${emjFalse}`)
        .setCustomId("dec")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setEmoji("🤐")
        .setCustomId("time")
        .setStyle("SECONDARY")
    )
    const embed = new MessageEmbed()
      .setAuthor({ name: `${modal.member.user.username}`, iconURL: `${modal.member.user.displayAvatarURL()}` })
      .setFooter({ text: modal.guild.name, iconURL: modal.guild.iconURL() })
      .setTimestamp()
      .setThumbnail(modal.guild.iconURL())
      .setTitle("**تقديم جديد !**")
      .setDescription(`**الشخص : <@${modal.member.id}>**\n\n>  **الاسم : ${name}**\n\n>  **العمر : ${age}**\n\n>  **البلد : ${country}**\n\n>  **مدة التفاعل : ${active}**\n\n>  **خبرته في سيرفرات الشوب : ${shop}**`)
      .setColor(`${color}`)
    modal.reply({ content: "تم ارسال تقديمك !", ephemeral: true })
    channel.send({ content: `${modal.member}`, embeds: [embed], components: [row] }).then(m => {
      db.set(`userapply_${modal.member.id}`, modal.member.id)
      db.set(`userm_${m.id}`, modal.member.id)
    })
  }
});

client.on("interactionCreate", interaction => {
  if (interaction.isButton()) {
    if (interaction.customId == "acc") {
      if (!interaction.member.roles.cache.some(r => r.id == 1193948297652613150)) return interaction.reply({ content: "**ما تقدر تستعمل هذا الامر**", ephemeral: true })
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let role = interaction.guild.roles.cache.find(r => r.id == "1191724280203968512")
      let embed = new MessageEmbed()
        .setDescription(`**تقديم مقبول من : ${member} ${emjTrue}**`)
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setColor(`${color}`)
        .setTimestamp()
      member.roles.add([role]).catch(err => { })
      member.send(`**لقد تم قبول تقديمك !**\n**الرجاء مراجعة هذه الرومات و حفظ ما فيها :**\n<#1175884531774001243> | <#1175884518113157220>`).catch(err => { })
      interaction.message.edit({ content: `${member}`, embeds: [embed], components: [] })
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
    if (interaction.customId == "dec") {
      if (!interaction.member.roles.cache.some(r => r.id == 1193948297652613150)) return interaction.reply({ content: "**ما تقدر تستعمل هذا الامر**", ephemeral: true })
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let embed = new Discord.MessageEmbed()
        .setDescription(`**تقديم مرفوض من : ${member} ${emjFalse}**`)
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setColor(`${color}`)
        .setTimestamp()
      interaction.message.edit({ content: `${member}`, embeds: [embed], components: [] })
      member.send(`**لقد تم رفض تقديمك ! الرجاء عدم التقديم مرة ثانية لتجنب الميوت .**`).catch(err => { })
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
    if (interaction.customId == "time") {
      if (!interaction.member.roles.cache.some(r => r.id == 1193948297652613150)) return interaction.reply({ content: "**ما تقدر تستعمل هذا الامر**", ephemeral: true })
      let user = db.get(`userm_${interaction.message.id}`)
      let member = interaction.guild.members.cache.get(user)
      let embed = new MessageEmbed()
        .setDescription(`**لقد تم اسكات : ${member} 🤐**`)
        .setAuthor({ name: member.user.username, iconURL: member.user.displayAvatarURL() })
        .setFooter({ text: interaction.guild.name, iconURL: interaction.guild.iconURL() })
        .setColor(`${color}`)
        .setTimestamp()
      interaction.message.edit({ content: `${member}`, embeds: [embed], components: [] })
      member.send(`**لقد تم اسكاتك !**`).catch(err => { })
      member.timeout(86400000).catch(err => { })
      db.delete(`userapply_${db.get(`userm_${interaction.message.id}`)}`)
      db.delete(`userm_${interaction.message.id}`)
    }
  }
});

//////////////////

const warnWork = `1193947092318683316`
const cooldown1 = 10000;
const cooldown2 = new Map();

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تحذير")) {
if (cooldown2.has(message.content)) {
      const timeLeft = cooldown1 - (Date.now() - cooldown2.get(message.content));
      if (timeLeft > 0) {
        return message.reply(`** يجب عليك إنتظار ${Math.ceil(timeLeft / 1000)} ثانية لإستخدام هذا الأمر ..
 يجب التأكد من عدم تكرارك مخالفة شخص تمت مخالفته من قبل زميلك**`);
      }
    }
cooldown2.set(message.content, Date.now());
    if(message.content.startsWith(prefix + "تحذيرات")) return false;
    const wait = require('node:timers/promises').setTimeout;
    if (warnWork.includes(message.channel.id)) {
      const now = new Date()
    let madri = `(=)`
    let channel = message.guild.channels.cache.find(r => r.id == 
                                                   1193947092318683316);
    let s1 = message.guild.roles.cache.find(r => r.name == "Warn 50%");
    let s2 = message.guild.roles.cache.find(r => r.name == "Warn 100%");

    let excellent = message.guild.roles.cache.find(r=>r.name == "🜲 || Legendary S")
    let legendry = message.guild.roles.cache.find(r=>r.name == "🜲 || Excellent S")
    let epic = message.guild.roles.cache.find(r=>r.name == "🜲 || Gold S")
    let rare = message.guild.roles.cache.find(r=>r.name == "🜲 || Epic S")
    let normal = message.guild.roles.cache.find(r=>r.name == "🜲 || Normal S")
    let designer = message.guild.roles.cache.find(r=>r.name == "🜲 || Designer S")
    let developer = message.guild.roles.cache.find(r=>r.name == "🜲 || Developer S")
    let prv = message.guild.roles.cache.find(r=>r.name == "🜲 || VIP ")
    let rolesToCheck = ["🜲 || Legendary S" , "🜲 || Excellent S" , "🜲 || Gold S" , "🜲 || Epic S" , "🜲 || Normal S" , "🜲 || Designer S" , "🜲 || Developer S" , "🜲 || VIP"]
    let args = message.content.split(" ")
    let user = message.mentions.members.first() || message.guild.members.cache.find(r=>r.id ==      args[1])
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!user) return message.reply(`**${emjFalse} يرجى وضع منشن الشخص أولاً !**`)
    const roles = user.roles.cache;
    const roleNames = Array.from(roles.values()).map(role => role.name);
    const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
    if(rolesUserHas.length === 0) return message.reply(`**${emjFalse} هذا الشخص لا يمتلك رتب بيع**`)
    if(!reason) return message.reply(`** ${emjFalse} يرجى وضع السبب أولاً !**`)
    if(!message.attachments.size) return message.reply(`**${emjFalse} يرجى وضع الدليل أولاً !**`)

    if(!user.roles.cache.some(r=>r.name == "Warn 50%") && !reason.includes(`(=)`)) {
    message.reply(`**${emjTrue} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : Warn 50%\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      const a = attachmentFiles.join(`\n`)
      channel.send(`${lineLink}`);
      const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
 user.roles.add("1175884376702197911")

    }
    if(user.roles.cache.some(r=>r.name == "Warn 50%") && !reason.includes(`(=)`)) {
      if(!user.roles.cache.some(r=>r.name == "Warn 100%") && !reason.includes(`(=)`)) {
      message.reply(`**${emjTrue} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : Warn 100%\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
       channel.send(`${lineurl}`);
        const a = attachmentFiles.join(`\n`)
        const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));

      user.roles.add("1175884378593828875")

    }
    }
    if(user.roles.cache.some(r=>r.name == "Warn 100%") && !reason.includes(`(=)`)) {
            user.roles.remove([Legendary,Excellent,Gold,Epic,Normal,Designer,Developer,VIP])
                message.reply(`**${emjTrue} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : سحب رتبة\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      const a = attachmentFiles.join(`\n`)
      const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));

      channel.send(`${lineurl}`);
    }
    if(reason.includes(`(=)`)) {
                message.reply(`**${emjTrue} تم إعطاء التحذير لـ ${user} !**`)
    db.add(`weekwarns_${message.member.id}` , 1)
    db.add(`allwarns_${message.member.id}` , 1)
     const attachments = Array.from(message.attachments.values());
      const attachmentFiles = attachments.map((attachment) => attachment.url);
    channel.send({content:`** الشخص : ${user}\n\n الإداري : ${message.member}\n\n نوع التحذير : سحب رتبة\n\n السبب : ${reason}\n\n الدليل :**` , files:attachmentFiles})
      channel.send(`${lineLink}`);
      const a = attachmentFiles.join(`\n`)
      const roles = user.roles.cache;
      const roleNames = Array.from(roles.values()).map(role => role.name);
      const rolesUserHas = rolesToCheck.filter(role => roleNames.includes(role));
              user.roles.remove([Legendary,Excellent,Gold,Epic,Normal, Designer, Developer,VIP])

    }
      }
  }
});



client.on("messageCreate", async (message) => {
  if(message.content === prefix +"اخفاء"){
    let args = message.content.split(" ")
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel
    channel.permissionOverwrites.create(message.guild.id, {
      VIEW_CHANNEL: false
    })
    message.reply({content:`تم اخفاء روم ${channel} بنجاح`})
    message.delete();
  }
})

client.on("messageCreate", async (message) => {
  if(message.content === prefix + "اظهار"){
    let args = message.content.split(" ")
    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel
    channel.permissionOverwrites.create(message.guild.id,{
      VIEW_CHANNEL: true
    })
    message.reply({content:`تم اظهار روم ${channel} بنجاح`})
    message.delete();
  }
})


client.on("messageCreate", async function (message) {
  if (message.content.toLowerCase().startsWith(prefix +`help`)) {
    
    const embed = new MessageEmbed()
      .setColor("#878787")
      //
      .setThumbnail(message.guild.iconURL())

      .setFooter({
        text: message.author.tag,
        iconURL: message.author.displayAvatarURL({ dynamic: true }),
      })

      .setTimestamp().setDescription(`**
-  خطط : يرسل خط 
- ${prefix} come : نداء شخص
- ${prefix} setstatus : تعين حالة بوت 
- ${prefix} say : تكلم عبر بوت
- ${prefix} claim : استلام تكت 
- ${prefix} roles : يطلع كم شخص له رتبه محدده 
- ${prefix} start : يفحص اداري
- ${prefix} tax : يحسب ضريبة 
- ${prefix} ميوت : يعطي ميوت 
- ${prefix} e : تكلم عبر بوت عن طريق امبد 
- ${prefix} رول : يعطي رول لـ شخص
- ${prefix} نصاب : تشهير نصاب 
- ${prefix} ازالة : يشيل نصاب
- ${prefix} فحص : فحص شخص نصاب او لا
- ${prefix} points : نقاط اداره
- ${prefix} tickets : نقاط استلام تكت 
- ${prefix} mutes : نقاط ميوتات
- ${prefix} info : معلومات رتب و اعلانات و رومات خاصه و منشورات مميزة 
- ${prefix} warns : نقاط تحذيرات
- ${prefix} top : توب اداره 
- ${prefix} sub : صنع روم خاص 
- ${prefix} renew : تجديد روم خاص 
- ${prefix} close : حدف روم خاص 
- ${prefix} setup : يرسل تقديم ادارة
- ${prefix} تحذير : تحذير شخص 
- ${prefix} اخفاء : اخفاء روم 
- ${prefix} اطهار : اطهار روم 
- ${prefix} ad : اضافه نقطه الى نقاط تكتات  
- ${prefix} allticket : اضافه نقطه الى مجموع نقاط تكتات 
- ${prefix} mute(+) : اضافه نقطه الى نقاط ميوتات 
- ${prefix} allmute(+) : اضافه نقطه الى مجموع نقاط ميوتات
- ${prefix} allwarn(+) : اضافه نقطه الى مجموع نقاط تحذيرات
- ${prefix} ticket(-) : ازالة نقطه من نقاط تكتات 
- ${prefix} warn(+) : اضافه نقطه الى نقاط تحذيرات
- ${prefix} warn(-) : ازالة نقطه من نقاط تحذيرات 
- ${prefix} mute(-) : ازالة نقطه من نقاط ميوتات
**`);

    message.reply({ embeds: [embed] });
  }
});



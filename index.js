const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs")
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Bot Online!')
    bot.user.setActivity('Watching 67 Discord Servers!', { type: "WATCHING" }).catch(console.error)

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() == 'js')

        if(jsfile.length == 0) {return console.log("Could not find any commands!")}

        jsfile.forEach(f => {
            let probs = require(`./commands/${f}`);
            bot.commands.set(probs.help.name, probs)
        })
    }) 
})

bot.on('message', (message) => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!';
    let MessageArray = message.content.split(' ')
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if(!message.content.startsWith(prefix)) return;

    if(cmd == 'hello') {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('hello');} else {
            message.channel.send('Hello ${member.user.tag}')
        }
        message.channel.send('Hello')
    }

    if(!message.content.startsWith(prefix)) return;
    
    if(cmd == 'test') {
        message.channel.send('Test')
    }

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run(bot,message,args)}

    if(cmd == 'Redbird') {
        message.channel.send('Make sure to check our Redbird! He created the Utilities bot and is also working on creating other bots. Go check out his link tree for more details! https://linktr.ee/Redbirdexpress')
    }

    if(cmd == 'redbird') {
        message.channel.send('Make sure to check our Redbird! He created the Utilities bot and is also working on creating other bots. Go check out his link tree for more details! https://linktr.ee/Redbirdexpress')
    }

    if(cmd == 'games') {
        message.channel.send('Hey there! We have games coming very soon! Like we have counting and then we have other games like Pokémon and Dank memer coming very soon! ')
    }

    if(cmd == 'bot') {
        message.channel.send('This bot was created by Redbird#2792! This is current version 1.0!')
    }


})

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
    setTitle('Welcome to my server!')
    setDescription(`Thank you for joining my server! Make sure to stay active and talk to the other members!\nCurrent Member Count: ${member.guild.memberCount}`)
})

bot.login("ODE1ODYxNjIzMzU2Nzg0NjQw.YDykWA.puE-X6jI_mmMayGdSiIGDeZ36mo")
'use strict'

const Discord = require('discord.js')
const bot = new Discord.Client()

const _TOKEN = INSERTYOURTOKEN
const _PREFIX = "/tts"

bot.on('ready', () => {
  console.log('I am ready!')
})

bot.on('message', msg => {
  //The bot ignores messages that don't start with the prefix or are from a bot
	if (!msg.content.startsWith(_PREFIX) || msg.author.bot) {return}
  
  let botNickname = msg.guild.members.get(bot.user.id).nickname
	let msgContent = msg.content.split(" ")[1]
	let msgAuthor = msg.member.nickname
	
	msg.guild.members.get(bot.user.id).setNickname(msgAuthor)
	
	msg.channel.sendMessage(msgContent, {tts:true})
	  .then(message => msg.guild.members.get(bot.user.id).setNickname(botNickname))
    .catch(console.error)
  
  msg.guild.members.get(bot.user.id).setNickname(botNickname)
  
})

bot.login(_TOKEN)
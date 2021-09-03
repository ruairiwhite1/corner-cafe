import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'

const token = require('../token.json')
const client = new DiscordJS.Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
    console.log('Corner Cafe Online!')
})

client.login(token.Token)
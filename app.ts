require('dotenv').config()

require('./server')
//import { Mongo } from './mongo'
//Mongo()

import { Play } from './components/play'
import { Menu } from './components/menu'
import { Wallet } from './components/wallet'

import { Scenes, Telegraf } from 'telegraf'

const token = process.env.BOT_TOKEN
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

if (process.env.PROVIDER_TOKEN === undefined) {
  throw new TypeError('PROVIDER_TOKEN must be provided!')
}

const bot = new Telegraf<Scenes.WizardContext>(token)
Menu(bot)
Play(bot)
Wallet(bot)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
import path = require("path")

const Play = (bot) => {
  const playButton = Markup.keyboard([
    [{
       text: '💸  Колесо фортуны',
       web_app: {url: 'https://192.168.0.16:3000/fortune-wheel'},        
     },
     {
       text: '💸  Слоты',
       web_app: {url: 'https://192.168.0.16:3000/slots'},              
     }],
     ['🔙 Назад']
  ]).resize()

  bot.hears('🎰 Играть',(ctx) => ctx.replyWithHTML('<b>Выбирай игру!</b>\nЖми на кнопку 👇', playButton))
}
export { Play }
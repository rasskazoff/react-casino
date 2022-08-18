const { Telegraf, Markup } = require('telegraf')

const Menu = (bot) => {
  const mainButton = 
  Markup.keyboard([
    ['🎰 Играть'],
    ['💳  Кошелек', '❓ Помощь'],
  ])
  .oneTime()
  .resize()

bot.start((ctx) => ctx.replyWithHTML('Выбери пункт меню 👇', mainButton))
bot.hears('🔙 Назад',(ctx) => ctx.replyWithHTML('Выбери пункт меню 👇', mainButton))
bot.hears('❓ Помощь',(ctx) => ctx.replyWithHTML('Тут нету нихуя'))
}

export { Menu }
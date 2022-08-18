/* eslint-disable @typescript-eslint/no-floating-promises */
import { Composer, Markup, Scenes, session, Telegraf } from 'telegraf'
import { user } from './models/user'

const Wallet = (bot) => {
const stepHandler = new Composer<Scenes.WizardContext>()

let sum = 0

stepHandler.on('text', async (ctx) => {
  sum = Number(ctx.message.text.split(',')[0].split('.')[0].replace(/[^0-9]/g,""))
  const amount = Number(sum+'00')
  
  const invoice = {
    provider_token: process.env.PROVIDER_TOKEN,
    start_parameter: 'time-machine-sku',
    title: 'Пополнение кошелька',
    description: 'После покупки игровой валюты ее можно использовать в играх бота',
    currency: 'rub',
    photo_url: 'https://img.clipartfest.com/5a7f4b14461d1ab2caaa656bcee42aeb_future-me-fredo-and-pidjin-the-webcomic-time-travel-cartoon_390-240.png',
    is_flexible: false,
    prices: [
      { label: 'Пополнение кошелька', amount: amount },
    ],
    payload: JSON.stringify({
      coupon: ''
    })
  }
  
  const replyOptions = Markup.inlineKeyboard([
    Markup.button.pay('💸 Перейти к оплате'),
  ])

  if ( sum >= 100 ){
    await ctx.replyWithInvoice(invoice, replyOptions)
    return await ctx.scene.leave()
  }else{
    await ctx.reply('Ошибка. Введите сумму пополнения от 100 до 10 000 р.')
  }
})

const walletScene = new Scenes.WizardScene(
  'wallet-scene',
  async (ctx) => {
    await ctx.reply(
      'Введите сумму пополнения от 100 до 10 000 р.',
    )
    return ctx.wizard.next()
  },
  stepHandler,
)

const walletActions = 
  Markup.keyboard([
    ['💰 Баланс', '💳  Пополнить'],
    ['🔙 Назад']
  ]).oneTime().resize()

  bot.hears('💰 Баланс', async (ctx) => {     
    const obj = await user.find({_id: ctx.from.id})
    const balance = obj.length > 0 ? obj[0].balance : 0
    ctx.replyWithHTML(`Ваш баланс: ${balance} рублей`, walletActions)
  })
  bot.hears('💳  Кошелек',(ctx) => ctx.replyWithHTML('Выбери пункт меню 👇', walletActions))
  bot.on('pre_checkout_query', (ctx) => ctx.answerPreCheckoutQuery(true))
  bot.on('successful_payment', async (ctx) =>{
    const total_amount = ctx.message.successful_payment.total_amount
    const obj = await user.find({_id: ctx.from.id})
    const balance = (obj.length > 0 ? obj[0].balance : 0) + total_amount/100

    console.log(`Успешная оплата! Баланс:${balance}`),
    
    //поиск пользователя по id telegram, если не найден создать нового
    (async () => {
      await user.updateOne(
        {
          '_id': ctx.from.id
        },
        {
          '_id': ctx.from.id,
          'name': ctx.from.username,
          'balance': balance
        },
        { upsert: true })
      
    })()
  })

const stage = new Scenes.Stage<Scenes.WizardContext>([walletScene])
bot.use(session())
bot.use(stage.middleware())

bot.hears('💳  Пополнить', async (ctx) => {
  ctx.scene.enter('wallet-scene')
  console.log(`Инициализация платежа пользователем ${ctx.from.username} id: ${ctx.from.id}`)
})

}

export { Wallet }
const tgWebApp = () => {
    return new Promise((resolve, reject) => { 
    try {
      
        const windowWebApp = () => {
          const tg = window.Telegram.WebApp
          resolve(tg)
      }

        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js'
        script.id = 'telegram'
        script.async = true
        script.onload = () => windowWebApp()
        
        if (!window.Telegram) {      
          document.body.appendChild(script)
        }else{
          windowWebApp()
        }
    }
    catch (err) {
      console.error(err);
    }
    })  
}

const AppBtn = async (addBalance) => {
  const tg = await tgWebApp()
  
  if (addBalance){
      tg.MainButton.setParams({"text":"Пополнить баланс","color": "#009688","textColor":"#ffffff" })
      tg.MainButton.show()
      tg.onEvent('mainButtonClicked', () => {
        tg.sendData('💳  Пополнить')            
      })      
  }

}

export { tgWebApp , AppBtn }
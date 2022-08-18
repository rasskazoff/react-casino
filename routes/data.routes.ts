const {Router} = require('express')
const router = Router()

router.post( '/post',
    async (req, res) => {
     console.log(req.body) 
     await res.json();
       try{
            const {name} = req.body
            res.status(200).json({message: 'ок'})
       } catch{
            res.status(500).json({message: 'что-то пошло не так'})
       }
    }
)
console.log('файл data.routes')

module.exports = router
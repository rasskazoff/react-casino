const { Schema , model} = require('mongoose')

const games = model('games', new Schema({
    name: {
        type: String,
        required: true,
    },
    jackpot: {
        type: Number,
        required: true,
    }
}))

export { games }
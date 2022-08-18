const { Schema , model} = require('mongoose')

const casino = model('casino', new Schema({
    balance: {
        type: Number,
        required: true,
    }
}))

export { casino }
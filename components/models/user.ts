const { Schema , model} = require('mongoose')

const user = model('users', new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}))

export { user }
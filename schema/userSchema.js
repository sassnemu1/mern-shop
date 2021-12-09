const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    mail: { type: String, require:true },
    mail_index: { type: Number, require:true },
    login: { type: String, require:true },
    password: { type: String, require:true },
    shopping_card: { type: Number, ref:'shopping_card' } 
})

module.exports = mongoose.model('users', userSchema)
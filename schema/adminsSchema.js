const mongoose = require('mongoose')

const adminsSchema = mongoose.Schema({
    login: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    token: { type: Boolean, require: true },
})  

module.exports = mongoose.model('admins', adminsSchema)
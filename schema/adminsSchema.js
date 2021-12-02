const mongoose = require('mongoose')

const adminsSchema = mongoose.Schema({
    name: { type: String, require: true },
})  

module.exports = mongoose.model('admins', adminsSchema)
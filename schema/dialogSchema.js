const mongoose = require('mongoose')

const dialogSchema = mongoose.Schema({
    name: { type: String, require: true },
})  

module.exports = mongoose.model('dialog', dialogSchema)
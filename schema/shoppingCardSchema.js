const mongoose = require('mongoose')

const shoppingCardSchema = mongoose.Schema({
    name: { type: String, require: true },
})  

module.exports = mongoose.model('shopping_card', shoppingCardSchema)
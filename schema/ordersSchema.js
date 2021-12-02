const mongoose = require('mongoose')

const ordersSchema = mongoose.Schema({
    name: { type: String, require: true },
})  

module.exports = mongoose.model('orders', ordersSchema)
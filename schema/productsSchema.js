const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name: { type: String, require: true },
    brend: { type: String, require: true },
    imgURL: { type: String, require: true },
    price: { type: Number, require: true },
    gender: { type: String, require: true },
    urlName: { type: String, require: true }
})  

module.exports = mongoose.model('products', productsSchema)
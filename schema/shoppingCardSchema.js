const mongoose = require('mongoose')

const shoppingCardSchema = mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId, ref:'user' },
    product_id: [{ tupe: Schema.Types.ObjectId, ref:'product' }]
})  

module.exports = mongoose.model('shopping_card', shoppingCardSchema)
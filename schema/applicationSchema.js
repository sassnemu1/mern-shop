const mongoose = require('mongoose')

const applicationSchema = mongoose.Schema({
    name: { type: String, require: true },
})  

module.exports = mongoose.model('application', applicationSchema)
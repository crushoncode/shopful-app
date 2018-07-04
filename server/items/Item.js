const mongoose = require('../db/connectdb')
const { Schema }  = mongoose

const itemSchema = new Schema({
        name: {
                type: String,
                required: true,
                unique: true
        },
        description: {
                type: String,
                required: true
        }
})

const Item = mongoose.model('Items', itemSchema)

module.exports = Item


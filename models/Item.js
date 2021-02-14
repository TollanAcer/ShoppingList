const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
// Item = mongoose.model('item', ItemSchema)
// .....................(model name, Schema)
module.exports = Item = mongoose.model('item', ItemSchema)
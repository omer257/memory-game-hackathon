var mongoose = require('mongoose');

//design the schema below
let cardSchema = new mongoose.Schema({
    name: String,
    state: Number,
    img_url: String
});


let Card = mongoose.model('card', cardSchema)

module.exports = Card


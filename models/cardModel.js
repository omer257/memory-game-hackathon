var mongoose = require("mongoose");
var Schema = mongoose.Schema

let cardSchema = new Schema ({
    img_url: String,
    name: String,
    state: Number
});
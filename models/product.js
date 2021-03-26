//destructure Schema and model from our connection
const {Schema, model} = require("../db/connection");

/////////////////////////////////////
//Define our Schema
/////////////////////////////////////

const ProductSchema = new Schema({
    name: {type: String, require: true},
    description: String,
    img: String, // <---- this will hold an image url
    price: {type: Number, min: 0},
    qty: {type: Number, min: 0}
})

/////////////////////////////////////
//Define our Model
/////////////////////////////////////

const Product = model("Product", ProductSchema)

/////////////////////////////////////
//Export our Model
/////////////////////////////////////

module.exports = Product
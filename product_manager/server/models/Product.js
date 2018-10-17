
let mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Product title is required."], minlength: [3, "Title must be 4 or more characters."] },
    price: { type: Number, required: [true, "Price is required"]},
    image_url: {type: String}

}, { timestamps: true })

mongoose.model('Product',ProductSchema);
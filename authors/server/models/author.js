
let mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Author name is required"], minlength: [3, "Author name must be longer than 3 characters"] }
}, { timestamps: true })
// var Author = mongoose.model('Author', AuthorSchema);
mongoose.model('Author', AuthorSchema);
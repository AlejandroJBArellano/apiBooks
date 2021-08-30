const { Schema, model } = require("mongoose");

const typical = {
    type: String,
    required: true
}

const Book = new Schema({
    title: typical,
    author: typical,
    date: typical,
    totalPages: Number,
})

module.exports = model("Book", Book)
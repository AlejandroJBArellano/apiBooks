const Book = require("../models/Book"),
get = {};

get.all = async (req, res) => {
    const books = await Book.find()
    res.json(books)
};

get.specific = async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.json(book)
}

module.exports = get
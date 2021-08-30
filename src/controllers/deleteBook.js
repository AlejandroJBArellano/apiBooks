const Book = require("../models/Book");

const deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    res.json({message: "deleted succesfully"})
}

module.exports = deleteBook;
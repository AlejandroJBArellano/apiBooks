const Book = require("../models/Book");

const put = (req, res) => {
    const { title, author, date } = req.body;
    title = title.trim()
    author = author.trim()
    date = date.trim()
    totalPages = totalPages.trim();
    totalPages = parseInt(totalPages)
    const request = {
        title, author, date, totalPages
    }
    await Book.findByIdAndUpdate(req.params.id, request, {new: true, rawResult: true});
}
module.exports = put
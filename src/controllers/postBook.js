const Book = require("../models/Book");

const post = async (req, res) => {
    const { title, author, date, totalPages } = req.body
    title = title.trim()
    author = author.trim()
    date = date.trim()
    totalPages = totalPages.trim();
    totalPages = parseInt(totalPages)
    const request = {
        title, author, date, totalPages
    }
    const newBook = new Book(request)
    if(newBook.validate()) {
        await newBook.save();
        res.json({message: "Book succesfully saved!"})
    }
};

module.exports = post;
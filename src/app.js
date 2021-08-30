require("dotenv").config()

const express = require("express"),
morgan = require("morgan"),
cors = require("cors"),
router = require("./routes/index"),

app = express();

app.set("port", process.env.PORT)

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(router)

module.exports = app
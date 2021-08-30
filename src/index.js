require("dotenv").config()

const app = require("./app");
require("./database")

app.listen(app.get("port"), _ => {
    console.log(`Backend listening on port ${app.get("port")}`)
})


const app = require("express").Router()
const path = require("path")



//Starting page to load notes
app.get("/notes", (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});





module.exports = app
const app = require("express").Router()
const fs = require("fs")
let notes = require("../db/db.json")

// get route to load notes.html
app.get ("/notes", (req, res) => {
    console.log("YO!");
    res.json(notes)
})

// post route for adding a new note
app.post('/notes', (req, res) => {

console.log(req.body.id)
  req.body.id = Math.floor(Math.random() * 4792)

  notes.push(req.body)
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) throw err
  })

  res.json(req.body);
     
  });
  


module.exports = app
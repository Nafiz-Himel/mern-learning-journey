// routes/item.js

const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Got a Get Request");

}).post('/items', (req, res) => {
    res.json({ x: 1, y: 2, z: 3 });

}).put('/items/:id', (req, res) => {
    res.send("Got a Put Request");

}).delete("/items/:id", (req, res) => {
    res.send("Got a Delete Request");

})

module.exports = router
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


//all about request


//get requests
// app.get("/", (req,res) => {
//     // res.send("Got a Get Requests");
//     res.sendFile('./dummy.html', {root:__dirname});
// }).post('/items', (req,res) =>{
//     // res.send("Got a Post Requests");
//     res.json({x:1, y:2, z:3})
// }).put('/items/:id', (req,res) =>{
//     res.send("Got a Put Requests");
// }).delete("/items/:id", (req,res) =>{
//     res.send("Got a Delete Requests");
// })


// import items router
const items = require('./routes/item');
const birds = require('./routes/birds');
// use items router
app.use('/api', items);
app.use('/filler', birds);



// -> /api/ -> item home page
// -> /api/items -> item post request
// -> /api/items/id -> put/delete request

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

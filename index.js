const express = require("express")
const app = express()
const port = 3000
// get api
app.get('/', function (req, res) {
  res.send('Hello World123')
})
app.get('/login/', function (req, res) {
  res.send('Welcome to login page')
})
app.get('/admin/', function (req, res) {
  res.send('Welcome to admin page')
})
app.get('/', function (req, res) {
  res.send('Hello World123')
})

// app.listen(port, displayMessage())
// function displayMessage(){
//   console.log("My project is running . . . . .")
// }
app.listen(port, ()=>{console.log("My project is running . . . . .")})


// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
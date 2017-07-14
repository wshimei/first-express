const express = require('express')
const app = express()

// all request will have to go thru this middleware
// all request will have to know that the public folder is where we put our static files
app.use(express.static('public'))

// app.use(function (req, res, next) {
//   console.log('second middleware')
//   next()
// })

// listening for request
app.get('/', function (req, res) {
  res.send('index.html')
})

app.get('/about/:name/', function (req, res) {
  res.send(req.params)
})

app.get('/faq', function (req, res) {
  res.send('MY FAQ')
})

var port = process.env.PORT || 5000

app.listen(port, function () {
  console.log('express is running')
})

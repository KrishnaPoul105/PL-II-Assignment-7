const express = require('express')
const app = express()
const port = 4000
app.get('/', function (req, res) {
    res.send('root')
  })                                //Simple Root Path
app.get('/example/a', function (req, res) {
  res.send('This Is Single call-back function')
})
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello From Call-back function b ')
})
var a0 = function (req, res, next) {
  console.log('A0')
  next()
}

var a1 = function (req, res, next) {
  console.log('A1')
  next()
}

var a2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [a0, a1, a2])

app.listen(port, () => {
  console.log('app listening at http://localhost:${port}')
})

//app.get('', function (req, res) {
//    res.send(req.params)
//  })                              //Parameters

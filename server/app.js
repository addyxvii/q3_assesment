var Express = require("express")
var Socket = require("socket.io")
var http = require("http")
var axios = require('axios')
var db = require('monk')('localhost/realState')
var warroom = require ('warroomclient/warroom-client.js')

var app = Express()
var server = http.Server(app)
var io = Socket(server)

io.on("connection", function (socket) {
  setInterval(function () {
    axios.get('http://galvanize-warroom-status.herokuapp.com/')
      .end(function (data) {
        db.get('houses').find().then(function (houses) {
          socket.emit("server", {
            body: data.body,
            average: average,
            time: new Date()
          })
        })
      })
  }, 3000)
})

app.use(Express.static("./client"))

app.get('/galvanize-warroom/overview', function (request, response) {
  unirest.get('http://galvanize-warroom-status.herokuapp.com/')
    .end(function (data) {
      Promise.all(
        data.body.map(function (house) {
          return db.get('houses').insert(house)
        })
      ).then(function (result) {
        response.json(data.body)
      })
    })
})

server.listen(8080, function () {
  console.log("listening on 8080")
})

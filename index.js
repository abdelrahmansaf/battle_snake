const bodyParser = require('body-parser')
const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.get('/', handleIndex)
app.post('/start', handleStart)
app.post('/move', handleMove)
app.post('/end', handleEnd)

app.listen(PORT, () => console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`))


function handleIndex(request, response) {
  var battlesnakeInfo = {
    apiversion: '1',
    author: '',
    "color": "#00ff99",
    "head": "snowman",
    "tail": "curled"
  }
  response.status(200).json(battlesnakeInfo)

function handleStart(request, response) {
  var gameData = request.body

  console.log('START')
  response.status(200).send('ok')
}

function handleMove(request, response) {
  var gameData = request.body

  

  //***************************** */
  if (gameData.you.head.y != 0 && gameData.you.head.y != 10 && gameData.you.head.x != 0 && gameData.you.head.x != 10) {
    var possibleMoves = ['up', 'down', 'left', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    console.log("*!!!* move de base")
  }if (gameData.you.body[0].x > gameData.you.body[1].x) {
    var possibleMoves = ['up', 'right', 'down']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    console.log("** move de base")
  }if (gameData.you.body[0].y < gameData.you.body[1].y) {
    var possibleMoves = ['down', 'right', 'left']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    console.log("** move de base")
  }if (gameData.you.body[0].y > gameData.you.body[1].y) {
    var possibleMoves = ['up', 'right', 'left']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    console.log("** move de base")
  }if (gameData.you.body[0].x < gameData.you.body[1].x) {
    var possibleMoves = ['up', 'left', 'down']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    console.log("** move de base")
  }
  

 //************************************* */
  // Si il est en bas 
  if (gameData.you.head.y == 0 && gameData.you.body[1].y > 0) {
    var possibleMoves = ['left', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 0 && gameData.you.body[1].y == 0 && gameData.you.body[1].x < gameData.you.body[0].x) {
    var possibleMoves = ['up', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 0 && gameData.you.body[1].y == 0 && gameData.you.body[1].x > gameData.you.body[0].x) {
    var possibleMoves = ['up', 'left']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 0 && gameData.you.body[0].y == 0) {
    var possibleMoves = ['up', 'left', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 0 && gameData.you.head.x == 0 && gameData.you.body[1].y == 0 && gameData.you.body[1].x == 0) {
    var possibleMoves = ['up','right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 0 && gameData.you.head.x == 0 && gameData.you.body[1].y > gameData.you.head.y && gameData.you.body[1].x == 0) {
    var possibleMoves = ['right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 0 && gameData.you.head.x == 0 && gameData.you.body[1].y == 0 && gameData.you.body[1].x > gameData.you.head.x) {
    var possibleMoves = ['up']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }






  // si il est en haut
  if (gameData.you.head.y == 10) {
    var possibleMoves = ['left', 'right', 'down']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 10 && gameData.you.body[0].y > gameData.you.body[1].y) {
    var possibleMoves = ['left', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 10 && gameData.you.body[0].x > gameData.you.body[1].x) {
    var possibleMoves = ['down', 'right']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }
  if (gameData.you.head.y == 10 && gameData.you.body[0].x < gameData.you.body[1].x) {
    var possibleMoves = ['down', 'left']
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] 
  }

 //....................................... 

  console.log(gameData.you.body[0], gameData.you.head)
  // console.log(gameData)
  console.log('MOVE: ' + move)
  response.status(200).send({
    move: move
  })
}

function handleEnd(request, response) {
  var gameData = request.body

  console.log('END')
  response.status(200).send('ok')
}

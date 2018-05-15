var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/memoryGameDB', function() {
  console.log("DB connection established!!!");
})

var Card = require('./models/cardModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// You will need to create 5 server routes
// These will define your API:

// 1) to handle the shuffle of the cards
app.get('/cards', function(request, response)  {
    var message = "call the shuffle service to start a new game/ Good luck";
    console.log(message)
    response.send("Retrieve and display cards from the DB");
});

// 2) to handle the creation of the card
app.post('/cards', function(request, response){
  // 1. create a card from the client
  var message = "creating a new card";
  console.log(message)
  var cardFromClient = request.body;

  // create a new Card document
  var newCard = new Card(cardFromClient);

  // save newCard document
  newCard.save(function(err, savedCard){
    //send back the saved Card
    response.send(newCard);
  });
});


// 3) to handle the deleting a post

// 4) to handle adding a comment to a post

// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});


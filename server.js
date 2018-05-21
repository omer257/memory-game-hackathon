var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;


// mongoose.connect('mongodb://localhost/memoryGameDB', function () {
//   console.log("DB connection established!!!");
// })
mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/memoryGameDB', function () {
  console.log("DB connection established!!!");
})

var Card = require('./models/cardModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// var card1 = new Card({
//   name: "burger",
//   state: 0,
//   img_url: "http://icons.iconarchive.com/icons/sonya/swarm/256/Fast-Food-icon.png"
// })
// card1.save(function (error, card) /* <--- callback function */ {
//   if (error) {
//     return console.error(error);
//   }
//   console.log(card);
// });

// card1.save(function (error, card) /* <--- callback function */ {
//   if (error) {
//     return console.error(error);
//   }
//   console.log(card);
// });

// var card2 = new Card({
//   name: "guacamole",
//   state: 0,
//   img_url: "https://cdn.icon-icons.com/icons2/281/PNG/256/Guacamole-icon_30330.png"
// })
// card2.save(function (error, card) /* <--- callback function */ {
//   if (error) {
//     return console.error(error);
//   }
//   console.log(card);
// });


// var card3 = new Card({
//   name: "turkey",
//   state: 0,
//   img_url: "https://cdn.icon-icons.com/icons2/281/PNG/256/Turkey-icon_30265.png"
// })
// card3.save(function (error, card) /* <--- callback function */ {
//   if (error) {
//     return console.error(error);
//   }
//   console.log(card);
// });



// var card4 = new Card({
//   name: "fries",
//   state: 0,
//   img_url: "https://cdn.iconscout.com/public/images/icon/free/png-512/french-fries-fastfood-food-emoj-symbol-33f6bbba0c3260a7-512x512.png"
// })


// card4.save(function (error, card) /* <--- callback function */ {
//   if (error) {
//     return console.error(error);
//   }
//   console.log(card);
// });

// You will need to create 5 server routes
// These will define your API:

// 1) to handle the shuffle of the cards
app.get('/cards', function (req, res) {
  Card.find({}, function(err, allCards){
    if (err){
      res.sendStatus(500).send("error: could not GET");
    } else{
      res.send(allCards);
    }
  })

});

// 2) to handle the creation of the card
app.post('/cards', function (request, response) {
  // 1. create a card from the client
  var message = "creating a new card";
  console.log(message)
  var cardFromClient = request.body;

  // create a new Card document
  var newCard = new Card(cardFromClient);

  // save newCard document
  newCard.save(function (err, savedCard) {
    //send back the saved Card
    response.send(newCard);
  });
});




// app.listen(SERVER_PORT, () => {
//   console.log("Server started on port " + SERVER_PORT);
// });

app.listen(process.env.PORT || SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
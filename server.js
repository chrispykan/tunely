//require express in our app
const express = require('express'),
bodyParser = require('body-parser');


const app = express();

// serve static files in public
app.use(express.static('public'));


// importing the models directory
const db = require('./models')

// require controllers
const controllers = require('./controllers');

////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  // res.send("Hey!Working!");
});

// get route for controllers
app.get('/api', controllers.api.index);








app.listen(process.env.PORT || 3000, function () {
  console.log('Tunely listening at http://localhost:3000/');
});

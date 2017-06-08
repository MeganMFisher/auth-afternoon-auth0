var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var auth = require('passport-auth0')


var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

var port = 3000;



 app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port );
  });
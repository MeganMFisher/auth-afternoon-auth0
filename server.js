var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var config = require('./config');


var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

var port = 3000;

app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
  domain: config.authDomain,
  clientID: config.clientId,
  clientSecret: config.clientSecret,
  callbackURL: 'http://localhost:3000/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
}

// request.get('https://api.github.com/user/followers', {
//   'auth': {
//     'user': 'username',
//     'pass': 'password',
//     'sendImmediately': false
//   }
// });


app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/github/callback',
  passport.authenticate('auth0', {connection: 'github'}), function(req, res) {
    res.status(200).send(req.user);
})

app.get('/api/github/followers', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})



 app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port );
  });
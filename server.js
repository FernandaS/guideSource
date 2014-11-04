"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var session = require('express-session');
var port = 3333;
var IdTypeMiddleware = require('./lib/middleware/id-type-middleware');
var cors = require('cors')

// Connecting my Frontend under one server//
app.use(express.static(__dirname + '/public'));


app.use(session({secret: "guimaraesmarquesdasilva"}));
app.use(passport.initialize());
app.use(express());
app.use(bodyParser.json());
app.use(passport.session());
app.use(cors());

//Mongo Setup, connection
var mongoose = require('mongoose');
var db = 'mongodb://localhost/guideSource';
var connection = mongoose.connection;

//setting up the array of areas

var area = require('./lib/controllers/areaCtrl')


app.post('/areas', area.addArea);
app.get('/areas', area.getArea);

//Setting up Guider API to get info from DB to angular Service

var Guider = require('./lib/controllers/guideCtrl')
var Customer = require('./lib/models/customer')
//Guiders 
app.get('/guiders/:area', Guider.getGuiders);
app.post('/guider', Guider.postGuider);
app.get('/guider/:id', Guider.getGuiderById);



// Facebook Oauth setup//
passport.use(new FacebookStrategy({
	clientID: '1488818991403933',
	clientSecret: '030c48a4e0740160a41e004d01d0dc84',
	callbackURL: 'http://localhost:3333/auth/facebook/callback',
}, 
function(accessToken, refreshToken, profile, done) {
console.log('above customer is');
	Customer.findOne( {facebookId: profile.id}).exec(function(err, customer){
	if(err){
		res.send(err);
	}
	if(customer) {
		console.log('customer is: ' + customer);
		 return done(null, customer);
	} else {
		console.log('omgomgomgomgomg')
		var newCustomer = new Customer();
		newCustomer.facebookId = profile.id;
		newCustomer.name.first = profile._json.first_name;
		newCustomer.name.last = profile._json.last_name;
		newCustomer.gender = profile._json.gender;
		newCustomer.facebook_page_URL = profile._json.link;
		newCustomer.email = profile._json.email;
		console.log(newCustomer);
		newCustomer.save(function(err){
			if(err){
				res.send(err);
			} else {
				done(null, newCustomer);
			}
		})
	}
	})
}));



passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var requireAuth = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
	return res.status(401);
	}
}

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
	failureRedirect: '/#/login',
	successRedirect: '/#/customer'
}), function(req, res){
	res.redirect('/');
	console.log(req.session);
});

app.get('/api/profile', requireAuth, function(req, res){
	if(req.user){
		res.status(200).send(req.user);
	} else {
		res.redirect('/');
	}
});



app.get('/api/customer', requireAuth, function(req, res){
	if(req.user){
		res.status(200).send(req.user);
	} 
});

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/#/');
})





// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.


// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login')
// }


mongoose.connect(db);
connection.once('open', function(){
	app.listen(port, function (){
		console.log('Evevything is working and I am connected on port ' + port);
	})
});





//writting query to the search box, as customer will be able to search based on name, city, or language. 

//db.guiders.find({
// 	languages: "portugues"
// })
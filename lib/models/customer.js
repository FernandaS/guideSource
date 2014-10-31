"use strict";

var mongoose = require('mongoose');
var Moment = require('moment');
var Schema =  mongoose.Schema;




var customer = new Schema({
	name: {
		first: {type: String},
		last: {type: String}
		},
	gender: {type: String},

	photo: {type: String},

	facebookId: {type: String},

	location: {type: String},
	facebook_page_URL: {type: String},
	email: {type: String}

});



module.exports = mongoose.model('customer', customer);
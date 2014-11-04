"use strict";



var mongoose = require('mongoose');
var Moment = require('moment');
var Schema =  mongoose.Schema;




var area = new Schema({
	name: {type: String, require:true}
});



module.exports = mongoose.model('area', area);
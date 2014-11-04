"use strict";

var AreaModel = require('../models/area');

module.exports = {
addArea: function(req, res){
		var newArea = new AreaModel(req.body);
		newArea.save(function (err){
			if(err){
				res.send(err);
			} else {
				res.status(200).send(req.body.name + ' ' + "was succesfully added to my area collection")
			}
		});
	},

	getArea: function(req, res){
		AreaModel.find(req.body).exec(function(err, area){
			res.send(area);
		})
	}
}	

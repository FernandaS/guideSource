"use strict";

var GuideModel = require('../models/guide');

module.exports = {
	getGuiders: function(req, res){
		console.log(req.params.search);
		GuideModel.find({'name.first': new RegExp(req.params.search, 'i')}).exec(function(err, guider){
			console.log(guider)
			res.send(guider);
		});
	},


	postGuider: function(req, res){
		var newGuider = new GuideModel(req.body);
		newGuider.save(function (err){
			if(err){
				res.send(err);
			} else {
				res.status(200).send(req.body.name.first + ' '  + req.body.name.last +  " was succesfully added to my guider collection")
			}
		});
	},
//Gettin each guider by their id, in order to display each individual profile page once user click on the search options. 
	getGuiderById: function(req, res){
		console.log(req.params);
		GuideModel.findOne({_id: req.params.id}, function(err, guider){
			if(err){
				res.send(err)
			} else {
				res.status(200).send(guider)
			}
		}) 
	}

	// queryGuider: function(req, res){
	// 	GuideModel.find()

	// }


}
"use strict";

var GuideModel = require('../models/guide');

module.exports = {
	getGuiders: function(req, res){
		var result;
		// console.log('req.params.area: ' + req.params.area)
		if(req.params.area === 'all') {
			GuideModel.find().exec(function(err, guider){
				res.send(guider)
			})
		} else {
			GuideModel.find({area: req.params.area}).exec(function(err, guider){
				res.send(guider)
			})
		}
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
		console.log(req.params.id);
		GuideModel.findOne({_id: req.params.id}, function (err, guide){
			if(err){
				res.send(err)
			} else {
				res.status(200).send(guide)
				
			}
		}); 
	}

	// queryGuider: function(req, res){
	// 	GuideModel.find()

	// }


}


"use strict";

var mongoose = require('mongoose');
var Moment = require('moment');
var Schema =  mongoose.Schema;




var guide = new Schema({
	name: {
    	first: {type: String, require: true, min: 2},
    	middle: {type: String},
    	last: {type: String, require: true, min: 2}
    },

    email: {type: String, lowercase: true, unique: true, required: true},

    phone: {
    	kind: { type: String, enum: ['mobile', 'work', 'home', 'other']},
    	phoneNumber: {type: String, required: true}
    },

    area: {type: String, require: true},

    address: {
    	city: {type: String, required: true},
    	state: {type: String, required: true},
    	zip: {type: String, required: true}
    },

    photo: {
        url: {type: String}
    },

    biography: {type: String, max: 550},
    facebook: {type: String},

    skills: {
    	languages: [{type: String}],
    	ownCar: {type: Boolean, default: true}
    },

    experience: {
    	highestEducation: {enum: ['Some School', 'High School Degree', 'Some College', 'College Degree', 'Graduate Degree']}
    	// fieldOfWork: {enum: }
    },


    

    active: {type: Boolean, default: true},


    createdAt: {type: Date, required: true, default: Moment().utc().toDate()},
    updatedAt: {type: Date}

})



module.exports = mongoose.model('guide', guide);

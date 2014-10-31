"use strict";

module.exports = function(req, res, next) {
	var id = req.params.id;
	var idType = req.query.idType || 'name';
	var query = {};
	query[idType] = id;
	req.params.query = query;
	next();
}
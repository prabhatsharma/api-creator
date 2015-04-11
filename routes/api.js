/********************************************

Copyright (c) Prabhat 2015

*********************************************/

'use strict';
console.log('inside api.js');
var metamodels = require('../models/metamodels.js');

var models = metamodels();
var express = require('express');
var restful = require('node-restful');

var mongoose = restful.mongoose;
var router = express.Router();

var schemas = models.modules;

var mongooseschema = [];
var restfulmodel = [];

//set up the api
for(var i=0; i<schemas.length; i++){
	console.log ('creating api: ' + schemas[i].modelname);
	mongooseschema[i] = new mongoose.Schema(schemas[i].definition);
	restfulmodel[i] = restful.model(schemas[i].modelname, mongooseschema[i])
		.methods(['get','post','put','delete'])
		.register(router,'/' + schemas[i].modelname);
}

module.exports = router;
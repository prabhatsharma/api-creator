/********************************************

Copyright (c) Prabhat 2015

*********************************************/

'use strict';

console.log('inside server.js');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');		//For enabling CORS so that angular app can call APIs from different domain/port

mongoose.connect('mongodb://127.0.0.1/appcreator');


var app = express();

app.use(cors());	//enable express to use CORS. You may want to disable/restrict in production
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log('Will apply routes now');


app.use('/api', require('./routes/api'));


app.listen(3000);
console.log('Listening on port 3000');
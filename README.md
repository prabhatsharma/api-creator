api-creator
===========
Create APIs just like that 

Prerequisites
---------------
MongoDB is running locally.

Starting the application
-------------------------
Install dependencies first

$ npm install

Creating schema for RESTful APIs
---------------------------------

Create schema for whatever API you want to create by simply making the relevant changes/additions to the below script. api-creator reads this file (metamodels.js) and creates RESTful APIs automatically.

module.exports = function(){
    var metamodels = {};
	
	metamodels.modules = [
		{
		modelname : "car",
		definition: {
			name : String,
			model : String,
			company : String,
			yearofmanufacturing : Number
		}
	}, {
		modelname : 'truck',
		  definition : {
			  name : String,
			  model : String,
			  company : String,
			  weightcapacity : Number
		  }
		
	}];

    return metamodels;
};

Start the API server
-----------------

$ node server.js

server will start on port 3000

Test the server
-----------------

Visit the following URL

https://localhost:3000/api/car

Use postman to quickly test your APIs.



Copyright (c) Prabhat 2015
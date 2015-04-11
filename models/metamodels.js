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

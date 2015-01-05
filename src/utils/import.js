console.log('importing g2013');

var request = require("request");
var Waterline = require('waterline');
var url = "http://clashfinder.com/data/event/g2013.json";
var orm = new Waterline();
var mongoAdapter = require('sails-mongo');

var config = {

  adapters: {
    	'default': mongoAdapter,
    	mongo: mongoAdapter
  },

  connections: {
    myLocalMongo: {
      	adapter: 'mongo',
    	host: 'localhost',
    	port: 27017,
    }
  },

  defaults: {
    migrate: 'alter'
  }

};

var EventLocation = Waterline.Collection.extend({
	identity: 'location',
	connection: 'myLocalMongo',
	attributes: {

    	name : { type: 'string' },

   		/*eventInstance : {
        	model:'eventInstance'
    	}*/
  	}
});

var EventInstance = Waterline.Collection.extend({
	identity: 'eventInstance',
	connection: 'myLocalMongo',
	attributes: {

	    name : { type: 'string' },

	    dateFrom : { type: 'date' },

	    dateTo : { type: 'date' },

	   /* locations : {
	        collection: 'location',
	        via: 'eventInstance'
	    }*/
  	}
});


orm.loadCollection(EventLocation);
orm.loadCollection(EventInstance);


orm.initialize(config, function(err, models) {
  if(err) throw err;

  app.models = models.collections;
  app.connections = models.connections;

  // Start Server
  app.listen(3000);
});

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {

    	console.log(body.name);

    	var locations = new Array(); 
		
		var ei = {
		  eventinstance: {
		  	name: body.name,
		  }
		};

		console.log(ei);

		app.models.eventInstance.create(ei, function(err, model) {
		    if(err) {
		    	console.log(err);
		    }
		   
		   	var id = model.id;
		   	console.log('And the ID is!!! ' + id)
		});

		/*

				for (var i = body.locations.length - 1; i >= 0; i--) {
					
					var l = {
						location: {
							name : body.locations[i].name,
							eventInstance : resultObject
						}
					};
					
		    		sendEventLocation('/api/v1/locations', l, function(locationResult){
		    			console.log(locationResult);
		    		});
		    	}

		*/

		
    }
})
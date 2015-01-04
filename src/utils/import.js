console.log('importing g2013');

var request = require("request")

var url = "http://clashfinder.com/data/event/g2013.json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {


    	console.log(body.name);
		request.post(
		    'http://127.0.0.1:1337/api/v1/eventinstances',
		   { EventInstance: { Name: body.name } },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            console.log(body)
		        }
		    }
		);

        for (var i = body.locations.length - 1; i >= 0; i--) {
        	var location = body.locations[i];
        	request.post(
		    'http://127.0.0.1:1337/api/v1/locations',
		   { Location : { Name: location.name } },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            console.log(body)
		        }
		    }
		);
        };
    }
})
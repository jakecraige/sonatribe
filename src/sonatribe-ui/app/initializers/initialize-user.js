export var initialize = function(container, app) {
  	/*app.deferReadiness();
    Sonatribe.Ajax.ajax('model/useraccount/')
        .then(function(result){
  			    var store = container.lookup('store:main');
            var user = store.createRecord('user', result.result);
            app.advanceReadiness();
    	});*/
};

export default {
  name: 'initialize-user',

  initialize: initialize
};

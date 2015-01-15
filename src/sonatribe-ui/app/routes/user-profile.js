import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Route.extend(Ajax, {
	model: function(params) {
    	return this.ajax('Model/User/' + params.Slug, { id: params.Slug })
    	.then(function(response){
    		return response.result;
    	});
  	}
});

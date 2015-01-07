import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Route.extend(Ajax, {
	model: function(params) {
    	return this.ajax('Artist/' + params.Slug, { id: params.Slug })
    	.then(function(response){
    		return response.artists[0];
    	});
  	}
});

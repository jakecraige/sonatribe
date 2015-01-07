import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Route.extend(Ajax, {
	model: function(params) {
		this.set('slug', params.Slug);
		return Ember.RSVP.hash({
				eventProfile: 	this.ajax('EventInstances/' + params.Slug, { id: params.Slug })
					    			.then(function(response){
					    				return response.eventInstances[0];
					    			})
				});
  	},
});

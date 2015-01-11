import Ember from 'ember';
import SonatribeRoute from 'sonatribe-ui/routes/sonatribe';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, {
	 actions: {
			// action to trigger authentication with Torii
			authenticate: function(provider){

				var rte = this;

				this.get('session')
				.authenticate('sonatribe-auth-authenticator:torii', 'facebook-oauth2')
				.then(function(){
					console.log(rte.get('session'));
				});
			},

	 		showLogin: function() {
	      	var self = this;
	        this.send('autoLogin', 'login', function(){
	        	SonatribeRoute.showModal(self, 'login');
	        	self.controllerFor('login').resetForm();
	        });
	    },

	 		showModal: function() {
	      $('#discourse-modal').modal('show');
	    },

	  	autoLogin: function(modal, onFail){
	    	onFail();
	    },
    	closeModal: function() {
      		this.render('hide-modal', {into: 'modal', outlet: 'modalBody'});
    	},
    	showCreateAccount: function() {
	      	var self = this;

	      	self.send('autoLogin', 'createAccount', function(){
	        	SonatribeRoute.showModal(self, 'createAccount');
	      	});
    	},

	}
});

Ember.RSVP.EventTarget.mixin(ApplicationRoute);
export default ApplicationRoute;

import Ember from 'ember';
import SonatribeRoute from 'sonatribe-ui/routes/sonatribe';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

function fblogin() {
	return new Ember.RSVP.Promise(function(resolve, reject){
		FB.login(function(response){
			if (response.authResponse) {
				Ember.run(null, resolve, response.authResponse);
			} else {
				Ember.run(null, reject, response.status);
			}
		}, {scope: 'email'});
	});
}


var ApplicationRoute = SonatribeRoute.extend(ApplicationRouteMixin, {
	 actions: {
			// action to trigger authentication with Torii
			authenticateFacebook: function(provider){

				var rte = this;

				this.get('session')
					.authenticate('simple-auth-authenticator:torii', 'facebook-oauth2')
					.then(function(){

						console.log('authenticated')

						console.log(rte.get('session'));

						var _this = this;

						//this is fugging nasty as we have to fire a login twice - once for torii
						// and again for us to get the access_token
						// definitely need to revisit this
						fblogin().then(function(response){

							Ember.$.ajax({
								url: 'http://dev.festivaltribe.co.uk:1337/auths/facebook_access_token?code=' + response.accessToken,
								dataType: 'json',
								success: function(authResponse){
									console.log(authResponse);
								},
								error: function(err){
									console.log(err);
								}
							});
						});
					});

				/*this.get('session')
					.authenticate('authenticator:torii-st',
					{
						torii:    this.get('torii'),
						provider: 'facebook-oauth2'
					})
					.then(function(){

						console.log('authenticated')

						console.log(rte.get('session'));
					});*/
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

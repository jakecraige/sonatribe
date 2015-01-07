import Ember from 'ember';
import ModalFunctionality from 'sonatribe-ui/mixins/modal-functionality';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';
import Presence from 'sonatribe-ui/mixins/presence';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

import SonatribeController from 'sonatribe-ui/controllers/sonatribe';

export default SonatribeController.extend(ModalFunctionality, HasCurrentUser, Presence, Ajax, {
	needs: ['modal', 'application', 'createAccount'],
	loggingIn: false,
  	loggedIn: false,
  	authenticate: null,
  	showSpinner: function() {
	    return this.get('loggingIn') || this.get('authenticate');
	}.property('loggingIn', 'authenticate'),
	resetForm: function() {
	    this.set('authenticate', null);
	    this.set('loggingIn', false);
	    this.set('loggedIn', false);
  	},
  	actions: {
  		createAccount: function() {
	     	//var createAccountController = this.get('controllers.createAccount');
	      	//createAccountController.resetForm();
	     	this.send('showCreateAccount');
	    },

    	login: function() {
    		var self = this;

		    if(this.blank('loginName') || this.blank('loginPassword')){
		    	self.flash('Username or password is blank', 'error');
		    	return;
		   	}


		   	var promise = this.ajax('auth/credentials?username=' + this.get('loginName') + '&password=' + this.get('loginPassword'), {});
		   	
		   	promise.then(function(result){
		   		self.set('loggedIn', true);
		        // Trigger the browser's password manager using the hidden static login form:
		       location.reload();
		   	}, function() {
		        // Failed to login
		        self.flash('Login error', 'error');
		        self.set('loggingIn', false);
		    });	

		    return false;
    	}

    }
});

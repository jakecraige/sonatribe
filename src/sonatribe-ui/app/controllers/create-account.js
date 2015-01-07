import Ember from 'ember';
import ModalFunctionality from 'sonatribe-ui/mixins/modal-functionality';
import Presence from 'sonatribe-ui/mixins/presence';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

import SonatribeController from 'sonatribe-ui/controllers/sonatribe';

export default SonatribeController.extend(ModalFunctionality, Presence, Ajax, {
	needs: ['login'],
	uniqueUsernameValidation: null,
	globalNicknameExists: false,
	complete: false,
	accountPasswordConfirm: 0,
	accountChallenge: 0,
	passwordRequired: true,
	formSubmitted: false,
	rejectedEmails: Em.A([]),
	rejectedPasswords: Em.A([]),
	prefilledUsername: null,
	userFields: null,
	actions: {
	  	createAccount: function() {
	  		var name = this.get("accountName");
	  		var username = this.get("accountUsername");
	  		var email = this.get("accountEmail");
	  		var password = this.get("accountPassword");

	  		var self = this;

		    if(this.blank('accountName') || this.blank('accountEmail') || this.blank('accountPassword')){
		    	self.flash('Name, username or password is blank', 'error');
		    	return;
		   	}

		   	var promise = this.ajax('register?username=wayne3&password=test', { 
		   		type: 'POST', 
		   		data: {
		   			username: username,
		   			password: password,
		   			email: email,
		   			displayName: name
		   		},
		   		dataType: 'JSON'
		   	});

		   	promise.then(function(result){
		   		self.ajax('auth/credentials?username=' + username + '&password=' + password, {})
			   		.then(function(result){
				   		self.set('loggedIn', true);
				       	location.reload();
				   	}, function() {
				        // Failed to login
				        self.flash('Login error', 'error');
				        self.set('loggingIn', false);
				    });	
		   	}, function() {
		        // Failed to login
		        self.flash('Login error', 'error');
		        self.set('loggingIn', false);
		    });	
			
		    return false;
	  	}
	  }
});

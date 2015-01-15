import Ember from 'ember';
import ModalFunctionality from 'sonatribe-ui/mixins/modal-functionality';
import Presence from 'sonatribe-ui/mixins/presence';

import SonatribeController from 'sonatribe-ui/controllers/sonatribe';
import HasCurrentUser from 'sonatribe-ui/mixins/HasCurrentUser';


export default SonatribeController.extend(ModalFunctionality, Presence, HasCurrentUser, {
	needs: ['login', 'createAccount'],
	uniqueUsernameValidation: null,
	globalNicknameExists: false,
	complete: false,
	accountPasswordConfirm: 0,
	accountChallenge: 0,
	passwordRequired: true,
	formSubmitted: false,
	rejectedEmails: Ember.A([]),
	rejectedPasswords: Ember.A([]),
	prefilledUsername: null,
	userFields: null,
	actions: {
	  	createAccount: function() {
	  		var name = this.get("accountName");
	  		var username = this.get("accountUsername");
	  		var email = this.get("accountEmail");
	  		var password = this.get("accountPassword");

	  		var self = this;

		    if(this.blank('accountName') || this.blank('accountEmail') || (this.get('passwordRequired') && this.blank('accountPassword'))){
		    	self.flash('Name, username or password is blank', 'error');
		    	return;
		   	}

				var currentUser = this.get('currentUser');
				var user = this.store.find('user', currentUser.get('id') );

				user.set('username', username);
				user.set('email',email);
				user.set('name',name);

				user.save();

		    return false;
	  	}
	  }
});

import Ember from 'ember';
import ModalBodyView from 'sonatribe-ui/views/modal-body-view'


export default ModalBodyView.extend({
	templateName: 'modal/create-account',
  	title: 'create account',
  	classNames: ['create-account'],

  	_setup: function() {
    	// allows the submission the form when pressing 'ENTER' on *any* text input field
    	// but only when the submit button is enabled
    	var createAccountController = this.get('controller');
    	Ember.run.schedule('afterRender', function() {
      	$("input[type='text'], input[type='password']").keydown(function(e) {
        	if (createAccountController.get('submitDisabled') === false && e.keyCode === 13) {
          	createAccountController.send('createAccount');
        	}
      	});
    	});
  }.on('didInsertElement')
});

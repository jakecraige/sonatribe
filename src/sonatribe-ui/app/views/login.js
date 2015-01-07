import Ember from 'ember';
import ModalBodyView from 'sonatribe-ui/views/modal-body-view'

export default ModalBodyView.extend({
	templateName: 'modal/login',
  	title: "login",
  	classNames: ['login-modal'],
	_setup: function() {
	    var loginController = this.get('controller');

	    // Get username and password from the browser's password manager,
	    // if it filled the hidden static login form:
	    loginController.set('loginName', $('#hidden-login-form input[name=username]').val());
	    loginController.set('loginPassword', $('#hidden-login-form input[name=password]').val());

	    Ember.run.schedule('afterRender', function() {
	      $('#login-account-password, #login-account-name').keydown(function(e) {
	        if (e.keyCode === 13) {
	          if (!loginController.get('loginDisabled')) {
	            loginController.send('login');
	          }
	        }
	      });
	    });
	}.on('didInsertElement')
});

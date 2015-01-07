import Ember from 'ember';

export default Ember.View.extend({
	 _setupModal: function() {
	    var self = this;
			var $discourseModal = $('#discourse-modal');

	    $discourseModal.modal('show');
	    $discourseModal.one("hide", function () {
	      self.get("controller").send("closeModal");
	    });

	    $('#modal-alert').hide();

	    // Focus on first element

	     Ember.run.schedule('afterRender', function() {
	        self.$('input:first').focus();
	     });


	    var title = this.get('title');
	    if (title) {
	      this.set('controller.controllers.modal.title', title);
	    }
	  }.on('didInsertElement'),

	  flashMessageChanged: function() {
	    var flashMessage = this.get('controller.flashMessage');
	    if (flashMessage) {
	      var messageClass = flashMessage.get('messageClass') || 'success';
	      var $alert = $('#modal-alert').hide().removeClass('alert-error', 'alert-success');
	      $alert.addClass("alert alert-" + messageClass).html(flashMessage.get('message'));
	      $alert.fadeIn();
	    }
	}.observes('controller.flashMessage')
});

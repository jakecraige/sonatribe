import Ember from 'ember';
import SonatribeRoute from 'sonatribe-ui/routes/sonatribe';

export var initialize = function(container, app) {
	SonatribeRoute.reopenClass({
		showModal: function(router, name, model) {
			router.controllerFor('modal').set('modalClass', null);

			router.render(name, {into: 'modal', outlet: 'modalBody'});
			
			var controller = router.controllerFor(name);
			if (controller) {
				if (model) {
					controller.set('model', model);
				}
				if(controller && controller.onShow) {
					controller.onShow();
				}
				controller.set('flashMessage', null);
			}
		}
	});
};

export default {
  name: 'router-reopen',

  initialize: initialize
};

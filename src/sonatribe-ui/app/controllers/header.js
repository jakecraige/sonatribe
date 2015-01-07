import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';
import ApplicationRoute from 'sonatribe-ui/routes/application';

export default Ember.Controller.extend(HasCurrentUser, {
	needs: ['application'],
});

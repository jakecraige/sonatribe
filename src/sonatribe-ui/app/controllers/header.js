import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';

export default Ember.Controller.extend(HasCurrentUser, {
	needs: ['application'],
});

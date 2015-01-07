import Ember from 'ember';
import HasCurrentUser from 'sonatribe-ui/mixins/has-current-user';

export default Ember.Controller.extend(HasCurrentUser, {
	actions:{
		createNew: function(){
			var ei = this.store.createRecord('eventInstance', {
				name: 'test'
			});
			ei.save();
		}
	}
});

import Ember from 'ember';
import User from 'sonatribe-ui/models/user-account';

export default Ember.Mixin.create({
  currentUser: function() {
    var user = User.current();
    return user;
  }.property().volatile()
});
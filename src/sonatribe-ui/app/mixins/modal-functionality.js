import Ember from 'ember';

export default Ember.Mixin.create({
  needs: ['modal'],

  flash: function(message, messageClass) {
    this.set('flashMessage', Ember.Object.create({
      message: message,
      messageClass: messageClass
    }));
  }
});
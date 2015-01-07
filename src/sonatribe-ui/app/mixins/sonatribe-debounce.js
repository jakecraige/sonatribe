import Ember from 'ember';

export default Ember.Mixin.create({
  debounce: function(func, wait){
    var self, args;
    var later = function() {
      func.apply(self, args);
    };

    return function() {
      self = this;
      args = arguments;

      Ember.run.debounce(null, later, wait);
    };
  }
});
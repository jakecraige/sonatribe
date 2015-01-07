import Ember from 'ember';


export default Ember.Controller.extend({
  needs: ['modal'],
  eventName: null,
  init: function(){
    this.set('searchContextEnabled', false);
  },
  actions : {
    searchEvent: function(){
      alert(this.get('eventName'));
        //this.transitionTo('posts', );
    },

  }
});

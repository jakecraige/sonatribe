import Ember from 'ember';

function computed(value) {
	return Em.computed(function() {
      return Sonatribe.SiteSettings[name];
    }).property();
}

export {
  computed
};

export default Ember.Handlebars.makeBoundHelper(computed);

import Ember from 'ember';

function computed() {
	return Ember.computed(function() {
      return Sonatribe.SiteSettings[name];
    }).property();
}

export {
  computed
};

export default Ember.Handlebars.makeBoundHelper(computed);

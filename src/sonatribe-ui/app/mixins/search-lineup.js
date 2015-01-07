import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Mixin.create(Ajax, {
  	searchLineup: function(slug, term){
    	return this.store.find('listingEvent', {name: term, eventInstanceSlug: slug, Skip: 0, Take:20});
  	}
});

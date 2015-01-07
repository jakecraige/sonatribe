import DS from 'ember-data';

export default DS.Model.extend({
	slug: DS.attr('string'),
	name:DS.attr('string'),

  	eventInstance: DS.belongsTo('eventInstance'),
  	listingEvents: DS.hasMany('listingEvent', {async:true})
});

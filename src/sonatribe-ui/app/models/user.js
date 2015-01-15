import DS from 'ember-data';

export default DS.Model.extend({
  	eventsAttending: DS.hasMany('eventInstance', {async:true}),
  	slug: DS.attr('string'),
    name: DS.attr('string'),
    username: DS.attr('string'),
  	profilePictureUrl: DS.attr('string'),
    auth: DS.attr('string'),
  	//images: DS.hasMany('image', { async:true }),
});

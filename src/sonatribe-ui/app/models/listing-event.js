import DS from 'ember-data';

export default DS.Model.extend({
	currentUserAttending: DS.attr(),
  	name:DS.attr(),
  	slug: DS.attr('string'),
  	start:DS.attr('string'),
  	end:DS.attr('string'),
	eventInstanceSlug: DS.attr('string'),
  	location: DS.belongsTo('location'),
  	artists: DS.hasMany('artist', { async:true }),
  	usersAttending: DS.hasMany('user', { async:true })
});

//http://emberjs.jsbin.com/tepeqo/2/edit

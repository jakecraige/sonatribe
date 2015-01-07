import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
  	artist: DS.belongsTo('artist'),
  	fullPath: function(){
  		return Sonatribe.ApiUrl + '/image/' + this.get("name") + '?size=smallsquare' ;
  	}.property()
});

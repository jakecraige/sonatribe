import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: Sonatribe.ApiUrl,
	updateRecord: function(store, type, record) {
	    var data = {};
	    var get = Ember.get;
	    var serializer = store.serializerFor(type.typeKey);

	    serializer.serializeIntoHash(data, type, record, { includeId: true });

	    var id = get(record, 'id');

	    return this.ajax(this.buildURL(type.typeKey, id, record), "PUT", { data: data });
  },
});
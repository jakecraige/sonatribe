import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
	host: Sonatribe.SiteSettings.api_url,
	updateRecord: function(store, type, record) {
	    var data = {};
	    var get = Ember.get;
	    var serializer = store.serializerFor(type.typeKey);

	    serializer.serializeIntoHash(data, type, record, { includeId: true });

	    var id = get(record, 'id');

	    return this.ajax(this.buildURL(type.typeKey, id, record), "PUT", { data: data });
  },
});

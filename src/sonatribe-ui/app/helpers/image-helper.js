import Ember from 'ember';

export function imageHelper(model, size) {
 	var html = '<img src="' + Sonatribe.ApiUrl + '/image/' + model.get("name") + '?size=' + size + '"  />';
 	return new Handlebars.SafeString(html);
};

export default Ember.Handlebars.makeBoundHelper(imageHelper);

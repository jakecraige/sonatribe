import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  timeFrom: DS.attr(),
  timeTo: DS.attr()
});

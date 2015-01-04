import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dateFrom: DS.attr('date'),
  dateTo: DS.attr('date')
});

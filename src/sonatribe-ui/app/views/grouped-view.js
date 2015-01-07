import Ember from 'ember';
import Presence from 'sonatribe-ui/mixins/presence';

export default Ember.View.extend(Presence, {
  init: function() {
    this._super();
    this.set('context', this.get('content'));

    var templateData = this.get('templateData');
    if (templateData) {
      this.set('templateData.insideGroup', true);
    }
  }
});

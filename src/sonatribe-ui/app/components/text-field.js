/**
  This is a custom text field that allows i18n placeholders

  @class TextField
  @extends Ember.TextField
  @namespace Discourse
  @module Discourse
**/

import Ember from 'ember';

export default Ember.TextField.extend({
  attributeBindings: ['autocorrect', 'autocapitalize', 'autofocus', 'maxLength'],

  placeholder: function() {
    if (this.get('placeholderKey')) {
      return "";
    } else {
      return '';
    }
  }.property('placeholderKey')
});

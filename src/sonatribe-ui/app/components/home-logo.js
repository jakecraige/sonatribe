import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["title"],
  bigLogoUrl: Sonatribe.SiteSettings['logo_url'],
  title:  Sonatribe.SiteSettings['title'],
  linkUrl: function() {
    return '';
  }.property(),

  showSmallLogo: function() {
    return false;
  }.property("minimized"),

  showMobileLogo: function() {
    return false;
  }.property(),

});

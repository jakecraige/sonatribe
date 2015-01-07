import Ember from 'ember';

function iconHelper(i, options) {
  var labelKey;
  var html = "<i class='fa fa-" + i + "'";
  if (labelKey) { html += " aria-hidden='true'"; }
  html += "></i>";
  if (labelKey) {
    html += "<span class='sr-only'>" + labelKey + "</span>";
  }
  return new Handlebars.SafeString(html);
}

export {
  iconHelper
};

export default Ember.Handlebars.makeBoundHelper(iconHelper);

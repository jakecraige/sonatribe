import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("listingEvent", function() {});
  this.resource("eventInstance", function() {});
  this.resource("location", function() {});
});

export default Router;
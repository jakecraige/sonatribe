import Ember from 'ember';

export default Ember.Mixin.create({
  ajax: function(){
    var url, args;

    if (arguments.length === 1) {
      if (typeof arguments[0] === "string") {
        url = arguments[0];
        args = {};
      } else {
        args = arguments[0];
        url = args.url;
        delete args.url;
      }
    } else if (arguments.length === 2) {
      url = arguments[0];
      args = arguments[1];
    }

    if (args.success) {
      Ember.Logger.error("DEPRECATION: Sonatribe.ajax should use promises, received 'success' callback");
    }
    if (args.error) {
      Ember.Logger.error("DEPRECATION: Sonatribe.ajax should use promises, received 'error' callback");
    }

    var performAjax = function(resolve, reject) {
      var oldSuccess = args.success;
      args.success = function(xhr) {
        Ember.run(null, resolve, xhr);
        if (oldSuccess) {
          oldSuccess(xhr);
        }
      };

      var oldError = args.error;
      args.error = function(xhr, textStatus) {

        // If it's a parsererror, don't reject
        if (xhr.status === 200) {
          return args.success(xhr);
        }

        // Fill in some extra info
        xhr.jqTextStatus = textStatus;
        xhr.requestedUrl = url;

        Ember.run(null, reject, xhr);
        if (oldError) {
          oldError(xhr);
        }
      };

      // We default to JSON on GET. If we don't, sometimes if the server doesn't return the proper header
      // it will not be parsed as an object.
      if (!args.type) {
        args.type = 'GET';
      }
      if (!args.dataType && args.type.toUpperCase() === 'GET') {
        args.dataType = 'json';
      }

      if (args.type === 'GET' && args.cache !== true) {
        args.cache = false;
      }

      args.crossDomain = true;
      args.xhrFields = {withCredentials: true};

      $.ajax(Sonatribe.SiteSettings.api_url + url, args);
    };

    return new Ember.RSVP.Promise(performAjax);
  }
});
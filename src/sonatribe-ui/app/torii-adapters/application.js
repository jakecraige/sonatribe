import Ember from 'ember';
import SimpleAuthAuthenticatorBase from 'simple-auth/authenticators/base'

export default SimpleAuthAuthenticatorBase.extend({
  restore: function(properties) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.token)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },
  authenticate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      options.torii.open(options.provider).then(function(authData) {
        console.log(authData);
        Ember.$.ajax({
          url: 'http://dev.festivaltribe.co.uk:1337/auth/facebook_oauth2',
          data: { 'code': authData.authorizationCode },
          dataType: 'json',
          success: Ember.run.bind(null, function(authData){
            resolve({ token: authData.authorizationCode });
          }),
          error: Ember.run.bind(null, reject)
        });
        
      }, function(error) {
        reject(error);
      });
    });
  },
  invalidate: function() {
    return Ember.RSVP.resolve();
  }
});




/*
export default Ember.Object.extend({
  open: function(authentication){
    console.log('inside the torii adapter');

    var authorizationCode = authentication.authorizationCode;
    return new Ember.RSVP.Promise(function(resolve, reject){
      console.log('inside the torii adapter rsvp');
      Ember.$.ajax({
        url: 'api/session',
        data: { 'facebook-auth-code': authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      console.log('inside the torii adapter then');
      // The returned object is merged onto the session (basically). Here
      // you may also want to persist the new session with cookies or via
      // localStorage.
      return {
        currentUser: user
      };
    });
  }
});

*/

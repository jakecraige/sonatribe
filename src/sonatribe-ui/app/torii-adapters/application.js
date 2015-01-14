import Ember from 'ember';
import OAuth2Authenticator from 'simple-auth-oauth2/authenticators/oauth2'

export default OAuth2Authenticator.extend({
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

    var _this = this;

    function fblogin() {
      return new Ember.RSVP.Promise(function(resolve, reject){
        FB.login(function(response){
          if (response.authResponse) {
            Ember.run(null, resolve, response.authResponse);
          } else {
            Ember.run(null, reject, response.status);
          }
        }, {scope: 'email'});
      });
    }

    return new Ember.RSVP.Promise(function(resolve, reject) {
      options.torii.open(options.provider).then(function(authData) {

        //this is fugging nasty as we have to fire a login twice - once for torii
        // and again for us to get the access_token
        // definitely need to revisit this
        fblogin().then(function(response){

          Ember.$.ajax({
            url: 'http://dev.festivaltribe.co.uk:1337/auths/facebook_access_token?code=' + response.accessToken,
            dataType: 'json',
            success: function(authResponse){
              Ember.run(function() {

                var expiresAt = _this.absolutizeExpirationTime(response.expiresIn);
                //_this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);
                if (!Ember.isEmpty(expiresAt)) {
                  response = Ember.merge(response, { expires_at: expiresAt });
                }
                resolve(response);

                return {
                  currentUser: authResponse.auth
                }

                //here i need to go to the server and fetch the user then
                //return it
              });
            },
            error: Ember.run.bind(null, reject)
          });
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

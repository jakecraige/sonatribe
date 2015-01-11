export default Ember.Object.extend({
  open: function(authentication){
    console.log('inside the torii adapter');

    var authorizationCode = authentication.authorizationCode;
    return new Ember.RSVP.Promise(function(resolve, reject){
      console.log('inside the torii adapter rsvp');
      /*Ember.$.ajax({
        url: 'api/session',
        data: { 'facebook-auth-code': authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });*/
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

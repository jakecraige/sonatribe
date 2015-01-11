/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sonatribe-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "*",
      'font-src': "*",
      'connect-src': "*",
      'img-src': "*",
      'style-src': "*",
      'frame-src': "*"
    },
  };

  ENV['torii'] = {
    sessionServiceName: 'session',
    providers: {
      'facebook-oauth2': {
        apiKey:      '787578521258518',
        redirectUri: 'http://dev.festivaltribe.co.uk:4200'
      }
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
  };
  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: 'http://dev.festivaltribe.co.uk:1337/auths/login',
    serverTokenRevocationEndpoint: 'http://dev.festivaltribe.co.uk:1337/auths/logout',
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.host = 'http://dev.festivaltribe.co.uk:4200';
    ENV.torii.providers['facebook-oauth2'].apiKey = '787578521258518';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

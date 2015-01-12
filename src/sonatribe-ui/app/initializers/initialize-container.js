import authAdapter from 'sonatribe-ui/torii-adapters/application';
import SimpleAuth from 'simple-auth/setup';

export var initialize = function( container, app ) {
 // app.register('ajax:main', Ajax);
 //container.injection('application:main', 'store', 'store:main');
 container.register('authenticator:torii-st', authAdapter);
 //SimpleAuth(container, app);
};

export default {
  name: 'initialize-container',

  initialize: initialize
};

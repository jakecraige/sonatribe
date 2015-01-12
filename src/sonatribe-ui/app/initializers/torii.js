import Authenticator from 'sonatribe-ui/authenticators/torii';

export default {
  name:   'sonatribe-auth-torii',
  before: 'simple-auth',
  after:  'torii',
  initialize: function(container, application) {
    var torii         = container.lookup('torii:main');
    var authenticator = Authenticator.create({ torii: torii });
    container.register('sonatribe-auth-authenticator:torii', authenticator, { instantiate: false });
  }
};

import User from 'sonatribe-ui/models/user';
import Singleton from 'sonatribe-ui/mixins/singleton';

export var initialize = function(container, app) {
  User.reopenClass(Singleton, {
    createCurrent: function() {
      var userJson = null; //PreloadStore.get('currentUser');
      if (userJson) {
        var store = container.lookup('store:main');
        return store.push('user', userJson);
      }
      return null;
    },
  });
};

export default {
  name: 'user-reopen-class',

  initialize: initialize
};

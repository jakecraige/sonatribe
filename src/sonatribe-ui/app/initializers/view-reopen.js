import View from 'sonatribe-ui/views/view';

export var initialize = function(/* container, app */) {
  View.reopenClass({

  });
};

export default {
  name: 'view-reopen',

  initialize: initialize
};

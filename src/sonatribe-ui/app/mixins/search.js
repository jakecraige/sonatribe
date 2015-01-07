import Ember from 'ember';
import Ajax from 'sonatribe-ui/mixins/sonatribe-ajax';

export default Ember.Mixin.create(Ajax, {
  search: function(term){

    var promise =  this.ajax('search/' + term, { term: term });

    promise.then(function(result){
        result.resultTypes = [];

        [['event','events'],['user','users'], ['artist', 'artists']].forEach(function(pair){
        var type = pair[0], name = pair[1];
        if(result[name].length > 0) {
          result.resultTypes.push({
            results: result[name],
            displayType: type,
            type: type,
            name: name
          });
        }
      });
    });

    return promise;
  }
});
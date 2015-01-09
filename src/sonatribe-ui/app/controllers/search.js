import EventSearch from 'sonatribe-ui/mixins/search';
import Debounce from 'sonatribe-ui/mixins/sonatribe-debounce';
import SonatribeController from 'sonatribe-ui/controllers/sonatribe';


export default SonatribeController.extend(EventSearch, Debounce, {
   contextChanged: function(){
    if(this.get('searchContextEnabled')){
      this._dontSearch = true;
      this.set('searchContextEnabled', false);
      this._dontSearch = false;
    }
  }.observes("searchContext"),

  searchContextEnabledChanged: function(){
    if(this._dontSearch){ return; }
    this.newSearchNeeded();
  }.observes('searchContextEnabled'),

  // If we need to perform another search
  newSearchNeeded: function() {
    this.set('noResults', false);
    var term = (this.get('term') || '').trim();
    if (term.length >= 0) {
      this.set('loading', true);
      this.searchTerm(term, this.get('typeFilter'));
    } else {
      this.setProperties({ content: null });
    }
    this.set('selectedIndex', 0);
  }.observes('term', 'typeFilter'),

  searchTerm: function(term){
    //return this.debouncePromise(function(term, typeFilter) {
      var self = this;

      var context;
      if(this.get('searchContextEnabled')){
        context = this.get('searchContext');
      }

      if (term.length > 2) {
        return this.debounce(
          this.search(term)
          .then(function(results) {
            self.setProperties({ noResults: !results, content: results });
            self.set('loading', false);
          }).catch(function() {
            self.set('loading', false);
          }), 400);
      }
  },

});

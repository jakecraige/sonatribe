import Ember from 'ember';
import GroupedView from 'sonatribe-ui/views/grouped-view';
import Fmt from 'sonatribe-ui/helpers/fmt';

export default Ember.CollectionView.extend({
  tagName: 'ul',
  itemViewClass: GroupedView.extend({
    tagName: 'li',
    classNameBindings: ['selected'],
    templateName: new Fmt('parentView.displayType', "search/%@-result-type")
  }),

  didInsertElement: function(){
    var term = this.get('controller.term');
    /*if(!_.isEmpty(term)) {
      this.$('.blurb').highlight(term.split(/\s+/), {className: 'search-highlight'});
      this.$('.topic-title').highlight(term.split(/\s+/), {className: 'search-highlight'} );
    }*/
  }
});

import TextField from 'sonatribe-ui/components/text-field';

export default TextField.extend({
  placeholder: function() {

    if(this.get('searchContextEnabled')){
      return "search init";
    }

    return "search";
  }.property('searchContextEnabled')
});

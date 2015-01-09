var safe = Handlebars.SafeString;

import Ember from 'ember';

function boundAvatar(user) {
  if (user != null && user.image != null) {
  	return new safe('<img src="' +  Sonatribe.SiteSettings.api_url  + 'image/' + user.image.name + '?size=avatarsquare" />');
  }else if(user.image != null){
	return new safe('<img src="' +  Sonatribe.SiteSettings.api_url  + 'image/' + user.image.name + '?size=avatarsquare" />');
  }
  else{
	return new safe('<img src="http://conversations.sonatribe.com/user_avatar/conversations.sonatribe.com/thestumonkey/25/13.png" />');
  }
}

export {
  boundAvatar
};

export default Ember.Handlebars.makeBoundHelper(boundAvatar);

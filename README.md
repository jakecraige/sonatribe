# sonatribe

[![Build Status](https://travis-ci.org/wayne-o/sonatribe.svg?branch=master)](https://travis-ci.org/wayne-o/sonatribe)

Sonatribe - a small project which will (hopefuly) one day be a (probably) open source social network for music event (festival) fans (maybe).

Stack: 

- Back end: NodeJs (Sails, MongoDb, Passport)

- Front end: Ember (CLI)

To get started you need to have vagrant (https://www.vagrantup.com/) installed on the host machine.

You can then run `vagrant up` from the root of this repository (this will take a while 1st time round as it will install all of the software needed to run the project).

Once vagrant is up and running you can run `vagrant ssh` - this will get you into the vagrant box, you will need 2 terminal windows with ssh access into the box; one for the UI and one for the API.

To get the API up and running you need to:

`cd /vagrant/src/sonatribe-ui`

Then 

 - `npm install -g sails`
 - `npm install`
 - `sails lift`

That will install all of the dependancies for the API and bring it up.

Now to get the UI running you'll need to (in the other ssh session)

`cd /vagrant/src/sonatribe-ui`

Then

 - `npm install`
 - `bower install`
 - `ember server`

That will spin the UI up. So that you can view the site on the correct URL (important for social auth) you'll need to edit your hosts file to point dev.festivaltribe.co.uk to 127.0.0.1

Now you can visit http://dev.festivaltribe.co.uk:4200 to get to the site.

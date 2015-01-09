/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	open: function(req, res){
		return res.ok('open');
	},
	restricted: function(req, res){
		return res.ok('restricted');
	},
	jwt: function(req, res){
		return res.ok('jwt');
	}
};

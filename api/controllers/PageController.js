/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	all: function(req, res) {
		Page.find().exec(function(err, allPages){
			var user = req.session.user;
			console.log(allPages);
			for(var i=0; i<allPages.length; i++) {
				allPages[i] = allPages[i].toJSON();
			}
			res.view({ user: user, pages: allPages, layout: 'admin' });
		});
	},

	new: function(req, res) {
		var allPages = Page.findAll();
		var user = req.session.user;

		res.view({ user: user, pages: allPages, layout: 'admin' });
	},

	create: function(req, res) {
		Page.create(req.params.all()).exec(function(err, new_post){
			if (err) {

			}
			else {
				req.flash('success', 'Page has been created!');
				res.redirect('/admin/pages/' + new_post.id + '/edit');
			}
		});
	},

	edit: function(req, res) {
		var page_id = req.param('id');
		var user = req.session.user;
		var page = Page.findOne({ id: page_id }).exec(function(err, page){
			res.view({ page: page.toJSON(), user: user, layout: 'admin' });
		});
	}

};

